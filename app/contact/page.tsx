import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-700 via-red-600 to-orange-500 overflow-hidden">
        {/* Chinese Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🏮</div>
          <div className="absolute top-40 right-20 text-8xl">🌸</div>
          <div className="absolute bottom-20 left-1/3 text-9xl">🐉</div>
          <div className="absolute bottom-40 right-10 text-8xl">🎋</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              联系我们
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Contact Us
            </p>
            <div className="w-24 h-1 bg-white mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-100">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                发送消息
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱 Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="请输入您的邮箱"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    主题 Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="请输入消息主题"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    消息 Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder="请输入您的消息内容"
                  />
                </div>
                <Button size="lg" variant="gradient" className="w-full">
                  <Send className="mr-2 w-5 h-5" />
                  发送消息 Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                  联系方式
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">邮箱 Email</h3>
                      <p className="text-gray-600">support@craftshop.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">电话 Phone</h3>
                      <p className="text-gray-600">+86 138 0000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">地址 Address</h3>
                      <p className="text-gray-600">中国 上海市</p>
                      <p className="text-gray-600">Shanghai, China</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-100">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                  营业时间
                </h2>
                <p className="text-xl text-gray-700 mb-4">
                  🕐 Business Hours
                </p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>周一至周五</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>周六周日</span>
                    <span className="font-medium">10:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>节假日</span>
                    <span className="font-medium text-red-600">休息</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-700 via-red-600 to-orange-500 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  💬 即时咨询
                </h3>
                <p className="opacity-90 mb-4">
                  如有紧急问题，请通过我们的社交媒体联系
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    微信
                  </Button>
                  <Button variant="outline" size="sm">
                    微博
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}