"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Shield, Gift } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  const shippingCost = totalPrice >= 200 ? 0 : 15.99;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shippingCost + tax;

  const handleCheckout = () => {
    toast.success("Proceeding to checkout...");
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex p-8 rounded-full bg-gold/5 border border-gold/20 mb-8"
            >
              <ShoppingBag className="h-16 w-16 text-gold/40" />
            </motion.div>
            <h1 className="text-3xl font-serif text-cream mb-4">Your Cart is Empty</h1>
            <p className="text-cream/60 mb-8 max-w-md mx-auto">
              Looks like you haven&apos;t added any luxury items to your cart yet.
              Explore our collection and find something special.
            </p>
            <Button asChild className="bg-gold text-black hover:bg-gold/90">
              <Link href="/products">
                Explore Collection
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-gold/60 uppercase tracking-[0.3em] text-sm mb-4">Shopping Cart</p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream">
            Your <span className="gold-text-gradient">Cart</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-xl bg-charcoal/50 border border-gold/10"
              >
                <div className="relative w-28 h-28 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href={`/products/${item.product.id}`}
                        className="font-serif text-lg text-cream hover:text-gold transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-cream/50 mt-1">{item.product.origin}</p>
                    </div>
                    <p className="text-xl font-serif text-gold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-black/50 rounded-full border border-gold/20 p-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:text-gold transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center text-cream">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:text-gold transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 text-cream/50 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="flex justify-between items-center pt-4">
              <Button
                variant="outline"
                onClick={clearCart}
                className="border-gold/30 text-gold hover:bg-gold/10"
              >
                Clear Cart
              </Button>
              <Button asChild variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-32"
            >
              <div className="p-6 rounded-xl bg-charcoal/50 border border-gold/10">
                <h2 className="text-xl font-serif text-gold mb-6">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-cream/70">
                    <span>Subtotal ({items.length} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-cream/70">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-cream/70">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <Separator className="bg-gold/10" />

                  <div className="flex justify-between items-center">
                    <span className="text-cream">Total</span>
                    <span className="text-2xl font-serif text-gold">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Promo code"
                      className="bg-black/50 border-gold/20 text-cream placeholder:text-cream/40"
                    />
                    <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                      Apply
                    </Button>
                  </div>

                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-gold text-black hover:bg-gold/90 py-6 text-lg"
                  >
                    Proceed to Checkout
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>

                {totalPrice < 200 && (
                  <p className="text-sm text-cream/50 mt-4 text-center">
                    Add ${(200 - totalPrice).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>

              <div className="mt-6 p-6 rounded-xl bg-charcoal/30 border border-gold/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-cream text-sm">Free Shipping</p>
                      <p className="text-cream/50 text-xs">On orders over $200</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-cream text-sm">Secure Checkout</p>
                      <p className="text-cream/50 text-xs">SSL encrypted payment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gift className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-cream text-sm">Gift Wrapping</p>
                      <p className="text-cream/50 text-xs">Complimentary service</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
