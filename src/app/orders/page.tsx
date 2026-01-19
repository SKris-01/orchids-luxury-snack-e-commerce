"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  ChevronRight,
  Search,
  Filter,
  Download,
  Eye,
  MapPin,
} from "lucide-react";
import { sampleOrders, getProductById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const statusConfig = {
  Processing: { icon: Clock, color: "text-gold bg-gold/10", label: "Processing" },
  Shipped: { icon: Truck, color: "text-blue-500 bg-blue-500/10", label: "Shipped" },
  Delivered: { icon: CheckCircle, color: "text-green-500 bg-green-500/10", label: "Delivered" },
  Cancelled: { icon: XCircle, color: "text-red-500 bg-red-500/10", label: "Cancelled" },
};

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<(typeof sampleOrders)[0] | null>(null);

  const filteredOrders = sampleOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.shippingAddress.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-gold/60 uppercase tracking-[0.3em] text-sm mb-4">
            Order History
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream mb-4">
            My <span className="gold-text-gradient">Orders</span>
          </h1>
          <p className="text-cream/60">
            Track and manage your orders, view order details, and download invoices.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/40" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search orders..."
              className="pl-10 bg-charcoal border-gold/20 text-cream placeholder:text-cream/40"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px] bg-charcoal border-gold/20 text-cream">
              <Filter className="h-4 w-4 mr-2 text-cream/40" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-charcoal border-gold/20">
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="Processing">Processing</SelectItem>
              <SelectItem value="Shipped">Shipped</SelectItem>
              <SelectItem value="Delivered">Delivered</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-charcoal/50 border border-gold/10">
            <p className="text-cream/50 text-sm">Total Orders</p>
            <p className="text-2xl font-serif text-gold mt-1">{sampleOrders.length}</p>
          </div>
          <div className="p-4 rounded-xl bg-charcoal/50 border border-gold/10">
            <p className="text-cream/50 text-sm">Processing</p>
            <p className="text-2xl font-serif text-gold mt-1">
              {sampleOrders.filter((o) => o.status === "Processing").length}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-charcoal/50 border border-gold/10">
            <p className="text-cream/50 text-sm">Shipped</p>
            <p className="text-2xl font-serif text-blue-400 mt-1">
              {sampleOrders.filter((o) => o.status === "Shipped").length}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-charcoal/50 border border-gold/10">
            <p className="text-cream/50 text-sm">Delivered</p>
            <p className="text-2xl font-serif text-green-400 mt-1">
              {sampleOrders.filter((o) => o.status === "Delivered").length}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-20">
              <Package className="h-16 w-16 text-gold/30 mx-auto mb-4" />
              <p className="text-cream/60 text-lg">No orders found</p>
              <Button asChild className="mt-4 bg-gold text-black hover:bg-gold/90">
                <Link href="/products">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            filteredOrders.map((order, index) => {
              const StatusIcon = statusConfig[order.status].icon;
              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-charcoal/50 border border-gold/10 hover:border-gold/30 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="flex -space-x-3">
                        {order.items.slice(0, 3).map((item, i) => {
                          const product = getProductById(item.productId);
                          return product ? (
                            <div
                              key={i}
                              className="w-14 h-14 rounded-lg overflow-hidden border-2 border-charcoal relative"
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
                        {order.items.length > 3 && (
                          <div className="w-14 h-14 rounded-lg bg-gold/10 border-2 border-charcoal flex items-center justify-center">
                            <span className="text-gold text-sm">+{order.items.length - 3}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-serif text-cream">{order.id}</h3>
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                              statusConfig[order.status].color
                            }`}
                          >
                            <StatusIcon className="h-3 w-3" />
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-cream/50 mb-2">
                          {order.items.length} items • Ordered on {order.date}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-cream/40">
                          <MapPin className="h-3 w-3" />
                          <span className="truncate max-w-[300px]">{order.shippingAddress}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="text-right">
                        <p className="text-2xl font-serif text-gold">${order.total.toFixed(2)}</p>
                        {order.trackingNumber && (
                          <p className="text-xs text-cream/40 mt-1">
                            Tracking: {order.trackingNumber}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gold/30 text-gold hover:bg-gold/10"
                              onClick={() => setSelectedOrder(order)}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-black border-gold/20 text-cream max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-gold font-serif text-2xl">
                                Order {order.id}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6 mt-4">
                              <div className="flex items-center gap-3">
                                <span
                                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                                    statusConfig[order.status].color
                                  }`}
                                >
                                  <StatusIcon className="h-4 w-4" />
                                  {order.status}
                                </span>
                                <span className="text-cream/50">{order.date}</span>
                              </div>

                              <Separator className="bg-gold/10" />

                              <div>
                                <h4 className="text-gold font-serif mb-4">Order Items</h4>
                                <div className="space-y-3">
                                  {order.items.map((item, i) => {
                                    const product = getProductById(item.productId);
                                    return product ? (
                                      <div
                                        key={i}
                                        className="flex items-center justify-between p-3 rounded-lg bg-charcoal/50"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-12 h-12 rounded-md overflow-hidden relative">
                                            <Image
                                              src={product.image}
                                              alt={product.name}
                                              fill
                                              className="object-cover"
                                            />
                                          </div>
                                          <div>
                                            <p className="text-cream">{product.name}</p>
                                            <p className="text-sm text-cream/50">
                                              Qty: {item.quantity}
                                            </p>
                                          </div>
                                        </div>
                                        <p className="text-gold">
                                          ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                      </div>
                                    ) : null;
                                  })}
                                </div>
                              </div>

                              <Separator className="bg-gold/10" />

                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="text-gold font-serif mb-2">Shipping Address</h4>
                                  <p className="text-cream/70 text-sm">{order.shippingAddress}</p>
                                </div>
                                {order.trackingNumber && (
                                  <div>
                                    <h4 className="text-gold font-serif mb-2">Tracking</h4>
                                    <p className="text-cream/70 text-sm font-mono">
                                      {order.trackingNumber}
                                    </p>
                                  </div>
                                )}
                              </div>

                              <Separator className="bg-gold/10" />

                              <div className="flex justify-between items-center">
                                <span className="text-cream/60">Total</span>
                                <span className="text-2xl font-serif text-gold">
                                  ${order.total.toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gold/30 text-gold hover:bg-gold/10"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
