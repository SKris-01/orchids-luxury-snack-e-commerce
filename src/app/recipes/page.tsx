"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, ChefHat, ArrowRight } from "lucide-react";
import { recipes, getProductById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const difficultyColors = {
  Easy: "bg-green-500/10 text-green-500",
  Medium: "bg-gold/10 text-gold",
  Hard: "bg-burgundy/10 text-burgundy",
};

export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <p className="text-gold/60 uppercase tracking-[0.3em] text-sm mb-4">
            Culinary Inspirations
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream mb-4">
            Gourmet <span className="gold-text-gradient">Recipes</span>
          </h1>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Discover exquisite recipes featuring our premium products, crafted by world-renowned chefs
            to elevate your culinary experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/recipes/${recipe.id}`} className="group block">
                <div className="rounded-2xl overflow-hidden bg-charcoal/50 border border-gold/10 hover:border-gold/30 transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <Badge
                      className={`absolute top-4 left-4 ${difficultyColors[recipe.difficulty]}`}
                    >
                      {recipe.difficulty}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-serif text-cream group-hover:text-gold transition-colors mb-3">
                      {recipe.title}
                    </h2>
                    <p className="text-cream/60 text-sm mb-4 line-clamp-2">
                      {recipe.description}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-cream/50 mb-4">
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gold" />
                        {recipe.prepTime}
                      </span>
                      <span className="flex items-center gap-2">
                        <ChefHat className="h-4 w-4 text-gold" />
                        {recipe.cookTime}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gold" />
                        {recipe.servings} servings
                      </span>
                    </div>

                    <div className="pt-4 border-t border-gold/10">
                      <p className="text-xs text-gold/60 uppercase tracking-wider mb-2">
                        Featured Products
                      </p>
                      <div className="flex items-center gap-2">
                        {recipe.products.map((productId) => {
                          const product = getProductById(productId);
                          return product ? (
                            <div
                              key={productId}
                              className="w-8 h-8 rounded-full overflow-hidden border border-gold/20 relative"
                            >
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : null;
                        })}
                        <span className="text-cream/40 text-sm ml-2">
                          {recipe.products.length} products
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="p-12 rounded-2xl bg-gradient-to-r from-gold/10 to-burgundy/10 border border-gold/20">
            <ChefHat className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-cream mb-3">
              Share Your <span className="gold-text-gradient">Creations</span>
            </h3>
            <p className="text-cream/60 max-w-md mx-auto mb-6">
              Have a luxurious recipe featuring our products? We&apos;d love to feature it!
              Share your culinary masterpiece with our community.
            </p>
            <Button className="bg-gold text-black hover:bg-gold/90">
              Submit Recipe
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
