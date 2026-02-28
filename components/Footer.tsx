"use client"

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#C8161D' }}>
              Craft Shop
            </h3>
            <p className="text-gray-400 text-sm">
              {t(
                "手工制作的首饰和配饰，融入中国元素和独特的贝壳设计。",
                "Handcrafted jewelry and accessories featuring Chinese elements and unique seashell designs."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("商店", "Shop")}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/category/seashell" className="hover:text-white dark:hover:text-gray-300">{t("贝壳饰品", "Seashell Jewelry")}</Link></li>
              <li><Link href="/category/chinese" className="hover:text-white dark:hover:text-gray-300">{t("中国风饰品", "Chinese Style")}</Link></li>
              <li><Link href="/category/handknit" className="hover:text-white dark:hover:text-gray-300">{t("手工编织", "Handknit Items")}</Link></li>
              <li><Link href="/products" className="hover:text-white dark:hover:text-gray-300">{t("所有产品", "All Products")}</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">{t("客户服务", "Customer Service")}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/shipping" className="hover:text-white dark:hover:text-gray-300">{t("配送信息", "Shipping Info")}</Link></li>
              <li><Link href="/returns" className="hover:text-white dark:hover:text-gray-300">{t("退换货", "Returns & Refunds")}</Link></li>
              <li><Link href="/contact" className="hover:text-white dark:hover:text-gray-300">{t("联系我们", "Contact Us")}</Link></li>
              <li><Link href="/faq" className="hover:text-white dark:hover:text-gray-300">{t("常见问题", "FAQ")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("联系方式", "Contact")}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{t("邮箱：", "Email: ")}support@craftshop.com</li>
              <li>{t("我们接受：", "We accept:")}</li>
              <li className="flex space-x-2 text-lg">
                <span>💳</span>
                <span>🌍</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Craft Shop. {t("版权所有", "All rights reserved")}.</p>
        </div>
      </div>
    </footer>
  );
}