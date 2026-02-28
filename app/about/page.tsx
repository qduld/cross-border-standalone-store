"use client"

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Globe, Award, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
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
              {t("关于我们", "About Us")}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              About Us
            </p>
            <div className="w-24 h-1 bg-white mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                {t("我们的故事", "Our Story")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Our Story</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t("Craft Shop 成立于2024年，是一个致力于将东方手工艺术带给全球消费者的独立电商平台。我们深知每一件手工艺品背后都承载着匠人的心血与智慧，以及千百年的文化传承。",
                  "Craft Shop was founded in 2024 as an independent e-commerce platform dedicated to bringing Eastern handcrafted arts to global consumers. We understand that every handcrafted piece carries the artisan's dedication and wisdom, as well as centuries of cultural heritage.")}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t("从海洋深处的贝壳饰品，到传承千年的中国风元素，再到温暖人心的手工编织制品，我们精心甄选每一件产品。我们的使命是通过这些精美的手工艺品，让世界了解和欣赏东方文化的独特魅力。",
                  "From seashell jewelry deep in the ocean to Chinese-style elements passed down for millennia, to heartwarming hand-knitted items, we carefully curate every product. Our mission is to help the world understand and appreciate the unique charm of Eastern culture through these exquisite handcrafted pieces.")}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("我们相信，每一件作品都是时光的礼物。无论您是收藏家、文化爱好者，还是寻找独特礼物的购物者，我们都希望为您提供最佳的选择和服务。",
                  "We believe every piece is a gift from time. Whether you are a collector, culture enthusiast, or shopper looking for unique gifts, we hope to provide you with the best choices and service.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-red-50/50 to-white dark:from-gray-800/50 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
              {t("我们的价值观", "Our Values")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Our Values</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-red-100 dark:border-gray-600">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                {t("匠心", "Craftsmanship")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {t("尊重每一位匠人的劳动，坚持手工制作的传统", "Respecting every artisan's labor, upholding the tradition of handcrafting")}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-red-100 dark:border-gray-600">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                {t("全球", "Global")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {t("将东方艺术带给全世界，跨越地域和文化的界限", "Bringing Eastern art to the world, crossing boundaries of region and culture")}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-red-100 dark:border-gray-600">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                {t("品质", "Quality")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {t("严格把控产品质量，只为提供最优质的手工艺品", "Strictly controlling product quality to provide only the finest handcrafted items")}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-red-100 dark:border-gray-600">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                {t("服务", "Service")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {t("以客户为中心，提供贴心周到的购物体验", "Customer-centric, providing thoughtful and attentive shopping experience")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-700 via-red-600 to-orange-500 rounded-3xl p-12 text-center text-white shadow-2xl dark:from-red-800 dark:via-red-700 dark:to-orange-600">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("开启您的东方美学之旅", "Begin Your Oriental Aesthetics Journey")}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              {t("探索我们的精选系列，发现独特的手工艺术品", "Explore our curated collection and discover unique handcrafted artworks")}
            </p>
            <Link href="/products">
              <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 px-8 py-4 rounded-full">
                {t("立即浏览", "Browse Now")} →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}