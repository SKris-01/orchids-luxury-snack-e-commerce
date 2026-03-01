"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, Crown, User, Heart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Collections" },
  { href: "/recipes", label: "Recipes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, setIsOpen } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-md" />
      
      <div className="relative">
        <div className="hidden lg:block border-b border-gold/10">
          <div className="max-w-7xl mx-auto px-6 py-2">
            <div className="flex items-center justify-between text-xs text-gold/60">
              <p>Free Express Shipping on Orders Over $200</p>
              <div className="flex items-center gap-6">
                <Link href="/dashboard" className="hover:text-gold transition-colors">My Account</Link>
                <Link href="/orders" className="hover:text-gold transition-colors">Track Order</Link>
              </div>
            </div>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-gold hover:bg-gold/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-black/95 border-gold/20">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-8 mt-4">
                    <Crown className="h-8 w-8 text-gold" />
                    <span className="text-2xl font-serif text-gold">Shriyans</span>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="px-4 py-3 text-lg text-cream/80 hover:text-gold hover:bg-gold/5 rounded-lg transition-all font-light tracking-wide"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="h-px bg-gold/10 my-4" />
                    <Link
                      href="/dashboard"
                      className="px-4 py-3 text-lg text-cream/80 hover:text-gold hover:bg-gold/5 rounded-lg transition-all font-light tracking-wide"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/orders"
                      className="px-4 py-3 text-lg text-cream/80 hover:text-gold hover:bg-gold/5 rounded-lg transition-all font-light tracking-wide"
                    >
                      My Orders
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Crown className="h-8 w-8 lg:h-10 lg:w-10 text-gold" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-2xl lg:text-3xl font-serif tracking-[0.2em] text-gold">
                  Shriyans
                </h1>
                <p className="text-[10px] tracking-[0.3em] text-gold/60 uppercase">
                  Premium Lotus Seeds
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm tracking-wider text-cream/80 hover:text-gold transition-colors group font-light"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.form
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    onSubmit={handleSearch}
                    className="overflow-hidden"
                  >
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search luxuries..."
                      className="w-40 lg:w-64 bg-black/50 border-gold/30 text-cream placeholder:text-cream/40 focus:border-gold"
                      autoFocus
                    />
                  </motion.form>
                )}
              </AnimatePresence>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gold hover:bg-gold/10"
              >
                {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </Button>

              <Link href="/dashboard">
                <Button variant="ghost" size="icon" className="hidden lg:flex text-gold hover:bg-gold/10">
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              <Button variant="ghost" size="icon" className="hidden lg:flex text-gold hover:bg-gold/10">
                <Heart className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                className="relative text-gold hover:bg-gold/10"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-black text-xs flex items-center justify-center font-semibold"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
