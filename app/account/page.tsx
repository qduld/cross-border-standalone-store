"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

interface User {
  email: string
  name: string
  isLoggedIn: boolean
}

export default function AccountPage() {
  const { t } = useLanguage()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Load user from localStorage
    const userStr = localStorage.getItem("user")
    if (userStr) {
      setUser(JSON.parse(userStr))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    window.location.href = "/"
  }

  const menuItems = [
    {
      title: t("我的订单", "My Orders"),
      description: t("查看和管理您的订单", "View and manage your orders"),
      icon: "📦",
      link: "/orders"
    },
    {
      title: t("收货地址", "Shipping Addresses"),
      description: t("管理您的收货地址", "Manage your shipping addresses"),
      icon: "📍",
      link: "/addresses"
    },
    {
      title: t("收藏夹", "Wishlist"),
      description: t("查看您收藏的商品", "View your favorite products"),
      icon: "❤️",
      link: "/wishlist"
    },
    {
      title: t("账户设置", "Account Settings"),
      description: t("更新您的个人信息", "Update your personal information"),
      icon: "⚙️",
      link: "/settings"
    },
    {
      title: t("支付方式", "Payment Methods"),
      description: t("管理您的支付方式", "Manage your payment methods"),
      icon: "💳",
      link: "/payment"
    }
  ]

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
        <Navbar />
        <div className="max-w-md mx-auto px-4 py-20">
          <Card className="border border-red-100 dark:border-gray-600 dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {t("未登录", "Not Logged In")}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                {t("请先登录以访问您的账户", "Please sign in to access your account")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/login">
                <Button variant="gradient" className="w-full">
                  {t("登录", "Sign In")}
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="w-full dark:border-gray-600 dark:text-white">
                  {t("注册新账户", "Register New Account")}
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="w-full dark:text-gray-400">
                  {t("返回首页", "Back to Home")}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* User Info Card */}
        <Card className="mb-8 border border-red-100 dark:border-gray-600 dark:bg-gray-800">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {user.email}
                </CardDescription>
              </div>
              <Button variant="outline" onClick={handleLogout} className="dark:border-gray-600 dark:text-white">
                {t("退出登录", "Logout")}
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border border-red-100 dark:border-gray-600 dark:bg-gray-800">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {t("总订单", "Total Orders")}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-red-100 dark:border-gray-600 dark:bg-gray-800">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {t("收藏商品", "Wishlist Items")}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-red-100 dark:border-gray-600 dark:bg-gray-800">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">$0.00</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {t("总消费", "Total Spent")}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Menu Items */}
        <h2 className="text-xl font-bold mb-4">{t("账户管理", "Account Management")}</h2>
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <Card className="border border-red-100 hover:shadow-lg transition-all dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Support Section */}
        <Card className="mt-8 border border-red-100 dark:border-gray-600 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="text-3xl">💬</div>
              <div className="flex-1">
                <h3 className="font-semibold">{t("需要帮助？", "Need Help?")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t("联系我们的客服团队", "Contact our support team")}</p>
              </div>
              <Link href="/contact">
                <Button variant="outline" className="dark:border-gray-600 dark:text-white">
                  {t("联系我们", "Contact Us")}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}