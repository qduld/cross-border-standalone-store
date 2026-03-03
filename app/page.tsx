"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import SubscribeForm from "@/components/SubscribeForm";
import { useLanguage } from "@/context/LanguageContext";

// Mock data
const featuredProducts = [
  {
    id: "1",
    title: "Seashell Hairpin - Ocean Waves",
    price: 28.00,
    image: "/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg",
    category: "Seashell"
  },
  {
    id: "2",
    title: "Seashell Necklace - Coral Style",
    price: 42.00,
    image: "/products/76992cd5-3fc0-4234-b49e-8cfa198a2c75.jpg",
    category: "Seashell"
  },
  {
    id: "13",
    title: "Handknit Cute Doll - Panda",
    price: 42.00,
    image: "/products/c87bc927-beb7-48f1-bf6f-80087967bcde.jpg",
    category: "Handknit"
  },
  {
    id: "10",
    title: "Red String Gold Lock - Good Luck Charm",
    price: 55.00,
    image: "/products/674a97be-cd48-446e-b3b5-4adb4746e8bd.jpg",
    category: "Chinese Style"
  }
];

const categories = [
  {
    name: "seashell",
    slug: "seashell",
    icon: "🐚",
    description: "seashell_description",
    color: "from-blue-400 to-cyan-300",
    pattern: "wave"
  },
  {
    name: "chinese",
    slug: "chinese",
    icon: "🎋",
    description: "chinese_description",
    color: "from-red-500 to-orange-400",
    pattern: "cloud"
  },
  {
    name: "handknit",
    slug: "handknit",
    icon: "🧶",
    description: "handknit_description",
    color: "from-purple-400 to-pink-300",
    pattern: "diamond"
  }
];

const chinesePatterns = {
  wave: "bg-gradient-to-br from-blue-100/20 to-cyan-100/20",
  cloud: "bg-gradient-to-br from-red-100/20 to-orange-100/20",
  diamond: "bg-gradient-to-br from-purple-100/20 to-pink-100/20",
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Navbar />

      {/* Animated Chinese Pattern Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse">🌸</div>
        <div className="absolute top-40 right-20 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>🏮</div>
        <div className="absolute top-40 left-1/3 text-7xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>🎋</div>
        <div className="absolute bottom-20 right-10 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}>🐉</div>
      </div>

      {/* Hero Section - Enhanced with Chinese Elements */}
      <section className="relative py-24 overflow-hidden">
        {/* Decorative Chinese Border */}
        <div className="absolute inset-0 border-8 border-red-200 opacity-20 pattern-border"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Chinese Seal/Stamp Effect */}
              <div className="inline-block">
                <div className="bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold border-2 border-red-800 shadow-lg">
                  ✨ 手工匠心 | HANDCRAFTED ✨
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-white">{t("东方美学", "Oriental Aesthetics")}</span>
                <span className="block bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                  {t("臻于至善", "Pursuit of Excellence")}
                </span>
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                {t("传承千年的手工技艺，融合现代设计理念。", "Millennia of craftsmanship fused with modern design.")}
                <br />
                {t("每一件作品，都是时光的礼物。", "Each piece is a gift from time.")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg" variant="gradient" className="px-8">
                    <span className="mr-2">🛍️</span>
                    {t("探索精品", "Explore Collection")}
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="dark:border-gray-600 dark:text-white">
                    {t("品牌故事", "Our Story")}
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <span className="text-2xl">🎨</span>
                  <span className="text-sm">{t("手工制作", "Handcrafted")}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <span className="text-2xl">🌍</span>
                  <span className="text-sm">{t("全球配送", "Global Delivery")}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <span className="text-2xl">💎</span>
                  <span className="text-sm">{t("品质保证", "Quality Guaranteed")}</span>
                </div>
              </div>
            </div>

            {/* Hero Image - Premium Product Showcase */}
            <div className="relative">
              <div className="relative aspect-[4/3] lg:aspect-square bg-gradient-to-br from-gray-50 dark:from-gray-800 via-red-50/20 dark:via-red-900/20 to-orange-50/30 dark:to-orange-900/30 rounded-3xl p-6 shadow-2xl overflow-hidden flex flex-col">
                {/* Elegant Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-200 to-orange-100 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-red-200 to-orange-100 rounded-full blur-3xl"></div>
                </div>

                {/* Geometric Pattern */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full opacity-5" viewBox="0 0 400 400">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Main Product Display */}
                <div className="relative flex-grow flex flex-col items-center justify-center pb-8">
                  {/* Featured Products Grid */}
                  <div className="relative w-full max-w-lg">
                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      {/* Product 1 - Seashell */}
                      <Link href="/product/1" className="relative bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src="/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg"
                            alt="Seashell Hairpin"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                          热销
                        </div>
                      </Link>

                      {/* Product 2 - Chinese Style */}
                      <Link href="/product/5" className="relative bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src="/products/583ca2e7-a4f3-4945-9b68-cb18b4d80313.jpg"
                            alt="Pipa Hair Clip"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute top-2 right-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                          精选
                        </div>
                      </Link>

                      {/* Product 3 - Handknit */}
                      <Link href="/product/13" className="relative bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src="/products/c87bc927-beb7-48f1-bf6f-80087967bcde.jpg"
                            alt="Panda Doll"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                          新品
                        </div>
                      </Link>

                      {/* Product 4 - Necklace */}
                      <Link href="/product/2" className="relative bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src="/products/76992cd5-3fc0-4234-b49e-8cfa198a2c75.jpg"
                            alt="Seashell Necklace"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Floating Tag - Absolute positioned outside container to avoid overflow hidden */}
                <div className="absolute bottom-4 right-6 lg:right-8 bg-white/95 dark:bg-gray-700/95 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-xl border border-red-100 dark:border-gray-600 z-20">
                  <div className="flex items-center justify-between max-w-md">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white text-xl lg:text-2xl shadow-lg">
                        🎁
                      </div>
                      <div>
                        <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-300">精选系列</div>
                        <div className="font-bold text-sm lg:text-base text-gray-900 dark:text-white">Three Collections</div>
                      </div>
                    </div>
                    <Link href="/products">
                      <Button variant="gradient" size="sm" className="rounded-full text-xs lg:text-sm px-3 lg:px-4">
                        查看全部 →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-red-500 to-orange-400 rounded-2xl p-3 shadow-xl animate-float" style={{ animationDuration: '4s' }}>
                <span className="text-3xl">🐚</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-700 rounded-2xl p-3 shadow-xl animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <span className="text-3xl">🎋</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="text-center py-8 animate-bounce">
        <div className="text-gray-400 text-sm">{t("向下滚动探索更多", "Scroll Down to Explore More")}</div>
        <div className="text-2xl mt-2">↓</div>
      </div>

      {/* Categories Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-red-50/50 to-white dark:from-gray-800/50 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                {t("三大系列", "Three Collections")}
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Three Collections, One Soul</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              // Map slug to category name for URL
              const categoryMap: Record<string, string> = {
                seashell: "Seashell",
                chinese: "Chinese Style",
                handknit: "Handknit"
              };
              const categoryName = categoryMap[category.slug] || category.slug;

              return (
                <Link
                  key={category.slug}
                  href={`/products?category=${encodeURIComponent(categoryName)}`}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${category.color.split(' ')[0].replace('from-', '')}, ${category.color.split(' ')[1].replace('to-', '')})`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Dark Overlay for Better Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50 pointer-events-none"></div>

                  {/* Chinese Pattern Background */}
                  <div className={`absolute inset-0 ${chinesePatterns[category.pattern as keyof typeof chinesePatterns]}`}></div>

                  <div className="relative z-10">
                    <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-white/90 transition-colors">
                      {t(category.name === "seashell" ? "贝壳首饰" : category.name === "chinese" ? "中国风" : "手工编织",
                         category.name === "seashell" ? "Seashell Jewelry" : category.name === "chinese" ? "Chinese Style" : "Handknit Items")}
                    </h3>
                    <p className="text-white/90 mb-6 font-medium">{t(category.description === "seashell_description" ? "海洋灵感配饰" :
                       category.description === "chinese_description" ? "传统中国美学" : "手工毛线创作",
                       category.description === "seashell_description" ? "Ocean-inspired accessories" :
                       category.description === "chinese_description" ? "Traditional Chinese aesthetics" : "Handmade wool creations")}</p>
                    <div className="inline-flex items-center text-sm font-bold group-hover:translate-x-2 transition-transform bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      {t("立即探索", "Explore Now")}
                      <span className="ml-2">→</span>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products - Enhanced */}
      <section className="py-20 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                  {t("精选推荐", "Featured Products")}
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Featured Products</p>
            </div>
            <Link href="/products">
              <Button variant="gradient" className="mt-4 md:mt-0">
                {t("查看全部", "View All")} →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700 shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Sale Badge */}
                    <div className="absolute top-4 left-4 bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {t("热销", "Hot")}
                    </div>
                    {/* Quick Actions */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link href={`/product/${product.id}`}>
                        <Button className="bg-white text-red-700 hover:bg-red-50 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          {t("快速查看", "Quick View")}
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs text-red-700 mb-2 font-medium">{product.category}</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[2.75rem] group-hover:text-red-700 transition-colors">
                      {product.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between">
                      <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                        ${product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <span>⭐</span>
                          <span className="text-sm text-gray-600 dark:text-gray-300">4.9</span>
                        </div>
                        <Link href={`/product/${product.id}`}>
                          <Button variant="outline" size="sm" className="rounded-full dark:border-gray-600 dark:text-white">
                            {t("查看详情", "View Details")}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with Chinese Elements */}
      <section className="py-20 bg-gradient-to-br from-red-700 via-red-600 to-orange-500 relative overflow-hidden dark:from-red-800 dark:via-red-700 dark:to-orange-600">
        {/* Chinese Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🏮</div>
          <div className="absolute top-40 right-20 text-8xl">🌸</div>
          <div className="absolute bottom-20 left-1/3 text-9xl">🐉</div>
          <div className="absolute bottom-40 right-10 text-8xl">🎋</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {t("传统工艺", "Traditional Craftsmanship")}
                <br />
                {t("现代美学", "Modern Aesthetics")}
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                {t("我们精心甄选来自中国各地的手工艺术品，每一件都承载着匠人的心血与智慧。从海洋深处的贝壳，到传承千年的中国元素，再到温暖人心的毛线编织，我们致力于将这些美好的东西带给全世界。", 
                  "We carefully select handcrafted artworks from across China, each piece bearing the heart and wisdom of artisans. From seashells deep in the ocean to Chinese elements passed down for millennia, to heartwarming wool knitting, we are dedicated to bringing these beautiful creations to the world.")}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-colors">
                  <div className="text-5xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80 text-sm">{t("独特产品", "Unique Products")}</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-colors">
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80 text-sm">{t("纯手工", "Handcrafted")}</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-colors">
                  <div className="text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/80 text-sm">{t("客户支持", "Support")}</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-colors">
                  <div className="text-5xl font-bold text-white mb-2">🌍</div>
                  <div className="text-white/80 text-sm">{t("全球配送", "Worldwide Shipping")}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="text-center space-y-8">
                  <div className="text-9xl animate-pulse">🎋</div>
                  <div className="text-6xl font-bold text-white">{t("匠心独运", "Craftsmanship at its Best")}</div>
                  <div className="text-xl text-white/80">Craftsmanship at its Best</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50/30 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="text-6xl animate-bounce">📧</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
            {t("加入我们的社区", "Join Our Community")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            {t("订阅获取新品上架、特别优惠和每个产品背后的故事", "Subscribe to get new arrivals, special offers, and stories behind each product")}
          </p>
          <SubscribeForm className="max-w-md mx-auto" />
        </div>
      </section>

      <Footer />
    </div>
  );
}