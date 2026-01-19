"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Star,
  ShoppingBag,
  Heart,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  Share2,
  ChevronLeft,
  Check,
} from "lucide-react";
import { getProductById, products, Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors mb-8"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-charcoal">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <span className="absolute top-6 left-6 px-4 py-2 bg-gold text-black font-semibold rounded-full text-sm">
                  {product.badge}
                </span>
              )}
            </div>

            <button
              onClick={() => setIsLiked(!isLiked)}
              className="absolute top-6 right-6 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-gold/20 hover:bg-gold/20 transition-colors"
            >
              <Heart
                className={`h-5 w-5 ${isLiked ? "fill-gold text-gold" : "text-gold"}`}
              />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-gold/60 uppercase tracking-wider text-sm mb-2">
                {product.origin}
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-cream mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-gold text-gold"
                          : "text-gold/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-cream/60">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-serif text-gold">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-cream/40 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-cream/70 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-cream/60">Quantity:</span>
              <div className="flex items-center gap-3 bg-charcoal rounded-full border border-gold/20 p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:text-gold transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-cream">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:text-gold transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1 bg-gold text-black hover:bg-gold/90 py-6 text-lg"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold/30 text-gold hover:bg-gold/10 py-6"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {product.inStock && (
              <p className="flex items-center gap-2 text-green-500 text-sm">
                <Check className="h-4 w-4" />
                In Stock - Ready to Ship
              </p>
            )}

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold/10">
              <div className="text-center">
                <Truck className="h-6 w-6 text-gold mx-auto mb-2" />
                <p className="text-xs text-cream/60">Free Shipping</p>
                <p className="text-xs text-cream/40">Orders $200+</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-gold mx-auto mb-2" />
                <p className="text-xs text-cream/60">Quality Guarantee</p>
                <p className="text-xs text-cream/40">100% Authentic</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 text-gold mx-auto mb-2" />
                <p className="text-xs text-cream/60">Easy Returns</p>
                <p className="text-xs text-cream/40">30 Day Policy</p>
              </div>
            </div>
          </motion.div>
        </div>

        <Tabs defaultValue="details" className="mb-20">
          <TabsList className="bg-charcoal border border-gold/20 p-1">
            <TabsTrigger
              value="details"
              className="data-[state=active]:bg-gold data-[state=active]:text-black"
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="ingredients"
              className="data-[state=active]:bg-gold data-[state=active]:text-black"
            >
              Ingredients
            </TabsTrigger>
            <TabsTrigger
              value="nutrition"
              className="data-[state=active]:bg-gold data-[state=active]:text-black"
            >
              Nutrition
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8 p-6 rounded-xl bg-charcoal/50 border border-gold/10">
              <div>
                <h3 className="text-gold font-serif text-lg mb-4">Product Details</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-cream/60">Origin</dt>
                    <dd className="text-cream">{product.origin}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-cream/60">Weight</dt>
                    <dd className="text-cream">{product.weight}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-cream/60">Category</dt>
                    <dd className="text-cream capitalize">{product.category}</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-gold font-serif text-lg mb-4">Storage</h3>
                <p className="text-cream/70 text-sm">
                  Store in a cool, dry place away from direct sunlight. 
                  Once opened, refrigerate and consume within 7 days for optimal freshness.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ingredients" className="mt-6">
            <div className="p-6 rounded-xl bg-charcoal/50 border border-gold/10">
              <h3 className="text-gold font-serif text-lg mb-4">Ingredients</h3>
              {product.ingredients ? (
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, i) => (
                    <li key={i} className="flex items-center gap-2 text-cream/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-cream/60">Ingredient information not available.</p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="nutrition" className="mt-6">
            <div className="p-6 rounded-xl bg-charcoal/50 border border-gold/10">
              <h3 className="text-gold font-serif text-lg mb-4">Nutrition Facts</h3>
              {product.nutritionFacts ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-cream/40 text-sm">Calories</p>
                    <p className="text-2xl font-serif text-gold">{product.nutritionFacts.calories}</p>
                  </div>
                  <div>
                    <p className="text-cream/40 text-sm">Fat</p>
                    <p className="text-2xl font-serif text-gold">{product.nutritionFacts.fat}</p>
                  </div>
                  <div>
                    <p className="text-cream/40 text-sm">Carbs</p>
                    <p className="text-2xl font-serif text-gold">{product.nutritionFacts.carbs}</p>
                  </div>
                  <div>
                    <p className="text-cream/40 text-sm">Protein</p>
                    <p className="text-2xl font-serif text-gold">{product.nutritionFacts.protein}</p>
                  </div>
                </div>
              ) : (
                <p className="text-cream/60">Nutrition information not available.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif text-cream mb-8">
              You May Also <span className="gold-text-gradient">Like</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
