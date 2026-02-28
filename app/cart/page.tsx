"use client"

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const { t } = useLanguage();
  const shipping = cartTotal > 50 ? 0 : 10;
  const total = cartTotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
        <Navbar />
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
              {t("购物车是空的", "Your cart is empty")}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {t("还没有添加任何商品，快去挑选吧！", "No items added yet, go shopping now!")}
            </p>
            <Link href="/products">
              <Button size="lg" variant="gradient">
                {t("浏览商品", "Browse Products")}
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-12 border-b border-red-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
            {t("购物车", "Shopping Cart")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
            {t("购物车", "Shopping Cart")} ({cartCount} {t("件商品", "items")})
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow border border-red-100 dark:border-gray-600 dark:bg-gray-700">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="w-32 h-32 flex-shrink-0">
                        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700 rounded-xl overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                              {item.title}
                            </h3>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-600 hover:text-red-700 dark:text-red-400"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity */}
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-8 h-8 rounded-full dark:border-gray-600 dark:text-white"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-12 text-center font-semibold dark:text-white">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-8 h-8 rounded-full dark:border-gray-600 dark:text-white"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)} {t("每件", "each")}</p>
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
                  <Button variant="outline" size="lg" className="dark:border-gray-600 dark:text-white">
                    ← {t("继续购物", "Continue Shopping")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border border-red-100 dark:border-gray-600 dark:bg-gray-700">
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                    {t("订单摘要", "Order Summary")}
                  </h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{t("小计", "Subtotal")}</span>
                      <span className="font-semibold dark:text-white">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{t("运费", "Shipping")}</span>
                      <span className="font-semibold dark:text-white">
                        {shipping === 0 ? (
                          <span className="text-green-600 dark:text-green-400">{t("免费", "FREE")}</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <div className="text-sm text-red-600 bg-red-50 p-2 rounded-lg dark:text-red-400 dark:bg-red-900/20">
                        {t("订单超过 $50 免运费", "Free shipping on orders over $50")}
                      </div>
                    )}
                    <div className="border-t pt-3 dark:border-gray-600">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold dark:text-white">{t("总计", "Total")}</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <Button size="lg" variant="gradient" className="w-full text-lg py-4">
                      {t("前往结账", "Proceed to Checkout")} →
                    </Button>
                  </Link>

                  <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>🔒 {t("安全结账", "Secure Checkout")}</p>
                    <p>✅ {t("30天退换保证", "30-Day Return Guarantee")}</p>
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