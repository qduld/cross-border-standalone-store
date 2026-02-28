import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, ShoppingBag, Heart, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-12 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
            我的账户
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            My Account
          </p>
        </div>
      </section>

      {/* Account Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-red-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">欢迎回来!</div>
                  <div className="text-sm text-gray-600">Welcome back!</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 mb-6">
                登录以管理您的订单、收藏和账户设置
              </p>
              <div className="grid gap-3">
                <Link href="/login">
                  <Button variant="outline" className="w-full justify-start h-12 text-base">
                    <User className="w-5 h-5 mr-3" />
                    登录 / 注册
                  </Button>
                </Link>
                <Link href="/cart">
                  <Button variant="outline" className="w-full justify-start h-12 text-base">
                    <ShoppingBag className="w-5 h-5 mr-3" />
                    查看购物车
                  </Button>
                </Link>
              </div>
              <div className="pt-4 border-t mt-4">
                <div className="text-sm text-gray-600 mb-3">
                  已登录账户功能：
                </div>
                <div className="grid gap-3">
                  <Button variant="ghost" className="w-full justify-start h-12 text-base text-gray-400" disabled>
                    <Heart className="w-5 h-5 mr-3" />
                    我的收藏
                  </Button>
                  <Button variant="ghost" className="w-full justify-start h-12 text-base text-gray-400" disabled>
                    <Settings className="w-5 h-5 mr-3" />
                    账户设置
                  </Button>
                  <Button variant="ghost" className="w-full justify-start h-12 text-base text-gray-400" disabled>
                    <LogOut className="w-5 h-5 mr-3" />
                    退出登录
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}