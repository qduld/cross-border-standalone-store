import { NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not defined')
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-02-25.clover',
  })
}

export async function POST(request: Request) {
  try {
    const stripe = getStripe()
    const body = await request.json()
    const { amount, items, customer, shippingAddress } = body

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        items: JSON.stringify(items),
        customer_name: customer.name,
        customer_email: customer.email,
        shipping_address: shippingAddress ? JSON.stringify(shippingAddress) : '{}',
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
  } catch (error: any) {
    console.error('Stripe error:', error)
    return NextResponse.json(
      { error: error.message || 'Payment initialization failed' },
      { status: 500 }
    )
  }
}