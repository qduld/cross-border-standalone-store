import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, Clock } from "lucide-react";

// Mock product data
const mockProducts: Record<string, any> = {
  "1": {
    id: "1",
    title: "Seashell Hairpin - Ocean Waves",
    titleEn: "Seashell Hairpin - Ocean Waves",
    price: 28.00,
    currency: "USD",
    images: ["/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg"],
    category: "Seashell Jewelry",
    description: "Handcrafted seashell hairpin inspired by ocean waves. Made with natural seashells and premium materials, this elegant accessory adds a touch of coastal beauty to any hairstyle.",
    descriptionEn: "Handcrafted seashell hairpin inspired by ocean waves. Made with natural seashells and premium materials, this elegant accessory adds a touch of coastal beauty to any hairstyle.",
    stock: 15,
    variants: { colors: ["Natural", "Pink", "Blue"], sizes: ["Small", "Medium", "Large"] },
    featured: true,
    rating: 4.9,
    reviews: 128,
  },
  "2": {
    id: "2",
    title: "Seashell Necklace - Coral Style",
    titleEn: "Seashell Necklace - Coral Style",
    price: 42.00,
    currency: "USD",
    images: ["/products/76992cd5-3fc0-4234-b49e-8cfa198a2c75.jpg"],
    category: "Seashell Jewelry",
    description: "Delicate seashell necklace, inspired by coral reefs. Elegant and natural.",
    descriptionEn: "Delicate seashell necklace, inspired by coral reefs. Elegant and natural.",
    stock: 12,
    variants: { colors: ["Coral", "White", "Pink"], lengths: ["40cm", "45cm", "50cm"] },
    featured: true,
    rating: 4.8,
    reviews: 96,
  },
  "3": {
    id: "3",
    title: "Seashell Bracelet - Starfish",
    titleEn: "Seashell Bracelet - Starfish",
    price: 35.00,
    currency: "USD",
    images: ["/products/fcfb12aa-364d-4287-9dbf-4708c50abaea.jpg"],
    category: "Seashell Jewelry",
    description: "Cute starfish bracelet with seashell beads, perfect for daily wear.",
    descriptionEn: "Cute starfish bracelet with seashell beads, perfect for daily wear.",
    stock: 18,
    variants: { colors: ["Natural", "Blue"], sizes: ["One Size"] },
    featured: false,
    rating: 4.7,
    reviews: 45,
  },
  "4": {
    id: "4",
    title: "Seashell Ring - Pearl",
    titleEn: "Seashell Ring - Pearl Accent",
    price: 25.00,
    currency: "USD",
    images: ["/products/031029c0-f688-41a0-acab-b736967ba122.jpg"],
    category: "Seashell Jewelry",
    description: "Exquisite seashell ring with natural pearl accent.",
    descriptionEn: "Exquisite seashell ring with natural pearl accent.",
    stock: 20,
    variants: { colors: ["Natural", "Pink"], sizes: ["6", "7", "8", "9"] },
    featured: false,
    rating: 4.6,
    reviews: 38,
  },
  "5": {
    id: "5",
    title: "琵琶发夹 - 红色",
    titleEn: "Pipa Style Hair Clip - Red",
    price: 35.00,
    currency: "USD",
    images: ["/products/583ca2e7-a4f3-4945-9b68-cb18b4d80313.jpg"],
    category: "Chinese Style",
    description: "精美的琵琶造型发夹，采用传统中国工艺制作。红色代表着吉祥和喜庆，是日常佩戴和特殊场合的完美选择。",
    descriptionEn: "Exquisite Pipa-shaped hair clip, crafted using traditional Chinese techniques. The red color symbolizes good luck and celebration, making it perfect for daily wear and special occasions.",
    stock: 20,
    variants: { colors: ["Red", "Gold", "Blue"], sizes: ["One Size"] },
    featured: true,
    rating: 5.0,
    reviews: 96,
  },
  "6": {
    id: "6",
    title: "Butterfly Hairpin - Gold",
    titleEn: "Butterfly Hairpin - Gold & Red",
    price: 38.00,
    currency: "USD",
    images: ["/products/c0ad822d-f16f-40b4-b4ae-7f7425b6de54.jpg"],
    category: "Chinese Style",
    description: "Exquisite butterfly hairpin in gold and red. Elegant and graceful.",
    descriptionEn: "Exquisite butterfly hairpin in gold and red. Elegant and graceful.",
    stock: 15,
    variants: { colors: ["Gold Red", "Silver Blue", "Copper Green"], sizes: ["One Size"] },
    featured: true,
    rating: 4.9,
    reviews: 78,
  },
  "7": {
    id: "7",
    title: "Palm Fan Hairpin - Green",
    titleEn: "Palm Fan Hairpin - Green",
    price: 32.00,
    currency: "USD",
    images: ["/products/2178554d-62e5-4da6-befa-1ef7268ce8cb.jpg"],
    category: "Chinese Style",
    description: "Palm fan hairpin in refreshing green. Perfect for summer.",
    descriptionEn: "Palm fan hairpin in refreshing green. Perfect for summer.",
    stock: 18,
    variants: { colors: ["Green", "Yellow", "Pink"], sizes: ["One Size"] },
    featured: false,
    rating: 4.8,
    reviews: 52,
  },
  "8": {
    id: "8",
    title: "Round Mirror - Traditional",
    titleEn: "Round Mirror - Traditional",
    price: 45.00,
    currency: "USD",
    images: ["/products/ab987880-1bc0-4d1a-b576-a6f4de430518.jpg"],
    category: "Chinese Style",
    description: "Traditional round mirror with exquisite craftsmanship. Portable.",
    descriptionEn: "Traditional round mirror with exquisite craftsmanship. Portable.",
    stock: 10,
    variants: { colors: ["Gold", "Silver", "Copper"], sizes: ["5cm", "7cm"] },
    featured: true,
    rating: 4.7,
    reviews: 65,
  },
  "9": {
    id: "9",
    title: "Wu Shi Pao - Buddha",
    titleEn: "Wu Shi Pao - Buddha Amulet",
    price: 55.00,
    currency: "USD",
    images: ["/products/47d8f059-0d8e-4c88-9eeb-435e066ad9ce.jpg"],
    category: "Chinese Style",
    description: "精致无事牌，金属边框内镶嵌佛像，寓意平安无事。",
    descriptionEn: "Exquisite Wu Shi Pao with Buddha amulet inside metal frame. Symbolizes peace and safety.",
    stock: 8,
    variants: { colors: ["Gold", "Silver"], styles: ["Buddha", "Child"] },
    featured: true,
    rating: 4.9,
    reviews: 82,
  },
  "10": {
    id: "10",
    title: "Red String Gold Lock",
    titleEn: "Red String Gold Lock",
    price: 55.00,
    currency: "USD",
    images: ["/products/674a97be-cd48-446e-b3b5-4adb4746e8bd.jpg"],
    category: "Chinese Style",
    description: "传统红绳搭配金锁，寓意锁住幸福，适合婴儿满月或生日礼物。",
    descriptionEn: "Traditional red string with gold lock. Symbolizes locking happiness. Perfect for baby gifts.",
    stock: 12,
    variants: { styles: ["Gold Lock", "Silver Lock"], sizes: ["Small", "Medium"] },
    featured: true,
    rating: 4.8,
    reviews: 95,
  },
  "11": {
    id: "11",
    title: "Copper Ring Bracelet",
    titleEn: "Copper Ring Bracelet",
    price: 28.00,
    currency: "USD",
    images: ["/products/9b4e7f41-4ad6-40e5-b2d7-497dda480ec6.jpg"],
    category: "Chinese Style",
    description: "精致铜环手镯，传统工艺制作。",
    descriptionEn: "Exquisite copper ring bracelet made with traditional craftsmanship.",
    stock: 15,
    variants: { colors: ["Copper", "Brass"], sizes: ["Small", "Medium", "Large"] },
    featured: false,
    rating: 4.6,
    reviews: 41,
  },
  "12": {
    id: "12",
    title: "Red String Earrings",
    titleEn: "Red String Earrings",
    price: 25.00,
    currency: "USD",
    images: ["/products/c32cf27b-b1e5-43de-b85a-1c7a13305945.jpg"],
    category: "Chinese Style",
    description: "红色绳结耳环，简约而优雅。",
    descriptionEn: "Red string knot earrings. Simple yet elegant.",
    stock: 20,
    variants: { colors: ["Red", "Blue", "Purple"], sizes: ["One Size"] },
    featured: false,
    rating: 4.5,
    reviews: 36,
  },
  "13": {
    id: "13",
    title: "手工编织熊猫玩偶",
    titleEn: "Handknit Cute Doll - Panda",
    price: 42.00,
    currency: "USD",
    images: ["/products/c87bc927-beb7-48f1-bf6f-80087967bcde.jpg"],
    category: "Handknit",
    description: "可爱的手工编织熊猫玩偶，使用优质毛线精心制作。每一个细节都体现工匠的用心，是收藏和送礼的理想选择。",
    descriptionEn: "Cute handknit panda doll, carefully crafted with premium wool. Every detail reflects the artisan's dedication, making it ideal for collection and gifting.",
    stock: 8,
    variants: { colors: ["Black & White"], sizes: ["25cm", "30cm"] },
    featured: true,
    rating: 4.8,
    reviews: 45,
  },
  "14": {
    id: "14",
    title: "Handknit Bag - Straw",
    titleEn: "Handknit Straw Bag",
    price: 48.00,
    currency: "USD",
    images: ["/products/76e8ea00-efa5-49e8-96e0-fc1609f2e455.jpg"],
    category: "Handknit",
    description: "手工编织包包，草编风格，环保时尚。",
    descriptionEn: "Handknit bag in straw style. Eco-friendly and fashionable.",
    stock: 10,
    variants: { colors: ["Natural", "Pink", "Blue"], sizes: ["Medium", "Large"] },
    featured: true,
    rating: 4.7,
    reviews: 62,
  },
  "15": {
    id: "15",
    title: "Handknit Doll - Rabbit",
    titleEn: "Handknit Rabbit Doll",
    price: 38.00,
    currency: "USD",
    images: ["/products/1442ea1d-fedd-4fa2-8046-8e9c28016c02.jpg"],
    category: "Handknit",
    description: "可爱的手工编织兔子玩偶，毛茸茸的手感。",
    descriptionEn: "Cute handknit rabbit doll with fluffy texture.",
    stock: 12,
    variants: { colors: ["White", "Pink", "Gray"], sizes: ["20cm", "25cm"] },
    featured: false,
    rating: 4.6,
    reviews: 48,
  },
  "16": {
    id: "16",
    title: "Handknit Doll - Cat",
    titleEn: "Handknit Cat Doll",
    price: 40.00,
    currency: "USD",
    images: ["/products/40ee9736-e778-4f76-9129-1f64ec879a6b.jpg"],
    category: "Handknit",
    description: "可爱的手工编织猫咪玩偶，萌趣十足。",
    descriptionEn: "Cute handknit cat doll, absolutely adorable.",
    stock: 10,
    variants: { colors: ["Orange", "Gray", "White"], sizes: ["20cm", "25cm"] },
    featured: false,
    rating: 4.7,
    reviews: 55,
  },
};

const relatedProducts = [
  { id: "1", title: "Seashell Hairpin", price: 28.00, image: "/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg", rating: 4.9 },
  { id: "2", title: "Seashell Necklace", price: 42.00, image: "/products/76992cd5-3fc0-4234-b49e-8cfa198a2c75.jpg", rating: 4.8 },
  { id: "3", title: "Seashell Bracelet", price: 35.00, image: "/products/fcfb12aa-364d-4287-9dbf-4708c50abaea.jpg", rating: 4.7 },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = mockProducts[id];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Button variant="gradient" onClick={() => window.location.href = "/products"}>
            Back to Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 py-4 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <span className="hover:text-red-700 cursor-pointer">Home</span>
            <span>›</span>
            <span className="hover:text-red-700 cursor-pointer">Products</span>
            <span>›</span>
            <span className="text-red-700 font-medium">{product.titleEn}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl group">
              <img
                src={product.images[0]}
                alt={product.titleEn}
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
                    className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden cursor-pointer hover:ring-4 hover:ring-red-500 transition-all duration-300 hover:scale-105 shadow-md"
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
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                ))}
                <span className="text-sm text-gray-700 ml-2">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {product.titleEn}
            </h1>
            <h2 className="text-xl text-gray-600">
              {product.title}
            </h2>

            <div className="flex items-center gap-4">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </div>
              <div className="text-lg text-gray-500 line-through">$${(product.price * 1.2).toFixed(2)}</div>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                -20% OFF
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg">Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.descriptionEn}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variants */}
            {product.variants && (
              <div className="space-y-6 bg-white rounded-2xl p-6 shadow-lg border border-red-100">
                {product.variants.colors && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">Color 颜色</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.variants.colors.map((color: string) => (
                        <button
                          key={color}
                          className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-200 font-medium group relative overflow-hidden"
                        >
                          <span className="relative z-10 group-hover:text-red-700 transition-colors">{color}</span>
                          <div className="absolute inset-0 bg-red-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {product.variants.sizes && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">Size 尺寸</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.variants.sizes.map((size: string) => (
                        <button
                          key={size}
                          className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-200 font-medium group relative overflow-hidden"
                        >
                          <span className="relative z-10 group-hover:text-red-700 transition-colors">{size}</span>
                          <div className="absolute inset-0 bg-red-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
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
                    In Stock ({product.stock} available)
                  </>
                ) : (
                  'Out of Stock'
                )}
              </span>
              <span className="flex items-center gap-2 text-gray-600">
                <Truck className="w-4 h-4" />
                Free shipping over $50
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
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="px-6 py-4 rounded-full hover:border-red-500 hover:text-red-700 transition-colors">
                <Heart className="w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="px-6 py-4 rounded-full hover:border-red-500 hover:text-red-700 transition-colors">
                <Share2 className="w-6 h-6" />
              </Button>
            </div>

            {/* Benefits */}
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Truck className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Free Shipping</div>
                    <div className="text-sm text-gray-600">On orders over $50</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Handcrafted Quality</div>
                    <div className="text-sm text-gray-600">Each piece is unique</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">30-Day Returns</div>
                    <div className="text-sm text-gray-600">Easy and hassle-free</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-red-100">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
              Customer Reviews
            </h2>
            <Button variant="outline" className="rounded-full">
              Write a Review
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">Verified Buyer</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Absolutely beautiful! The craftsmanship is amazing and it arrived quickly. Will definitely order again!"
                </p>
                <div className="text-sm text-gray-500">
                  - Sarah M. • {i === 1 ? '2 days ago' : '1 week ago'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-red-100">
                <CardContent className="p-0">
                  <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-yellow-500 mb-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{relatedProduct.rating}</span>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-red-700 transition-colors">
                      {relatedProduct.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                        ${relatedProduct.price.toFixed(2)}
                      </p>
                      <Button size="sm" variant="gradient" className="rounded-full px-4">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}