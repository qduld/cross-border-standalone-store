"use client"

import Link from "next/link";
import { ShoppingCart, Search, User, Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function Navbar() {
  const { cartCount } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
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
      <nav className={`sticky top-0 z-50 border-b ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
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
              <Link href="/" className={`${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'} transition font-medium`}>
                {t("首页", "Home")}
              </Link>
              <Link href="/products" className={`${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'} transition font-medium`}>
                {t("产品", "Products")}
              </Link>
              <Link href="/products?category=Seashell" className={`${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'} transition font-medium`}>
                {t("贝壳", "Seashell")}
              </Link>
              <Link href="/products?category=Chinese Style" className={`${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'} transition font-medium`}>
                {t("中国风", "Chinese")}
              </Link>
              <Link href="/products?category=Handknit" className={`${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'} transition font-medium`}>
                {t("手工", "Handknit")}
              </Link>
              <Link href="/about" className={`${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'} transition font-medium`}>
                {t("关于", "About")}
              </Link>
              <Link href="/contact" className={`${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'} transition font-medium`}>
                {t("联系", "Contact")}
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
                title={language === "zh" ? "Switch to English" : "切换到中文"}
              >
                <Globe className="h-5 w-5" />
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                title={theme === "light" ? "Dark Mode" : "Light Mode"}
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>

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
                  <form onSubmit={handleSearch} className={`absolute right-0 top-12 border rounded-lg shadow-lg p-2 flex gap-2 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t("搜索...", "Search...")}
                      className={`px-3 py-1 border rounded w-48 ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : ''}`}
                      autoFocus
                    />
                    <Button type="submit" size="sm" variant="gradient">
                      {t("搜索", "Search")}
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
          <div className={`md:hidden border-t ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white'}`}>
            <div className="px-4 py-2 space-y-1">
              <Link href="/" className={`block py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'}`}>
                {t("首页", "Home")}
              </Link>
              <Link href="/products" className={`block py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'}`}>
                {t("产品", "Products")}
              </Link>
              <Link href="/products?category=Seashell" className={`block py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'}`}>
                {t("贝壳", "Seashell")}
              </Link>
              <Link href="/products?category=Chinese Style" className={`block py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'}`}>
                {t("中国风", "Chinese")}
              </Link>
              <Link href="/products?category=Handknit" className={`block py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'}`}>
                {t("手工", "Handknit")}
              </Link>
              <Link href="/about" className={`block py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'}`}>
                {t("关于", "About")}
              </Link>
              <Link href="/contact" className={`block py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-700'}`}>
                {t("联系", "Contact")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}