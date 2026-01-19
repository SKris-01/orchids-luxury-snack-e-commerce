"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShoppingBag, Heart, Eye } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-charcoal to-black border border-gold/10 hover:border-gold/30 transition-all duration-500">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          {product.badge && (
            <Badge className="absolute top-4 left-4 bg-gold text-black font-semibold px-3 py-1">
              {product.badge}
            </Badge>
          )}

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-gold/20 hover:bg-gold/20 transition-colors"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${isLiked ? "fill-gold text-gold" : "text-gold"}`}
            />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute bottom-4 left-4 right-4 flex gap-2"
          >
            <Button
              onClick={() => addItem(product)}
              className="flex-1 bg-gold text-black hover:bg-gold/90 font-semibold"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Link href={`/products/${product.id}`}>
              <Button
                variant="outline"
                size="icon"
                className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="p-5 space-y-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-gold text-gold"
                    : "text-gold/30"
                }`}
              />
            ))}
            <span className="text-xs text-cream/50 ml-2">({product.reviews})</span>
          </div>

          <Link href={`/products/${product.id}`}>
            <h3 className="font-serif text-lg text-cream hover:text-gold transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-sm text-cream/50 line-clamp-2">{product.description}</p>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-serif text-gold">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-cream/40 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.origin && (
              <span className="text-xs text-gold/60 uppercase tracking-wider">
                {product.origin}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
