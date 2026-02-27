"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  ShoppingCart, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
  })

  // Mock cart data
  const cartItems = [
    { id: "1", title: "Seashell Hairpin - Ocean Waves", price: 28.00, quantity: 1 },
    { id: "5", title: "Pipa Style Hair Clip - Red", price: 35.00, quantity: 1 },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.00
  const total = subtotal + shipping

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
              Checkout
            </h1>
            <p className="text-gray-600 mt-1">Complete your order</p>
          </div>
        </div>

        {success ? (
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="py-16 text-center">
              <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Order Placed Successfully!
              </h2>
              <p className="text-green-700 text-lg mb-8">
                Thank you for your purchase. Your order is being processed.
              </p>
              <div className="bg-white rounded-lg p-6 max-w-md mx-auto mb-6 shadow-lg">
                <div className="text-sm text-gray-600 mb-2">Order Number</div>
                <div className="text-2xl font-bold text-gray-900">ORD-{Date.now().toString().slice(-6)}</div>
              </div>
              <Link href="/">
                <Button variant="gradient" size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-red-700" />
                    Shipping Information
                  </CardTitle>
                  <CardDescription>
                    Enter your shipping details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        placeholder="123 Main St"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          placeholder="New York"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input 
                          id="zip" 
                          placeholder="10001"
                          value={formData.zip}
                          onChange={(e) => setFormData({...formData, zip: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{error}</p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      variant="gradient" 
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Processing Order...
                        </>
                      ) : (
                        <>
                          Place Order - ${total.toFixed(2)}
                        </>
                      )}
                    </Button>

                    <div className="text-center text-sm text-gray-500 mt-4">
                      Demo mode - No actual payment required
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Payment Method (Demo) */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 border-2 border-red-500 bg-red-50 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-red-700 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="font-medium">Demo Payment (No card required)</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    In production, this will integrate with Stripe for real payments.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-red-700" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-gray-500">Qty: {item.quantity}</div>
                        </div>
                        <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Shipping</span>
                        <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t">
                        <span>Total</span>
                        <span className="bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <p className="text-sm text-orange-700">
                        💡 Add ${(50 - subtotal).toFixed(2)} more to get FREE shipping!
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}