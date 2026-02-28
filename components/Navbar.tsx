import Link from "next/link";
import { ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold" style={{ color: '#C8161D' }}>
              Craft Shop
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-red-700 transition font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-red-700 transition font-medium">
              Products
            </Link>
            <Link href="/category/seashell" className="text-gray-700 hover:text-red-700 transition font-medium">
              Seashell
            </Link>
            <Link href="/category/chinese" className="text-gray-700 hover:text-red-700 transition font-medium">
              Chinese
            </Link>
            <Link href="/category/handknit" className="text-gray-700 hover:text-red-700 transition font-medium">
              Handknit
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-700 transition font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-700 transition font-medium">
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>
            <Link href="/admin/login">
              <Button variant="outline" size="sm" className="hidden md:block">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}