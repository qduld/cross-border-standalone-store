import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white">
      <Navbar />

      <div className="max-w-md mx-auto px-4 py-20">
        <Card className="border border-red-100">
          <CardHeader>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
              登录 / 注册
            </CardTitle>
            <CardDescription>
              登录以管理您的订单和收藏
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🔐</div>
              <p className="text-gray-600 mb-6">
                用户账户功能正在开发中
              </p>
              <p className="text-sm text-gray-500">
                您可以浏览和购买商品，无需登录
              </p>
            </div>

            <div className="space-y-3">
              <Link href="/cart">
                <Button variant="gradient" className="w-full">
                  查看购物车
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  返回首页
                </Button>
              </Link>
            </div>

            <div className="pt-4 border-t text-center text-sm text-gray-500">
              <p>需要帮助？<Link href="/contact" className="text-red-600 hover:underline">联系我们</Link></p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}