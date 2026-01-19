"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/lib/cart-context";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      {children}
      <Footer />
      <Toaster position="top-right" />
    </CartProvider>
  );
}
