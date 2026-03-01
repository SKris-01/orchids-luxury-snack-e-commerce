import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, ShoppingBag, ClipboardList, Settings, Home, BarChart3 } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: ShoppingBag },
    { name: "Orders", href: "/admin/orders", icon: ClipboardList },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-black text-cream">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gold/10 bg-charcoal/50 backdrop-blur-xl hidden md:flex flex-col">
        <div className="p-8 border-b border-gold/10">
          <Link href="/" className="flex flex-col items-center">
            <span className="text-xl font-serif gold-text-gradient tracking-tighter">SHRIYANS</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60">Admin Portal</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-6 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gold/10 hover:text-gold transition-all duration-300 group"
            >
              <item.icon className="h-5 w-5 text-gold/60 group-hover:text-gold" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-gold/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
          >
            <Home className="h-5 w-5 text-cream/40" />
            <span className="text-sm">Back to Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
