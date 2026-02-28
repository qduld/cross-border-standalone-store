import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Truck, Lock } from "lucide-react";

// Mock order data
const orderData = {
  items: [
    {
      id: "1",
      title: "Seashell Hairpin - Ocean Waves",
      price: 28.00,
      quantity: 2,
      image: "/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg",
    },
    {
      id: "5",
      title: "Pipa Style Hair Clip - Red",
      price: 35.00,
      quantity: 1,
      image: "/products/583ca2e7-a4f3-4945-9b68-cb18b4d80313.jpg",
    },
  ],
  subtotal: 91.00,
  shipping: 0,
  total: 91.00,
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-12 border-b border-red-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
            结账
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
            Checkout
          </p>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <Card className="border border-red-100 dark:border-gray-600 dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <h2 className="text-xl font-bold dark:text-white">配送信息</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        名字 First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                        placeholder="请输入名字"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        姓氏 Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                        placeholder="请输入姓氏"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        邮箱 Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                        placeholder="请输入邮箱"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        电话 Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                        placeholder="请输入电话"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        地址 Address
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                        placeholder="请输入地址"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        城市 City
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                        placeholder="城市"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        邮编 Zip Code
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                        placeholder="邮编"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="border border-red-100 dark:border-gray-600 dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <h2 className="text-xl font-bold dark:text-white">支付方式</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 border-2 border-red-500 rounded-xl bg-red-50 dark:bg-red-900/20">
                      <input type="radio" name="payment" checked className="w-5 h-5 text-red-600" />
                      <div className="flex-1">
                        <div className="font-semibold dark:text-white">信用卡 Credit Card</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Visa, Mastercard, American Express</div>
                      </div>
                      <div className="text-2xl">💳</div>
                    </div>

                    <div className="flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-red-500 transition-colors">
                      <input type="radio" name="payment" className="w-5 h-5 text-red-600" />
                      <div className="flex-1">
                        <div className="font-semibold dark:text-white">PayPal</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Safe and secure payment</div>
                      </div>
                      <div className="text-2xl">🅿️</div>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        卡号 Card Number
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          过期日期 Expiry
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border border-red-100 dark:border-gray-600 dark:bg-gray-800">
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                    订单摘要
                  </h2>

                  {/* Order Items */}
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {orderData.items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-16 h-16 flex-shrink-0">
                          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm line-clamp-2 dark:text-white">{item.title}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">数量: {item.quantity}</p>
                          <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-3 dark:border-gray-600">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">小计 Subtotal</span>
                      <span className="font-semibold dark:text-white">${orderData.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">运费 Shipping</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">免费 FREE</span>
                    </div>
                    <div className="border-t pt-3 dark:border-gray-600">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold dark:text-white">总计 Total</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                          ${orderData.total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" variant="gradient" className="w-full text-lg py-4">
                    <Lock className="mr-2 w-5 h-5" />
                    安全支付 Pay Now
                  </Button>

                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>安全支付</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Truck className="w-4 h-4 text-blue-600" />
                      <span>全球配送</span>
                    </div>
                  </div>

                  <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                    <p>🔒 SSL加密保护您的信息</p>
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