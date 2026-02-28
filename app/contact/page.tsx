"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-700 via-red-600 to-orange-500 overflow-hidden dark:from-red-800 dark:via-red-700 dark:to-orange-600">
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
              {t("联系我们", "Contact Us")}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Contact Us
            </p>
            <div className="w-24 h-1 bg-white dark:bg-gray-600 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl border border-red-100 dark:border-gray-600">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                {t("发送消息", "Send Message")}
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("姓名 Name", "Name")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-800 dark:text-white"
                    placeholder={t("请输入您的姓名", "Enter your name")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("邮箱 Email", "Email")}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-800 dark:text-white"
                    placeholder={t("请输入您的邮箱", "Enter your email")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("主题 Subject", "Subject")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-800 dark:text-white"
                    placeholder={t("请输入消息主题", "Enter message subject")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("消息 Message", "Message")}
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none dark:bg-gray-800 dark:text-white"
                    placeholder={t("请输入您的消息内容", "Enter your message content")}
                  />
                </div>
                <Button size="lg" variant="gradient" className="w-full">
                  <Send className="mr-2 w-5 h-5" />
                  {t("发送消息", "Send Message")}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-red-100 dark:border-gray-600">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                  {t("联系方式", "Contact Information")}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t("邮箱 Email", "Email")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">support@craftshop.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t("电话 Phone", "Phone")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">+86 138 0000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t("地址 Address", "Address")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{t("中国 上海市", "Shanghai, China")}</p>
                      <p className="text-gray-600 dark:text-gray-300">Shanghai, China</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl border border-red-100 dark:border-gray-600">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                  {t("营业时间", "Business Hours")}
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                  🕐 Business Hours
                </p>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>{t("周一至周五", "Monday - Friday")}</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("周六周日", "Saturday - Sunday")}</span>
                    <span className="font-medium">10:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("节假日", "Holidays")}</span>
                    <span className="font-medium text-red-600 dark:text-red-400">{t("休息", "Closed")}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-700 via-red-600 to-orange-500 rounded-2xl p-8 text-white dark:from-red-800 dark:via-red-700 dark:to-orange-600">
                <h3 className="text-xl font-bold mb-4">
                  💬 {t("即时咨询", "Instant Consultation")}
                </h3>
                <p className="opacity-90 mb-4">
                  {t("如有紧急问题，请通过我们的社交媒体联系", "For urgent questions, please contact us via our social media")}
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/20">
                    {t("微信", "WeChat")}
                  </Button>
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/20">
                    {t("微博", "Weibo")}
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