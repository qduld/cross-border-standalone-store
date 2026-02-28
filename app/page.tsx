import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";

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
    title: "Pipa Style Hair Clip - Chinese Musical Instrument",
    price: 35.00,
    image: "/products/76992cd5-3fc0-4234-b49e-8cfa198a2c75.jpg",
    category: "Chinese Style"
  },
  {
    id: "3",
    title: "Handknit Cute Doll - Panda",
    price: 42.00,
    image: "/products/031029c0-f688-41a0-acab-b736967ba122.jpg",
    category: "Handknit"
  },
  {
    id: "4",
    title: "Red String Gold Lock - Good Luck Charm",
    price: 55.00,
    image: "/products/583ca2e7-a4f3-4945-9b68-cb18b4d80313.jpg",
    category: "Chinese Style"
  }
];

const categories = [
  {
    name: "Seashell Jewelry",
    slug: "seashell",
    icon: "🐚",
    description: "Ocean-inspired accessories",
    color: "from-blue-400 to-cyan-300",
    pattern: "wave"
  },
  {
    name: "Chinese Style",
    slug: "chinese",
    icon: "🎋",
    description: "Traditional Chinese aesthetics",
    color: "from-red-500 to-orange-400",
    pattern: "cloud"
  },
  {
    name: "Handknit Items",
    slug: "handknit",
    icon: "🧶",
    description: "Handmade wool creations",
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white">
      <Navbar />

      {/* Animated Chinese Pattern Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse">🌸</div>
        <div className="absolute top-40 right-20 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>🏮</div>
        <div className="absolute bottom-40 left-20 text-7xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>🎋</div>
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
                <span className="block text-gray-900">东方美学</span>
                <span className="block bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                  臻于至善
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                传承千年的手工技艺，融合现代设计理念。
                <br />
                每一件作品，都是时光的礼物。
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg" variant="gradient" className="px-8">
                    <span className="mr-2">🛍️</span>
                    探索精品
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    品牌故事
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-2xl">🎨</span>
                  <span className="text-sm">手工制作</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-2xl">🌍</span>
                  <span className="text-sm">全球配送</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-2xl">💎</span>
                  <span className="text-sm">品质保证</span>
                </div>
              </div>
            </div>

            {/* Hero Image with Chinese Frame */}
            <div className="relative">
              <div className="relative aspect-square bg-gradient-to-br from-red-100 to-orange-50 rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Chinese Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 text-9xl">🌸</div>
                  <div className="absolute bottom-4 right-4 text-9xl">🎋</div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl">🏮</div>
                </div>

                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4 animate-bounce">🐚</div>
                    <div className="text-4xl font-bold text-red-800 mb-2">贝壳饰品</div>
                    <div className="text-xl text-gray-600">Sea Shell Collection</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-3xl">💎</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-3xl">🌸</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="text-center py-8 animate-bounce">
        <div className="text-gray-400 text-sm">向下滚动探索更多</div>
        <div className="text-2xl mt-2">↓</div>
      </div>

      {/* Categories Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-red-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                三大系列
              </span>
            </h2>
            <p className="text-gray-600 text-lg">Three Collections, One Soul</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${category.color.split(' ')[0].replace('from-', '')}, ${category.color.split(' ')[1].replace('to-', '')})`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Chinese Pattern Background */}
                <div className={`absolute inset-0 ${chinesePatterns[category.pattern as keyof typeof chinesePatterns]}`}></div>

                <div className="relative z-10">
                  <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-white/90 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/80 mb-6">{category.description}</p>
                  <div className="inline-flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform">
                    立即探索
                    <span className="ml-2">→</span>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Enhanced */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                  精选推荐
                </span>
              </h2>
              <p className="text-gray-600">Featured Products</p>
            </div>
            <Link href="/products">
              <Button variant="gradient" className="mt-4 md:mt-0">
                查看全部 →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Sale Badge */}
                    <div className="absolute top-4 left-4 bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      热销
                    </div>
                    {/* Quick Actions */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link href={`/product/${product.id}`}>
                        <Button className="bg-white text-red-700 hover:bg-red-50 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          快速查看
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-red-700 mb-2 font-medium">{product.category}</div>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                        ${product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <span>⭐</span>
                          <span className="text-sm text-gray-600">4.9</span>
                        </div>
                        <Link href={`/product/${product.id}`}>
                          <Button variant="outline" size="sm" className="rounded-full">
                            查看详情
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
      <section className="py-20 bg-gradient-to-br from-red-700 via-red-600 to-orange-500 relative overflow-hidden">
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
                传统工艺
                <br />
                现代美学
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                我们精心甄选来自中国各地的手工艺术品，每一件都承载着匠人的心血与智慧。
                从海洋深处的贝壳，到传承千年的中国元素，再到温暖人心的毛线编织，
                我们致力于将这些美好的东西带给全世界。
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-colors">
                  <div className="text-5xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80 text-sm">Unique Products</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-colors">
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80 text-sm">Handcrafted</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-colors">
                  <div className="text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/80 text-sm">Support</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-colors">
                  <div className="text-5xl font-bold text-white mb-2">🌍</div>
                  <div className="text-white/80 text-sm">Worldwide Shipping</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="text-center space-y-8">
                  <div className="text-9xl animate-pulse">🎋</div>
                  <div className="text-6xl font-bold text-white">匠心独运</div>
                  <div className="text-xl text-white/80">Craftsmanship at its Best</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="text-6xl animate-bounce">📧</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
            加入我们的社区
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            订阅获取新品上架、特别优惠和每个产品背后的故事
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入您的邮箱"
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-200 text-lg"
            />
            <Button variant="gradient" size="lg" className="rounded-full px-8">
              订阅 →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}