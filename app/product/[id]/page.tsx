"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useParams } from "next/navigation";

// Mock product data
const mockProducts: Record<string, any> = {
  "1": {
    id: "1",
    title: { zh: "海浪发夹", en: "Seashell Hairpin - Ocean Waves" },
    price: 28.00,
    currency: "USD",
    images: ["/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg"],
    category: { zh: "贝壳饰品", en: "Seashell Jewelry" },
    description: {
      zh: "海浪灵感的精美贝壳发夹，采用天然贝壳和优质材料手工制作。这款优雅的配饰为任何发型增添一丝海岸之美。",
      en: "Handcrafted seashell hairpin inspired by ocean waves. Made with natural seashells and premium materials, this elegant accessory adds a touch of coastal beauty to any hairstyle."
    },
    stock: 15,
    variants: { colors: [{ zh: "天然", en: "Natural" }, { zh: "粉色", en: "Pink" }, { zh: "蓝色", en: "Blue" }], sizes: [{ zh: "小号", en: "Small" }, { zh: "中号", en: "Medium" }, { zh: "大号", en: "Large" }] },
    featured: true,
    rating: 4.9,
    reviews: 128,
  },
  "2": {
    id: "2",
    title: { zh: "珊瑚项链", en: "Seashell Necklace - Coral Style" },
    price: 42.00,
    currency: "USD",
    images: ["/products/76992cd5-3fc0-4234-b49e-8cfa198a2c75.jpg"],
    category: { zh: "贝壳饰品", en: "Seashell Jewelry" },
    description: {
      zh: "精致的贝壳项链，灵感来自珊瑚礁。优雅而自然。",
      en: "Delicate seashell necklace, inspired by coral reefs. Elegant and natural."
    },
    stock: 12,
    variants: { colors: [{ zh: "珊瑚", en: "Coral" }, { zh: "白色", en: "White" }, { zh: "粉色", en: "Pink" }], lengths: [{ zh: "40厘米", en: "40cm" }, { zh: "45厘米", en: "45cm" }, { zh: "50厘米", en: "50cm" }] },
    featured: true,
    rating: 4.8,
    reviews: 96,
  },
  "3": {
    id: "3",
    title: { zh: "海星手链", en: "Seashell Bracelet - Starfish" },
    price: 35.00,
    currency: "USD",
    images: ["/products/fcfb12aa-364d-4287-9dbf-4708c50abaea.jpg"],
    category: { zh: "贝壳饰品", en: "Seashell Jewelry" },
    description: {
      zh: "可爱的海星手链，带有贝壳珠，适合日常佩戴。",
      en: "Cute starfish bracelet with seashell beads, perfect for daily wear."
    },
    stock: 18,
    variants: { colors: [{ zh: "天然", en: "Natural" }, { zh: "蓝色", en: "Blue" }], sizes: [{ zh: "均码", en: "One Size" }] },
    featured: false,
    rating: 4.7,
    reviews: 45,
  },
  "4": {
    id: "4",
    title: { zh: "珍珠戒指", en: "Seashell Ring - Pearl Accent" },
    price: 25.00,
    currency: "USD",
    images: ["/products/031029c0-f688-41a0-acab-b736967ba122.jpg"],
    category: { zh: "贝壳饰品", en: "Seashell Jewelry" },
    description: {
      zh: "精致的贝壳戒指，带有天然珍珠点缀。",
      en: "Exquisite seashell ring with natural pearl accent."
    },
    stock: 20,
    variants: { colors: [{ zh: "天然", en: "Natural" }, { zh: "粉色", en: "Pink" }], sizes: [{ zh: "6号", en: "6" }, { zh: "7号", en: "7" }, { zh: "8号", en: "8" }, { zh: "9号", en: "9" }] },
    featured: false,
    rating: 4.6,
    reviews: 38,
  },
  "5": {
    id: "5",
    title: { zh: "琵琶发夹 - 红色", en: "Pipa Style Hair Clip - Red" },
    price: 35.00,
    currency: "USD",
    images: ["/products/583ca2e7-a4f3-4945-9b68-cb18b4d80313.jpg"],
    category: { zh: "中国风饰品", en: "Chinese Style" },
    description: {
      zh: "精美的琵琶造型发夹，采用传统中国工艺制作。红色代表着吉祥和喜庆，是日常佩戴和特殊场合的完美选择。",
      en: "Exquisite Pipa-shaped hair clip, crafted using traditional Chinese techniques. The red color symbolizes good luck and celebration, making it perfect for daily wear and special occasions."
    },
    stock: 20,
    variants: { colors: [{ zh: "红色", en: "Red" }, { zh: "金色", en: "Gold" }, { zh: "蓝色", en: "Blue" }], sizes: [{ zh: "均码", en: "One Size" }] },
    featured: true,
    rating: 5.0,
    reviews: 96,
  },
  "6": {
    id: "6",
    title: { zh: "蝴蝶发夹 - 金红", en: "Butterfly Hairpin - Gold & Red" },
    price: 38.00,
    currency: "USD",
    images: ["/products/c0ad822d-f16f-40b4-b4ae-7f7425b6de54.jpg"],
    category: { zh: "中国风饰品", en: "Chinese Style" },
    description: {
      zh: "精致的蝴蝶发夹，金红配色。优雅而迷人。",
      en: "Exquisite butterfly hairpin in gold and red. Elegant and graceful."
    },
    stock: 15,
    variants: { colors: [{ zh: "金红", en: "Gold Red" }, { zh: "银蓝", en: "Silver Blue" }, { zh: "铜绿", en: "Copper Green" }], sizes: [{ zh: "均码", en: "One Size" }] },
    featured: true,
    rating: 4.9,
    reviews: 78,
  },
  "7": {
    id: "7",
    title: { zh: "芭蕉扇发夹 - 绿色", en: "Palm Fan Hairpin - Green" },
    price: 32.00,
    currency: "USD",
    images: ["/products/2178554d-62e5-4da6-befa-1ef7268ce8cb.jpg"],
    category: { zh: "中国风饰品", en: "Chinese Style" },
    description: {
      zh: "芭蕉扇造型的发夹，清新的绿色。适合夏天。",
      en: "Palm fan hairpin in refreshing green. Perfect for summer."
    },
    stock: 18,
    variants: { colors: [{ zh: "绿色", en: "Green" }, { zh: "黄色", en: "Yellow" }, { zh: "粉色", en: "Pink" }], sizes: [{ zh: "均码", en: "One Size" }] },
    featured: false,
    rating: 4.8,
    reviews: 52,
  },
  "8": {
    id: "8",
    title: { zh: "传统圆镜", en: "Round Mirror - Traditional" },
    price: 45.00,
    currency: "USD",
    images: ["/products/ab987880-1bc0-4d1a-b576-a6f4de430518.jpg"],
    category: { zh: "中国风饰品", en: "Chinese Style" },
    description: {
      zh: "传统圆形镜子，工艺精湛。便携式。",
      en: "Traditional round mirror with exquisite craftsmanship. Portable."
    },
    stock: 10,
    variants: { colors: [{ zh: "金色", en: "Gold" }, { zh: "银色", en: "Silver" }, { zh: "铜色", en: "Copper" }], sizes: [{ zh: "5厘米", en: "5cm" }, { zh: "7厘米", en: "7cm" }] },
    featured: true,
    rating: 4.7,
    reviews: 65,
  },
  "9": {
    id: "9",
    title: { zh: "无事牌 - 佛像", en: "Wu Shi Pao - Buddha Amulet" },
    price: 55.00,
    currency: "USD",
    images: ["/products/47d8f059-0d8e-4c88-9eeb-435e066ad9ce.jpg"],
    category: { zh: "中国风饰品", en: "Chinese Style" },
    description: {
      zh: "精致无事牌，金属边框内镶嵌佛像，寓意平安无事。",
      en: "Exquisite Wu Shi Pao with Buddha amulet inside metal frame. Symbolizes peace and safety."
    },
    stock: 8,
    variants: { colors: [{ zh: "金色", en: "Gold" }, { zh: "银色", en: "Silver" }], styles: [{ zh: "佛像", en: "Buddha" }, { zh: "童子", en: "Child" }] },
    featured: true,
    rating: 4.9,
    reviews: 82,
  },
  "10": {
    id: "10",
    title: { zh: "红绳金锁", en: "Red String Gold Lock" },
    price: 55.00,
    currency: "USD",
    images: ["/products/674a97be-cd48-446e-b3b5-4adb4746e8bd.jpg"],
    category: { zh: "中国风饰品", en: "Chinese Style" },
    description: {
      zh: "传统红绳搭配金锁，寓意锁住幸福，适合婴儿满月或生日礼物。",
      en: "Traditional red string with gold lock. Symbolizes locking happiness. Perfect for baby gifts."
    },
    stock: 12,
    variants: { styles: [{ zh: "金锁", en: "Gold Lock" }, { zh: "银锁", en: "Silver Lock" }], sizes: [{ zh: "小号", en: "Small" }, { zh: "中号", en: "Medium" }] },
    featured: true,
    rating: 4.8,
    reviews: 95,
  },
  "11": {
    id: "11",
    title: { zh: "铜环手镯", en: "Copper Ring Bracelet" },
    price: 28.00,
    currency: "USD",
    images: ["/products/9b4e7f41-4ad6-40e5-b2d7-497dda480ec6.jpg"],
    category: { zh: "中国风饰品", en: "Chinese Style" },
    description: {
      zh: "精致铜环手镯，传统工艺制作。",
      en: "Exquisite copper ring bracelet made with traditional craftsmanship."
    },
    stock: 15,
    variants: { colors: [{ zh: "铜色", en: "Copper" }, { zh: "黄铜色", en: "Brass" }], sizes: [{ zh: "小号", en: "Small" }, { zh: "中号", en: "Medium" }, { zh: "大号", en: "Large" }] },
    featured: false,
    rating: 4.6,
    reviews: 41,
  },
  "12": {
    id: "12",
    title: { zh: "红绳耳环", en: "Red String Earrings" },
    price: 25.00,
    currency: "USD",
    images: ["/products/c32cf27b-b1e5-43de-b85a-1c7a13305945.jpg"],
    category: { zh: "中国风饰品", en: "Chinese Style" },
    description: {
      zh: "红色绳结耳环，简约而优雅。",
      en: "Red string knot earrings. Simple yet elegant."
    },
    stock: 20,
    variants: { colors: [{ zh: "红色", en: "Red" }, { zh: "蓝色", en: "Blue" }, { zh: "紫色", en: "Purple" }], sizes: [{ zh: "均码", en: "One Size" }] },
    featured: false,
    rating: 4.5,
    reviews: 36,
  },
  "13": {
    id: "13",
    title: { zh: "手工编织熊猫玩偶", en: "Handknit Cute Doll - Panda" },
    price: 42.00,
    currency: "USD",
    images: ["/products/c87bc927-beb7-48f1-bf6f-80087967bcde.jpg"],
    category: { zh: "毛线织物", en: "Handknit" },
    description: {
      zh: "可爱的手工编织熊猫玩偶，使用优质毛线精心制作。每一个细节都体现工匠的用心，是收藏和送礼的理想选择。",
      en: "Cute handknit panda doll, carefully crafted with premium wool. Every detail reflects the artisan's dedication, making it ideal for collection and gifting."
    },
    stock: 8,
    variants: { colors: [{ zh: "黑白色", en: "Black & White" }], sizes: [{ zh: "25厘米", en: "25cm" }, { zh: "30厘米", en: "30cm" }] },
    featured: true,
    rating: 4.8,
    reviews: 45,
  },
  "14": {
    id: "14",
    title: { zh: "手工编织包包 - 草编", en: "Handknit Straw Bag" },
    price: 48.00,
    currency: "USD",
    images: ["/products/76e8ea00-efa5-49e8-96e0-fc1609f2e455.jpg"],
    category: { zh: "毛线织物", en: "Handknit" },
    description: {
      zh: "手工编织包包，草编风格，环保时尚。",
      en: "Handknit bag in straw style. Eco-friendly and fashionable."
    },
    stock: 10,
    variants: { colors: [{ zh: "天然", en: "Natural" }, { zh: "粉色", en: "Pink" }, { zh: "蓝色", en: "Blue" }], sizes: [{ zh: "中号", en: "Medium" }, { zh: "大号", en: "Large" }] },
    featured: true,
    rating: 4.7,
    reviews: 62,
  },
  "15": {
    id: "15",
    title: { zh: "手工编织兔子玩偶", en: "Handknit Rabbit Doll" },
    price: 38.00,
    currency: "USD",
    images: ["/products/1442ea1d-fedd-4fa2-8046-8e9c28016c02.jpg"],
    category: { zh: "毛线织物", en: "Handknit" },
    description: {
      zh: "可爱的手工编织兔子玩偶，毛茸茸的手感。",
      en: "Cute handknit rabbit doll with fluffy texture."
    },
    stock: 12,
    variants: { colors: [{ zh: "白色", en: "White" }, { zh: "粉色", en: "Pink" }, { zh: "灰色", en: "Gray" }], sizes: [{ zh: "20厘米", en: "20cm" }, { zh: "25厘米", en: "25cm" }] },
    featured: false,
    rating: 4.6,
    reviews: 48,
  },
  "16": {
    id: "16",
    title: { zh: "手工编织猫咪玩偶", en: "Handknit Cat Doll" },
    price: 40.00,
    currency: "USD",
    images: ["/products/40ee9736-e778-4f76-9129-1f64ec879a6b.jpg"],
    category: { zh: "毛线织物", en: "Handknit" },
    description: {
      zh: "可爱的手工编织猫咪玩偶，萌趣十足。",
      en: "Cute handknit cat doll, absolutely adorable."
    },
    stock: 10,
    variants: { colors: [{ zh: "橙色", en: "Orange" }, { zh: "灰色", en: "Gray" }, { zh: "白色", en: "White" }], sizes: [{ zh: "20厘米", en: "20cm" }, { zh: "25厘米", en: "25cm" }] },
    featured: false,
    rating: 4.7,
    reviews: 55,
  },
};

const relatedProducts = [
  { id: "1", title: { zh: "海浪发夹", en: "Seashell Hairpin" }, price: 28.00, image: "/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg", rating: 4.9 },
  { id: "2", title: { zh: "珊瑚项链", en: "Seashell Necklace" }, price: 42.00, image: "/products/76992cd5-3fc0-4234-b49e-8cfa198a2c75.jpg", rating: 4.8 },
  { id: "3", title: { zh: "海星手链", en: "Seashell Bracelet" }, price: 35.00, image: "/products/fcfb12aa-364d-4287-9dbf-4708c50abaea.jpg", rating: 4.7 },
];

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = mockProducts[id];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:text-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
          <Button variant="gradient" onClick={() => window.location.href = "/products"}>
            Back to Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}

function ProductDetailClient({ product }: { product: any }) {
  "use client";

  const { language, t } = useLanguage();

  const displayTitle = language === "zh" ? product.title.zh : product.title.en;
  const displayCategory = language === "zh" ? product.category.zh : product.category.en;
  const displayDescription = language === "zh" ? product.description.zh : product.description.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 py-4 border-b border-red-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <span className="hover:text-red-700 cursor-pointer">{t("首页", "Home")}</span>
            <span>›</span>
            <span className="hover:text-red-700 cursor-pointer">{t("产品", "Products")}</span>
            <span>›</span>
            <span className="text-red-700 font-medium">{displayTitle}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700 rounded-3xl overflow-hidden shadow-xl group">
              <img
                src={product.images[0]}
                alt={displayTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Zoom Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-black/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700 rounded-xl overflow-hidden cursor-pointer hover:ring-4 hover:ring-red-500 transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="flex items-center gap-3">
              <span className="inline-block bg-gradient-to-r from-red-700 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                {displayCategory}
              </span>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                ))}
                <span className="text-sm text-gray-700 dark:text-gray-300 ml-2">{product.rating} ({product.reviews} {t("评价", "reviews")})</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              {displayTitle}
            </h1>

            <div className="flex items-center gap-4">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                ${product.price.toFixed(2)}
              </div>
              <div className="text-lg text-gray-500 dark:text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</div>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold dark:bg-red-900/30 dark:text-red-400">
                -20% OFF
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{t("描述", "Description")}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {displayDescription}
              </p>
            </div>

            {/* Variants */}
            {product.variants && (
              <div className="space-y-6 bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg border border-red-100 dark:border-gray-600">
                {product.variants.colors && (
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">{t("颜色", "Color")}</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.variants.colors.map((color: any) => (
                        <button
                          key={color.en}
                          className="px-6 py-3 border-2 border-gray-200 dark:border-gray-500 rounded-xl hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 font-medium group relative overflow-hidden"
                        >
                          <span className="relative z-10 group-hover:text-red-700 transition-colors">{language === "zh" ? color.zh : color.en}</span>
                          <div className="absolute inset-0 bg-red-100 dark:bg-red-900/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {product.variants.sizes && (
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">{t("尺寸", "Size")}</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.variants.sizes.map((size: any) => (
                        <button
                          key={size.en}
                          className="px-6 py-3 border-2 border-gray-200 dark:border-gray-500 rounded-xl hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 font-medium group relative overflow-hidden"
                        >
                          <span className="relative z-10 group-hover:text-red-700 transition-colors">{language === "zh" ? size.zh : size.en}</span>
                          <div className="absolute inset-0 bg-red-100 dark:bg-red-900/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Stock & Shipping */}
            <div className="flex items-center gap-6 text-sm">
              <span className={`flex items-center gap-2 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {t("库存", "In Stock")} ({product.stock} {t("件", "available")})
                  </>
                ) : (
                  t("缺货", "Out of Stock")
                )}
              </span>
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Truck className="w-4 h-4" />
                {t("订单超过$50免运费", "Free shipping over $50")}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="gradient"
                className="flex-1 text-lg px-8 py-4"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="mr-3 w-6 h-6" />
                {t("加入购物车", "Add to Cart")}
              </Button>
              <Button size="lg" variant="outline" className="px-6 py-4 rounded-full hover:border-red-500 hover:text-red-700 dark:border-gray-600 dark:text-white transition-colors">
                <Heart className="w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="px-6 py-4 rounded-full hover:border-red-500 hover:text-red-700 dark:border-gray-600 dark:text-white transition-colors">
                <Share2 className="w-6 h-6" />
              </Button>
            </div>

            {/* Benefits */}
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg">
                    <Truck className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{t("免运费", "Free Shipping")}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{t("订单超过$50", "On orders over $50")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{t("手工品质", "Handcrafted Quality")}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{t("每一件都是独特的", "Each piece is unique")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{t("30天退换", "30-Day Returns")}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{t("简单无烦恼", "Easy and hassle-free")}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-lg border border-red-100 dark:border-gray-600">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
              {t("客户评价", "Customer Reviews")}
            </h2>
            <Button variant="outline" className="rounded-full dark:border-gray-600 dark:text-white">
              {t("写评价", "Write a Review")}
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-600 dark:to-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">{t("已验证买家", "Verified Buyer")}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "{t("非常漂亮！工艺很棒，到货很快。肯定会再买！", "Absolutely beautiful! The craftsmanship is amazing and it arrived quickly. Will definitely order again!")}"
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  - Sarah M. • {i === 1 ? t("2天前", "2 days ago") : t("1周前", "1 week ago")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
            {t("您可能也喜欢", "You May Also Like")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => {
              const relatedTitle = language === "zh" ? relatedProduct.title.zh : relatedProduct.title.en;
              return (
                <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-red-100 dark:border-gray-600 dark:bg-gray-700">
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700">
                      <img
                        src={relatedProduct.image}
                        alt={relatedTitle}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1 text-yellow-500 mb-2">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{relatedProduct.rating}</span>
                      </div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-red-700 transition-colors">
                        {relatedTitle}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
                          ${relatedProduct.price.toFixed(2)}
                        </p>
                        <Button size="sm" variant="gradient" className="rounded-full px-4">
                          {t("查看", "View")}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}