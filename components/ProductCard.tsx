"use client"

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  title: { zh: string; en: string };
  price: number;
  image: string;
  category: { zh: string; en: string };
}

export function ProductCard({ id, title, price, image, category }: ProductCardProps) {
  const { addToCart, cartCount } = useCart();
  const { language, t } = useLanguage();
  const [isLiked, setIsLiked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showLikeToast, setShowLikeToast] = useState(false);

  const displayTitle = language === "zh" ? title.zh : title.en;
  const displayCategory = language === "zh" ? category.zh : category.en;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, title: displayTitle, price, image });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    if (!isLiked) {
      setShowLikeToast(true);
      setTimeout(() => setShowLikeToast(false), 2000);
    }
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700">
          <img
            src={image}
            alt={displayTitle}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-red-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
              {t("热销", "Hot")}
            </span>
          </div>

          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-red-700 hover:text-white transition-colors"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {t("加购", "Add to Cart")}
              </Button>
              <Button
                onClick={handleLike}
                className={`bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-red-700 hover:text-white transition-colors px-4 ${isLiked ? 'text-red-500 hover:text-white' : ''}`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-200 dark:border-red-800">
              {displayCategory}
            </span>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.9</span>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-red-700 transition-colors duration-300">
            {displayTitle}
          </h3>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
              ${price.toFixed(2)}
            </p>
            <Link href={`/product/${id}`}>
              <Button variant="outline" size="sm" className="rounded-full dark:border-gray-600 dark:text-white">
                {t("查看详情", "View Details")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Toast Notification */}
        {showToast && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-10 animate-pulse">
            ✓ {t("已加入购物车", "Added to Cart")}
          </div>
        )}

        {showLikeToast && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-10 animate-pulse">
            ♥ {t("已收藏", "Added to Favorites")}
          </div>
        )}
      </div>
    </div>
  );
}