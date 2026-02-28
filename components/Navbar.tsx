"use client"

import Link from "next/link";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold" style={{ color: '#C8161D' }}>
                Craft Shop
              </span>
            </Link>

            {/* Navigation Links - Desktop */}
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
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Search Button */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search className="h-5 w-5" />
                </Button>
                {isSearchOpen && (
                  <form onSubmit={handleSearch} className="absolute right-0 top-12 bg-white border rounded-lg shadow-lg p-2 flex gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="搜索..."
                      className="px-3 py-1 border rounded w-48"
                      autoFocus
                    />
                    <Button type="submit" size="sm" variant="gradient">
                      搜索
                    </Button>
                  </form>
                )}
              </div>

              {/* User Button */}
              <Link href="/account">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              {/* Cart Button */}
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>

              {/* Admin Button */}
              <Link href="/admin/login">
                <Button variant="outline" size="sm" className="hidden md:block">
                  Admin
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-2 space-y-1">
              <Link href="/" className="block py-2 text-gray-700 hover:text-red-700">
                Home
              </Link>
              <Link href="/products" className="block py-2 text-gray-700 hover:text-red-700">
                Products
              </Link>
              <Link href="/category/seashell" className="block py-2 text-gray-700 hover:text-red-700">
                Seashell
              </Link>
              <Link href="/category/chinese" className="block py-2 text-gray-700 hover:text-red-700">
                Chinese
              </Link>
              <Link href="/category/handknit" className="block py-2 text-gray-700 hover:text-red-700">
                Handknit
              </Link>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-red-700">
                About
              </Link>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-red-700">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}