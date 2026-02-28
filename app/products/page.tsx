"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Mock data with i18n support
const allProducts = [
  // Seashell Jewelry
  {
    id: "1",
    title: { zh: "贝壳发夹 - 海浪", en: "Seashell Hairpin - Ocean Waves" },
    price: 28.00,
    image: "/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg",
    category: { zh: "贝壳饰品", en: "Seashell" }
  },
  {
    id: "2",
    title: { zh: "贝壳项链 - 珊瑚风格", en: "Seashell Necklace - Coral Style" },
    price: 42.00,
    image: "/products/76992cd5-3fc0-4234-b49e-8cfa198a2c75.jpg",
    category: { zh: "贝壳饰品", en: "Seashell" }
  },
  {
    id: "3",
    title: { zh: "贝壳手链 - 海星设计", en: "Seashell Bracelet - Starfish Design" },
    price: 35.00,
    image: "/products/fcfb12aa-364d-4287-9dbf-4708c50abaea.jpg",
    category: { zh: "贝壳饰品", en: "Seashell" }
  },
  {
    id: "4",
    title: { zh: "贝壳戒指 - 珍珠点缀", en: "Seashell Ring - Pearl Accent" },
    price: 25.00,
    image: "/products/031029c0-f688-41a0-acab-b736967ba122.jpg",
    category: { zh: "贝壳饰品", en: "Seashell" }
  },
  // Chinese Style
  {
    id: "5",
    title: { zh: "琵琶发夹 - 红色", en: "Pipa Style Hair Clip - Red" },
    price: 35.00,
    image: "/products/583ca2e7-a4f3-4945-9b68-cb18b4d80313.jpg",
    category: { zh: "中国风", en: "Chinese Style" }
  },
  {
    id: "6",
    title: { zh: "蝴蝶发夹 - 金红", en: "Butterfly Hairpin - Gold & Red" },
    price: 38.00,
    image: "/products/c0ad822d-f16f-40b4-b4ae-7f7425b6de54.jpg",
    category: { zh: "中国风", en: "Chinese Style" }
  },
  {
    id: "7",
    title: { zh: "芭蕉扇发夹 - 绿色", en: "Palm Fan Hairpin - Green" },
    price: 32.00,
    image: "/products/2178554d-62e5-4da6-befa-1ef7268ce8cb.jpg",
    category: { zh: "中国风", en: "Chinese Style" }
  },
  {
    id: "8",
    title: { zh: "圆镜 - 传统", en: "Round Mirror - Traditional" },
    price: 45.00,
    image: "/products/ab987880-1bc0-4d1a-b576-a6f4de430518.jpg",
    category: { zh: "中国风", en: "Chinese Style" }
  },
  {
    id: "9",
    title: { zh: "无事牌 - 佛像吊坠", en: "Wu Shi Pao - Buddha Amulet" },
    price: 55.00,
    image: "/products/47d8f059-0d8e-4c88-9eeb-435e066ad9ce.jpg",
    category: { zh: "中国风", en: "Chinese Style" }
  },
  {
    id: "10",
    title: { zh: "红绳金锁 - 吉祥符", en: "Red String Gold Lock - Good Luck Charm" },
    price: 55.00,
    image: "/products/674a97be-cd48-446e-b3b5-4adb4746e8bd.jpg",
    category: { zh: "中国风", en: "Chinese Style" }
  },
  {
    id: "11",
    title: { zh: "铜环手镯", en: "Copper Ring Bracelet" },
    price: 28.00,
    image: "/products/9b4e7f41-4ad6-40e5-b2d7-497dda480ec6.jpg",
    category: { zh: "中国风", en: "Chinese Style" }
  },
  {
    id: "12",
    title: { zh: "红绳耳环", en: "Red String Earrings" },
    price: 25.00,
    image: "/products/c32cf27b-b1e5-43de-b85a-1c7a13305945.jpg",
    category: { zh: "中国风", en: "Chinese Style" }
  },
  // Handknit
  {
    id: "13",
    title: { zh: "手工编织熊猫玩偶", en: "Handknit Cute Doll - Panda" },
    price: 42.00,
    image: "/products/c87bc927-beb7-48f1-bf6f-80087967bcde.jpg",
    category: { zh: "手工编织", en: "Handknit" }
  },
  {
    id: "14",
    title: { zh: "手工编织包 - 草编", en: "Handknit Bag - Straw Style" },
    price: 48.00,
    image: "/products/76e8ea00-efa5-49e8-96e0-fc1609f2e455.jpg",
    category: { zh: "手工编织", en: "Handknit" }
  },
  {
    id: "15",
    title: { zh: "手工编织兔子玩偶", en: "Handknit Doll - Rabbit" },
    price: 38.00,
    image: "/products/1442ea1d-fedd-4fa2-8046-8e9c28016c02.jpg",
    category: { zh: "手工编织", en: "Handknit" }
  },
  {
    id: "16",
    title: { zh: "手工编织猫咪玩偶", en: "Handknit Doll - Cat" },
    price: 40.00,
    image: "/products/40ee9736-e778-4f76-9129-1f64ec879a6b.jpg",
    category: { zh: "手工编织", en: "Handknit" }
  },
];

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const { t, language } = useLanguage();
  const category = searchParams?.category;

  const filteredProducts = category
    ? allProducts.filter(p => {
        const catValue = language === 'zh' ? p.category.zh : p.category.en;
        const catValueLower = language === 'zh' ? p.category.zh.toLowerCase() : p.category.en.toLowerCase();
        const categoryLower = category.toLowerCase();
        return catValue === category || catValueLower.includes(categoryLower) || p.category.en.toLowerCase().includes(categoryLower);
      })
    : allProducts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 py-16 border-b border-red-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
            {category ? `${category} ${t("系列", "Collection")}` : t("全部产品", "All Products")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t("探索我们的手工珠宝和配饰系列", "Discover our handcrafted collection of unique jewelry and accessories")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-orange-500 mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sticky top-16 bg-white/80 backdrop-blur-sm z-40 dark:bg-gray-800/80 dark:backdrop-blur-sm">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-gray-700 dark:text-gray-300 font-bold">{t("筛选:", "Filter by:")}</span>
          <Link href="/products">
            <Button variant={!category ? "gradient" : "outline"} size="sm" className="dark:border-gray-600 dark:text-white">
              {t("全部", "All")}
            </Button>
          </Link>
          <Link href="/products?category=Seashell">
            <Button variant={category === "Seashell" ? "gradient" : "outline"} size="sm" className="dark:border-gray-600 dark:text-white">
              🐚 {t("贝壳", "Seashell")}
            </Button>
          </Link>
          <Link href="/products?category=Chinese+Style">
            <Button variant={category === "Chinese Style" ? "gradient" : "outline"} size="sm" className="dark:border-gray-600 dark:text-white">
              🎋 {t("中国风", "Chinese Style")}
            </Button>
          </Link>
          <Link href="/products?category=Handknit">
            <Button variant={category === "Handknit" ? "gradient" : "outline"} size="sm" className="dark:border-gray-600 dark:text-white">
              🧶 {t("手工", "Handknit")}
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700">
                  <img
                    src={product.image}
                    alt={language === 'zh' ? product.title.zh : product.title.en}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-red-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      {t("热销", "Hot")}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <Button className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-red-700 hover:text-white transition-colors">
                      {t("查看详情", "View Details")}
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-red-700 mb-2 font-bold">{language === 'zh' ? product.category.zh : product.category.en}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                    {language === 'zh' ? product.title.zh : product.title.en}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">{t("该分类下暂无产品", "No products found in this category.")}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}