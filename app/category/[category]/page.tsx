"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useParams } from "next/navigation";

const categoryData: Record<string, {
  name: { zh: string; en: string };
  icon: string;
  description: { zh: string; en: string };
  color: string;
  products: Array<{
    id: string;
    title: { zh: string; en: string };
    price: number;
    image: string;
  }>;
}> = {
  seashell: {
    name: { zh: "贝壳饰品", en: "Seashell Jewelry" },
    icon: "🐚",
    description: {
      zh: "精美的海洋主题饰品，采用天然贝壳手工制作。每件作品都承载着大海的灵性与美丽。",
      en: "Exquisite ocean-themed jewelry, handcrafted with natural seashells. Each piece carries the spirit and beauty of the sea."
    },
    color: "from-blue-400 to-cyan-300",
    products: [
      { id: "1", title: { zh: "海浪发夹", en: "Seashell Hairpin - Ocean Waves" }, price: 28.00, image: "/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg" },
      { id: "2", title: { zh: "珊瑚项链", en: "Seashell Necklace - Coral Style" }, price: 42.00, image: "/products/76992cd5-3fc0-4234-b49e-8cfa198a2c75.jpg" },
      { id: "3", title: { zh: "海星手链", en: "Seashell Bracelet - Starfish" }, price: 35.00, image: "/products/fcfb12aa-364d-4287-9dbf-4708c50abaea.jpg" },
      { id: "4", title: { zh: "珍珠戒指", en: "Seashell Ring - Pearl" }, price: 25.00, image: "/products/031029c0-f688-41a0-acab-b736967ba122.jpg" },
    ]
  },
  chinese: {
    name: { zh: "中国风饰品", en: "Chinese Style Jewelry" },
    icon: "🎋",
    description: {
      zh: "融合传统中国文化的精致饰品，包括琵琶、蝴蝶、芭蕉扇等经典元素。完美展现东方美学。",
      en: "Exquisite accessories blending traditional Chinese culture, featuring classic elements like Pipa, butterfly, and palm fan. Perfectly showcases Oriental aesthetics."
    },
    color: "from-red-400 to-rose-300",
    products: [
      { id: "5", title: { zh: "琵琶发夹 - 红色", en: "Pipa Style Hair Clip - Red" }, price: 35.00, image: "/products/583ca2e7-a4f3-4945-9b68-cb18b4d80313.jpg" },
      { id: "6", title: { zh: "蝴蝶发夹 - 金色", en: "Butterfly Hairpin - Gold" }, price: 38.00, image: "/products/c0ad822d-f16f-40b4-b4ae-7f7425b6de54.jpg" },
      { id: "7", title: { zh: "芭蕉扇发夹 - 绿色", en: "Palm Fan Hairpin - Green" }, price: 32.00, image: "/products/2178554d-62e5-4da6-befa-1ef7268ce8cb.jpg" },
      { id: "8", title: { zh: "传统圆镜", en: "Round Mirror - Traditional" }, price: 45.00, image: "/products/ab987880-1bc0-4d1a-b576-a6f4de430518.jpg" },
      { id: "9", title: { zh: "无事牌 - 佛像", en: "Wu Shi Pao - Buddha Amulet" }, price: 55.00, image: "/products/47d8f059-0d8e-4c88-9eeb-435e066ad9ce.jpg" },
      { id: "10", title: { zh: "红绳金锁", en: "Red String Gold Lock" }, price: 55.00, image: "/products/674a97be-cd48-446e-b3b5-4adb4746e8bd.jpg" },
      { id: "11", title: { zh: "铜环手镯", en: "Copper Ring Bracelet" }, price: 28.00, image: "/products/9b4e7f41-4ad6-40e5-b2d7-497dda480ec6.jpg" },
      { id: "12", title: { zh: "红绳耳环", en: "Red String Earrings" }, price: 25.00, image: "/products/c32cf27b-b1e5-43de-b85a-1c7a13305945.jpg" },
    ]
  },
  handknit: {
    name: { zh: "毛线织物", en: "Handknit Items" },
    icon: "🧶",
    description: {
      zh: "温暖的手工编织制品，包括玩偶、袋子和周边小物。每一针一线都充满爱与温度。",
      en: "Warm handknit items including dolls, bags, and accessories. Every stitch is filled with love and warmth."
    },
    color: "from-purple-400 to-pink-300",
    products: [
      { id: "13", title: { zh: "手工编织熊猫玩偶", en: "Handknit Panda Doll" }, price: 42.00, image: "/products/c87bc927-beb7-48f1-bf6f-80087967bcde.jpg" },
      { id: "14", title: { zh: "手工编织草包", en: "Handknit Straw Bag" }, price: 48.00, image: "/products/76e8ea00-efa5-49e8-96e0-fc1609f2e455.jpg" },
      { id: "15", title: { zh: "手工编织兔子玩偶", en: "Handknit Rabbit Doll" }, price: 38.00, image: "/products/1442ea1d-fedd-4fa2-8046-8e9c28016c02.jpg" },
      { id: "16", title: { zh: "手工编织猫咪玩偶", en: "Handknit Cat Doll" }, price: 40.00, image: "/products/40ee9736-e778-4f76-9129-1f64ec879a6b.jpg" },
    ]
  }
};

export default function CategoryPage() {
  const { language, t } = useLanguage();
  const params = useParams();
  const categorySlug = params.category as string;
  const category = categoryData[categorySlug];

  if (!category) {
    return (
      <div className="min-h-screen dark:bg-gray-900 dark:text-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">{t("分类未找到", "Category Not Found")}</h1>
          <Link href="/products">
            <Button>
              {t("查看全部产品", "View All Products")}
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const displayName = language === "zh" ? category.name.zh : category.name.en;
  const displayDescription = language === "zh" ? category.description.zh : category.description.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Navbar />

      {/* Page Header - Simplified like Products page */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 py-12 border-b border-red-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">{category.icon}</span>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
              {displayName}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            {displayDescription}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-orange-500 mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {category.products.map((product) => {
            const productTitle = language === "zh" ? product.title.zh : product.title.en;
            return (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700">
                    <img
                      src={product.image}
                      alt={productTitle}
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
                    <div className="text-xs text-red-700 dark:text-red-400 mb-2 font-bold">{displayName}</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                      {productTitle}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {category.products.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">{t("该分类下暂无产品", "No products available in this category yet.")}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}