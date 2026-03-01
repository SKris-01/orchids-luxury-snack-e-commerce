"use client";

import { useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CreditCard, Loader2, Sparkles, Crown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RazorpayCheckout() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(1499); // Example amount in INR

  const processPayment = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const order = await response.json();

      if (!order || order.error) {
        throw new Error(order.error || "Something went wrong while creating order");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
        amount: order.amount,
        currency: order.currency,
        name: "Shriyans Lotus Seeds",
        description: "Premium Roasted Makhana Order",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=200&q=80",
        order_id: order.id,
        handler: function (response: any) {
          console.log("Payment successful:", response);
          toast.success("Payment Successful! Your order is being processed.");
          // In a real app, you would verify the payment signature on the backend here
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Shriyans Corporate Office, Mithila",
        },
        theme: {
          color: "#D4AF37", // Gold theme
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      paymentObject.on("payment.failed", function (response: any) {
        console.error("Payment failed:", response.error);
        toast.error("Payment Failed: " + response.error.description);
      });
    } catch (error: any) {
      console.error("Payment error:", error);
      toast.error(error.message || "An error occurred during payment processing");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <section className="max-w-4xl mx-auto px-6">
        <div className="relative p-12 rounded-3xl bg-gradient-to-b from-charcoal to-black border border-gold/20 overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <Crown className="h-12 w-12 text-gold/20" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold/10">
                <Image
                  src="https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80"
                  alt="Product Image"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 rounded-full bg-gold/90 text-black text-xs font-bold uppercase tracking-widest">
                    Best Seller
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <p className="text-gold/60 uppercase tracking-[0.2em] text-sm">Checkout</p>
                <h1 className="text-4xl font-serif text-cream">
                  Premium <span className="gold-text-gradient">Selection</span>
                </h1>
              </div>

              <div className="p-6 rounded-2xl bg-black/40 border border-gold/10 space-y-4">
                <div className="flex justify-between items-center text-cream/70">
                  <span>Subtotal</span>
                  <span>₹{amount}</span>
                </div>
                <div className="flex justify-between items-center text-cream/70">
                  <span>Shipping</span>
                  <span className="text-gold">Free</span>
                </div>
                <div className="pt-4 border-t border-gold/10 flex justify-between items-center text-2xl font-serif">
                  <span className="text-cream">Total</span>
                  <span className="gold-text-gradient font-bold">₹{amount}</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-cream/40 flex items-center gap-2">
                  <Sparkles className="h-3 w-3 text-gold" />
                  Secured by Razorpay • Express Delivery Available
                </p>
                <Button
                  onClick={processPayment}
                  disabled={loading}
                  className="w-full bg-gold text-black hover:bg-gold/90 h-16 text-lg font-bold group"
                >
                  {loading ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                  ) : (
                    <>
                      <CreditCard className="mr-3 h-5 w-5" />
                      Pay with Razorpay
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Safe & Secure", desc: "Industry-standard SSL encryption" },
            { title: "Gourmet Quality", desc: "Hand-picked and slow-roasted" },
            { title: "Luxury Service", desc: "Dedicated concierge support" },
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-charcoal/30 border border-gold/5 text-center">
              <h3 className="text-gold font-serif mb-1">{feature.title}</h3>
              <p className="text-cream/40 text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
