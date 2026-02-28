import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categoryData: Record<string, {
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  descriptionEn: string;
  color: string;
  products: Array<{
    id: string;
    title: string;
    price: number;
    image: string;
  }>;
}> = {
  seashell: {
    name: "贝壳饰品",
    nameEn: "Seashell Jewelry",
    icon: "🐚",
    description: "精美的海洋主题饰品，采用天然贝壳手工制作。每件作品都承载着大海的灵性与美丽。",
    descriptionEn: "Exquisite ocean-themed jewelry, handcrafted with natural seashells. Each piece carries the spirit and beauty of the sea.",
    color: "from-blue-400 to-cyan-300",
    products: [
      { id: "1", title: "Seashell Hairpin - Ocean Waves", price: 28.00, image: "/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg" },
      { id: "2", title: "Seashell Necklace - Coral Style", price: 42.00, image: "/products/76992cd5-3fc0-4234-b49e-8cfa198a2c75.jpg" },
      { id: "3", title: "Seashell Bracelet - Starfish", price: 35.00, image: "/products/fcfb12aa-364d-4287-9dbf-4708c50abaea.jpg" },
      { id: "4", title: "Seashell Ring - Pearl", price: 25.00, image: "/products/031029c0-f688-41a0-acab-b736967ba122.jpg" },
    ]
  },
  chinese: {
    name: "中国风饰品",
    nameEn: "Chinese Style Jewelry",
    icon: "🎋",
    description: "融合传统中国文化的精致饰品，包括琵琶、蝴蝶、芭蕉扇等经典元素。完美展现东方美学。",
    descriptionEn: "Exquisite accessories blending traditional Chinese culture, featuring classic elements like Pipa, butterfly, and palm fan. Perfectly showcases Oriental aesthetics.",
    color: "from-red-400 to-rose-300",
    products: [
      { id: "5", title: "Pipa Style Hair Clip - Red", price: 35.00, image: "/products/583ca2e7-a4f3-4945-9b68-cb18b4d80313.jpg" },
      { id: "6", title: "Butterfly Hairpin - Gold", price: 38.00, image: "/products/c0ad822d-f16f-40b4-b4ae-7f7425b6de54.jpg" },
      { id: "7", title: "Palm Fan Hairpin - Green", price: 32.00, image: "/products/2178554d-62e5-4da6-befa-1ef7268ce8cb.jpg" },
      { id: "8", title: "Round Mirror - Traditional", price: 45.00, image: "/products/ab987880-1bc0-4d1a-b576-a6f4de430518.jpg" },
      { id: "9", title: "Wu Shi Pao - Buddha Amulet", price: 55.00, image: "/products/47d8f059-0d8e-4c88-9eeb-435e066ad9ce.jpg" },
      { id: "10", title: "Red String Gold Lock", price: 55.00, image: "/products/674a97be-cd48-446e-b3b5-4adb4746e8bd.jpg" },
      { id: "11", title: "Copper Ring Bracelet", price: 28.00, image: "/products/9b4e7f41-4ad6-40e5-b2d7-497dda480ec6.jpg" },
      { id: "12", title: "Red String Earrings", price: 25.00, image: "/products/c32cf27b-b1e5-43de-b85a-1c7a13305945.jpg" },
    ]
  },
  handknit: {
    name: "毛线织物",
    nameEn: "Handknit Items",
    icon: "🧶",
    description: "温暖的手工编织制品，包括玩偶、袋子和周边小物。每一针一线都充满爱与温度。",
    descriptionEn: "Warm handknit items including dolls, bags, and accessories. Every stitch is filled with love and warmth.",
    color: "from-purple-400 to-pink-300",
    products: [
      { id: "13", title: "Handknit Panda Doll", price: 42.00, image: "/products/c87bc927-beb7-48f1-bf6f-80087967bcde.jpg" },
      { id: "14", title: "Handknit Straw Bag", price: 48.00, image: "/products/76e8ea00-efa5-49e8-96e0-fc1609f2e455.jpg" },
      { id: "15", title: "Handknit Rabbit Doll", price: 38.00, image: "/products/1442ea1d-fedd-4fa2-8046-8e9c28016c02.jpg" },
      { id: "16", title: "Handknit Cat Doll", price: 40.00, image: "/products/40ee9736-e778-4f76-9129-1f64ec879a6b.jpg" },
    ]
  }
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = categoryData[categorySlug];

  if (!category) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <Button onClick={() => window.location.href = "/products"}>
            View All Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white">
      <Navbar />

      {/* Page Header - Simplified like Products page */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 py-12 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">{category.icon}</span>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
              {category.nameEn}
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl">
            {category.description}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-orange-500 mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {category.products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-red-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      热销
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <Button className="bg-white text-gray-900 hover:bg-red-700 hover:text-white transition-colors">
                      查看详情
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-red-700 mb-2 font-bold">{category.nameEn}</div>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {category.products.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">No products available in this category yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}