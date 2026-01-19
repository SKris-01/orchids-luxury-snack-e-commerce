"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Trash2, Crown } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg bg-black/95 border-gold/20 text-cream overflow-hidden flex flex-col">
        <SheetHeader className="space-y-4">
          <SheetTitle className="flex items-center gap-3 text-gold font-serif text-2xl">
            <ShoppingBag className="h-6 w-6" />
            Your Cart
          </SheetTitle>
          <Separator className="bg-gold/20" />
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            <div className="p-6 rounded-full bg-gold/5 border border-gold/20">
              <Crown className="h-12 w-12 text-gold/40" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-serif text-cream">Your cart is empty</h3>
              <p className="text-cream/50 text-sm">
                Discover our exquisite collection of luxury delicacies
              </p>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              asChild
              className="bg-gold text-black hover:bg-gold/90"
            >
              <Link href="/products">Browse Collection</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6 space-y-4 pr-2">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-4 rounded-lg bg-charcoal/50 border border-gold/10"
                  >
                    <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-cream truncate">{item.product.name}</h4>
                      <p className="text-gold text-sm mt-1">
                        ${item.product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center gap-2 bg-black/50 rounded-full border border-gold/20">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1.5 hover:text-gold transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1.5 hover:text-gold transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-1.5 text-cream/50 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gold font-semibold">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t border-gold/20 pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-cream/60">Subtotal</span>
                <span className="text-xl font-serif text-gold">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-cream/40">
                Shipping and taxes calculated at checkout
              </p>
              <div className="grid gap-3">
                <Button
                  asChild
                  className="w-full bg-gold text-black hover:bg-gold/90 font-semibold py-6"
                >
                  <Link href="/cart" onClick={() => setIsOpen(false)}>
                    View Cart & Checkout
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="w-full border-gold/30 text-gold hover:bg-gold/10"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
