"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/context/LanguageContext"

export default function OrdersPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">{t("我的订单", "My Orders")}</h1>

        <Card className="border border-red-100 dark:border-gray-600 dark:bg-gray-800">
          <CardHeader>
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📦</div>
              <CardTitle className="text-xl mb-2">{t("暂无订单", "No Orders Yet")}</CardTitle>
              <CardDescription>
                {t("开始购物，创建您的第一个订单", "Start shopping to create your first order")}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="text-center pb-12">
            <Link href="/products">
              <Button variant="gradient">
                {t("开始购物", "Start Shopping")}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}