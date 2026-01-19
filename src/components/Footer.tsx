"use client";

import Link from "next/link";
import { Crown, Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-gold/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Crown className="h-10 w-10 text-gold" />
              <div>
                <h2 className="text-2xl font-serif tracking-[0.2em] text-gold">LUXE</h2>
                <p className="text-[10px] tracking-[0.3em] text-gold/60 uppercase">Artisan Delicacies</p>
              </div>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed">
              Curating the world&apos;s finest gourmet delicacies since 1892. 
              Each piece is hand-selected to bring you an unparalleled luxury experience.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full border border-gold/20 text-gold/60 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-gold font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Shop All", href: "/products" },
                { label: "New Arrivals", href: "/products?sort=new" },
                { label: "Best Sellers", href: "/products?sort=popular" },
                { label: "Gift Sets", href: "/products?category=gifts" },
                { label: "Recipes", href: "/recipes" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-serif text-lg mb-6">Customer Service</h3>
            <ul className="space-y-3">
              {[
                { label: "My Account", href: "/dashboard" },
                { label: "Track Order", href: "/orders" },
                { label: "Shipping Info", href: "/shipping" },
                { label: "Returns & Exchanges", href: "/returns" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-gold font-serif text-lg mb-6">Newsletter</h3>
              <p className="text-cream/60 text-sm mb-4">
                Subscribe for exclusive offers and new arrivals.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter email"
                  className="bg-black/50 border-gold/30 text-cream placeholder:text-cream/40 focus:border-gold"
                />
                <Button className="bg-gold text-black hover:bg-gold/90 px-6">
                  Join
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-cream/60 text-sm">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Fifth Avenue, New York, NY 10022</span>
              </div>
              <div className="flex items-center gap-3 text-cream/60 text-sm">
                <Phone className="h-4 w-4 text-gold" />
                <span>+1 (888) LUXE-000</span>
              </div>
              <div className="flex items-center gap-3 text-cream/60 text-sm">
                <Mail className="h-4 w-4 text-gold" />
                <span>concierge@luxe.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-sm">
              © 2024 LUXE Artisan Delicacies. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-cream/40 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-cream/40 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
