import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'
import { prisma } from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
})

export async function POST(request: Request) {
  const body = await request.text()
  const signature = headers().get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      
      // Create order in database
      const items = JSON.parse(paymentIntent.metadata.items || '[]')
      const customerName = paymentIntent.metadata.customer_name || ''
      const customerEmail = paymentIntent.metadata.customer_email || ''

      // Generate order number
      const orderNumber = `ORD-${Date.now().toString().slice(-6)}`

      await prisma.order.create({
        data: {
          orderNumber,
          customerName,
          customerEmail,
          items,
          subtotal: paymentIntent.amount / 100,
          shipping: 0, // Calculate based on your shipping logic
          total: paymentIntent.amount / 100,
          currency: paymentIntent.currency,
          status: 'PAID',
          paymentId: paymentIntent.id,
          paymentMethod: 'stripe',
        },
      })

      console.log(`Order created: ${orderNumber}`)
      break

    case 'payment_intent.failed':
      console.error('Payment failed:', event.data.object)
      // You might want to notify the admin or log this
      break

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}