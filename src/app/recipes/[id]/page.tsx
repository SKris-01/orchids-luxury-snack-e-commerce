"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Clock, Users, ChefHat, ChevronLeft, ShoppingBag, Printer, Share2 } from "lucide-react";
import { getRecipeById, getProductById } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const difficultyColors = {
  Easy: "bg-green-500/10 text-green-500",
  Medium: "bg-gold/10 text-gold",
  Hard: "bg-burgundy/10 text-burgundy",
};

export default function RecipeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const recipe = getRecipeById(id);
  const { addItem } = useCart();

  if (!recipe) {
    notFound();
  }

  const relatedProducts = recipe.products
    .map((productId) => getProductById(productId))
    .filter(Boolean);

  const handleAddAllToCart = () => {
    relatedProducts.forEach((product) => {
      if (product) addItem(product, 1);
    });
    toast.success(`Added ${relatedProducts.length} products to cart`);
  };

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/recipes"
          className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors mb-8"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Recipes
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8"
        >
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <Badge className={`mb-4 ${difficultyColors[recipe.difficulty]}`}>
              {recipe.difficulty}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif text-cream mb-4">
              {recipe.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-cream/70">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                Prep: {recipe.prepTime}
              </span>
              <span className="flex items-center gap-2">
                <ChefHat className="h-4 w-4 text-gold" />
                Cook: {recipe.cookTime}
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gold" />
                {recipe.servings} servings
              </span>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-3 mb-8">
          <Button
            onClick={handleAddAllToCart}
            className="bg-gold text-black hover:bg-gold/90"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add All Products to Cart
          </Button>
          <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-cream/70 leading-relaxed mb-12"
        >
          {recipe.description}
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 space-y-8">
              <div className="p-6 rounded-xl bg-charcoal/50 border border-gold/10">
                <h2 className="text-xl font-serif text-gold mb-6">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-cream/80">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-charcoal/50 border border-gold/10">
                <h3 className="text-lg font-serif text-gold mb-4">Featured Products</h3>
                <div className="space-y-3">
                  {relatedProducts.map(
                    (product) =>
                      product && (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-black/30 hover:bg-gold/5 transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-md overflow-hidden relative">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-cream text-sm truncate group-hover:text-gold transition-colors">
                              {product.name}
                            </p>
                            <p className="text-gold text-sm">${product.price.toFixed(2)}</p>
                          </div>
                        </Link>
                      )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-serif text-gold mb-8">Instructions</h2>
            <div className="space-y-6">
              {recipe.instructions.map((instruction, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <span className="text-gold font-serif">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-cream/80 leading-relaxed">{instruction}</p>
                    {index < recipe.instructions.length - 1 && (
                      <Separator className="bg-gold/10 mt-6" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-gold/10 to-burgundy/10 border border-gold/20">
              <h3 className="text-lg font-serif text-gold mb-3">Chef&apos;s Tip</h3>
              <p className="text-cream/70">
                For the best results, ensure all ingredients are at room temperature before starting.
                This allows for better incorporation and a more refined final dish.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
