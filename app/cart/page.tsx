import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus } from "lucide-react";

// Mock cart data
const cartItems = [
  {
    id: "1",
    title: "Seashell Hairpin - Ocean Waves",
    titleEn: "Seashell Hairpin - Ocean Waves",
    price: 28.00,
    quantity: 2,
    image: "/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg",
    category: "Seashell Jewelry",
  },
  {
    id: "5",
    title: "琵琶发夹 - 红色",
    titleEn: "Pipa Style Hair Clip - Red",
    price: 35.00,
    quantity: 1,
    image: "/products/583ca2e7-a4f3-4945-9b68-cb18b4d80313.jpg",
    category: "Chinese Style",
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-12 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
            购物车
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Shopping Cart ({cartItems.length} items)
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow border border-red-100">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="w-32 h-32 flex-shrink-0">
                        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.titleEn}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">
                              {item.titleEn}
                            </h3>
                            <p className="text-sm text-gray-600">{item.title}</p>
                            <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-3 py-1 rounded-full mt-2">
                              {item.category}
                            </span>
                          </div>
                          <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity */}
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-8 h-8 rounded-full"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-8 h-8 rounded-full"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Continue Shopping */}
              <div className="text-center pt-4">
                <Link href="/products">
                  <Button variant="outline" size="lg">
                    ← 继续购物 Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border border-red-100">
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                    订单摘要
                  </h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">小计 Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">运费 Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? (
                          <span className="text-green-600">免费 FREE</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <div className="text-sm text-red-600 bg-red-50 p-2 rounded-lg">
                        订单超过 $50 免运费
                      </div>
                    )}
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold">总计 Total</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <Button size="lg" variant="gradient" className="w-full text-lg py-4">
                      前往结账 →
                    </Button>
                  </Link>

                  <div className="text-center text-sm text-gray-600">
                    <p>🔒 安全结账</p>
                    <p>✅ 30天退换保证</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}