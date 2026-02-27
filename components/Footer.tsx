import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#C8161D' }}>
              Craft Shop
            </h3>
            <p className="text-gray-400 text-sm">
              Handcrafted jewelry and accessories featuring Chinese elements and unique seashell designs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/category/seashell" className="hover:text-white">Seashell Jewelry</Link></li>
              <li><Link href="/category/chinese" className="hover:text-white">Chinese Style</Link></li>
              <li><Link href="/category/handknit" className="hover:text-white">Handknit Items</Link></li>
              <li><Link href="/products" className="hover:text-white">All Products</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/shipping" className="hover:text-white">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-white">Returns & Refunds</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: support@craftshop.com</li>
              <li>We accept:</li>
              <li className="flex space-x-2 text-lg">
                <span>💳</span>
                <span>🌍</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Craft Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}