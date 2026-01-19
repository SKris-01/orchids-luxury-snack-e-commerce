"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Package,
  ShoppingBag,
  Heart,
  CreditCard,
  MapPin,
  Bell,
  Settings,
  LogOut,
  Crown,
  TrendingUp,
  Clock,
  Star,
} from "lucide-react";
import { sampleOrders, products, getProductById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const stats = [
  {
    label: "Total Orders",
    value: "12",
    icon: Package,
    change: "+3 this month",
    color: "text-gold",
  },
  {
    label: "Loyalty Points",
    value: "2,450",
    icon: Star,
    change: "Gold Member",
    color: "text-gold",
  },
  {
    label: "Wishlist Items",
    value: "8",
    icon: Heart,
    change: "3 on sale",
    color: "text-burgundy",
  },
  {
    label: "Total Spent",
    value: "$4,892",
    icon: TrendingUp,
    change: "+18% vs last year",
    color: "text-green-500",
  },
];

const menuItems = [
  { icon: Package, label: "My Orders", href: "/orders", badge: "3" },
  { icon: Heart, label: "Wishlist", href: "/wishlist" },
  { icon: CreditCard, label: "Payment Methods", href: "/payment" },
  { icon: MapPin, label: "Addresses", href: "/addresses" },
  { icon: Bell, label: "Notifications", href: "/notifications", badge: "5" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function DashboardPage() {
  const recentOrders = sampleOrders.slice(0, 3);

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold/50 flex items-center justify-center">
                <Crown className="h-10 w-10 text-black" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-serif text-cream">
                  Welcome back, <span className="gold-text-gradient">Alexandra</span>
                </h1>
                <p className="text-cream/60 mt-1">Gold Member since 2023</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button asChild className="bg-gold text-black hover:bg-gold/90">
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-charcoal/50 border-gold/10 hover:border-gold/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gold/5 ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="text-3xl font-serif text-cream mb-1">{stat.value}</p>
                  <p className="text-sm text-cream/60">{stat.label}</p>
                  <p className="text-xs text-gold/60 mt-2">{stat.change}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-charcoal/50 border-gold/10">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-gold font-serif text-xl">Recent Orders</CardTitle>
                  <Button asChild variant="link" className="text-gold">
                    <Link href="/orders">View All</Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-gold/10"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex -space-x-3">
                            {order.items.slice(0, 3).map((item, i) => {
                              const product = getProductById(item.productId);
                              return product ? (
                                <div
                                  key={i}
                                  className="w-10 h-10 rounded-lg overflow-hidden border-2 border-black relative"
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
                          </div>
                          <div>
                            <p className="text-cream font-medium">{order.id}</p>
                            <p className="text-sm text-cream/50">
                              {order.items.length} items • ${order.total.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              order.status === "Delivered"
                                ? "bg-green-500/10 text-green-500"
                                : order.status === "Shipped"
                                ? "bg-blue-500/10 text-blue-500"
                                : "bg-gold/10 text-gold"
                            }`}
                          >
                            {order.status}
                          </span>
                          <p className="text-xs text-cream/40 mt-1">{order.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-charcoal/50 border-gold/10">
                <CardHeader>
                  <CardTitle className="text-gold font-serif text-xl">Loyalty Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-cream">Gold Member</span>
                        <span className="text-cream/60">2,450 / 5,000 points</span>
                      </div>
                      <Progress value={49} className="h-2 bg-charcoal" />
                      <p className="text-sm text-cream/50 mt-2">
                        Earn 2,550 more points to reach Platinum status
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gold/10">
                      <div className="text-center">
                        <div className="text-2xl font-serif text-gold">5%</div>
                        <p className="text-xs text-cream/50">Discount</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-serif text-gold">Free</div>
                        <p className="text-xs text-cream/50">Shipping</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-serif text-gold">Early</div>
                        <p className="text-xs text-cream/50">Access</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-charcoal/50 border-gold/10 sticky top-32">
              <CardHeader>
                <CardTitle className="text-gold font-serif text-xl">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 rounded-lg text-cream/70 hover:text-gold hover:bg-gold/5 transition-colors group"
                    >
                      <span className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-gold/60 group-hover:text-gold" />
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold text-xs">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-gold/10">
                  <button className="flex items-center gap-3 px-4 py-3 w-full text-left text-cream/50 hover:text-red-400 transition-colors">
                    <LogOut className="h-5 w-5" />
                    Sign Out
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-gold/20 to-burgundy/20 border-gold/20 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-serif text-cream mb-2">
                    Upgrade to <span className="text-gold">Platinum</span>
                  </h3>
                  <p className="text-cream/60">
                    Unlock exclusive benefits: 10% off all orders, priority shipping, and VIP access to limited editions.
                  </p>
                </div>
                <Button className="bg-gold text-black hover:bg-gold/90 px-8">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
