import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

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

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categoryData[params.category];

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
    <div className="min-h-screen">
      <Navbar />

      {/* Category Header */}
      <div className="relative py-20 bg-gradient-to-br" style={{
        background: `linear-gradient(to bottom right, ${category.color.split(' ')[0].replace('from-', '')}, ${category.color.split(' ')[1].replace('to-', '')})`
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-8xl mb-4">{category.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.nameEn}</h1>
          <h2 className="text-2xl mb-6 opacity-90">{category.name}</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-2">
            {category.descriptionEn}
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {category.products.length} Products
            </h2>
          </div>
          {/* Sort options can be added here */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={category.nameEn}
            />
          ))}
        </div>

        {category.products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products available in this category yet.</p>
          </div>
        )}
      </div>

      {/* Category Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our {category.nameEn}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Handcrafted</h3>
              <p className="text-gray-600 text-sm">Each piece is carefully crafted by skilled artisans</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-semibold text-gray-900 mb-2">Natural Materials</h3>
              <p className="text-gray-600 text-sm">Made with eco-friendly and natural materials</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Unique Design</h3>
              <p className="text-gray-600 text-sm">Fusion of traditional and modern aesthetics</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}