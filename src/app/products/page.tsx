"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Grid3X3, LayoutList, X } from "lucide-react";
import { products, categories, searchProducts, getProductsByCategory } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialSearch = searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showInStock, setShowInStock] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (searchQuery) {
      result = searchProducts(searchQuery);
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (showInStock) {
      result = result.filter((p) => p.inStock);
    }

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy, priceRange, showInStock]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSortBy("featured");
    setPriceRange([0, 500]);
    setShowInStock(false);
  };

  const hasActiveFilters =
    searchQuery || selectedCategory || priceRange[0] > 0 || priceRange[1] < 500 || showInStock;

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-gold/60 uppercase tracking-[0.3em] text-sm mb-4">
            Our Collection
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream mb-4">
            Luxury <span className="gold-text-gradient">Delicacies</span>
          </h1>
          <p className="text-cream/60 max-w-2xl">
            Explore our curated selection of the world&apos;s finest gourmet products, 
            sourced from prestigious artisans across the globe.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-gold font-serif text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === ""
                        ? "bg-gold/10 text-gold"
                        : "text-cream/60 hover:text-cream hover:bg-charcoal"
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? "bg-gold/10 text-gold"
                          : "text-cream/60 hover:text-cream hover:bg-charcoal"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                      </span>
                      <span className="text-xs">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-gold font-serif text-lg mb-4">Price Range</h3>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={500}
                  step={10}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-cream/60">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}+</span>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="in-stock"
                    checked={showInStock}
                    onCheckedChange={(checked) => setShowInStock(checked as boolean)}
                  />
                  <label htmlFor="in-stock" className="text-cream/60 text-sm cursor-pointer">
                    In Stock Only
                  </label>
                </div>
              </div>

              {hasActiveFilters && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="w-full border-gold/30 text-gold hover:bg-gold/10"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/40" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="pl-10 bg-charcoal border-gold/20 text-cream placeholder:text-cream/40"
                />
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-charcoal border-gold/20 text-cream">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-charcoal border-gold/20">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden sm:flex items-center gap-2 border border-gold/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-gold/10 text-gold" : "text-cream/40"}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-gold/10 text-gold" : "text-cream/40"}`}
                >
                  <LayoutList className="h-4 w-4" />
                </button>
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden border-gold/20 text-gold">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-black border-gold/20">
                  <SheetHeader>
                    <SheetTitle className="text-gold font-serif">Filters</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-8 mt-8">
                    <div>
                      <h3 className="text-gold font-serif text-lg mb-4">Categories</h3>
                      <div className="space-y-2">
                        <button
                          onClick={() => setSelectedCategory("")}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                            selectedCategory === ""
                              ? "bg-gold/10 text-gold"
                              : "text-cream/60 hover:text-cream"
                          }`}
                        >
                          All Products
                        </button>
                        {categories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                              selectedCategory === cat.id
                                ? "bg-gold/10 text-gold"
                                : "text-cream/60 hover:text-cream"
                            }`}
                          >
                            {cat.icon} {cat.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-gold font-serif text-lg mb-4">Price Range</h3>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500}
                        step={10}
                        className="mb-4"
                      />
                      <div className="flex justify-between text-sm text-cream/60">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}+</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchQuery && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-sm">
                    Search: {searchQuery}
                    <button onClick={() => setSearchQuery("")}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {selectedCategory && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-sm">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory("")}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            <p className="text-cream/50 text-sm mb-6">
              Showing {filteredProducts.length} products
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-cream/60 text-lg">No products found matching your criteria.</p>
                <Button
                  onClick={clearFilters}
                  className="mt-4 bg-gold text-black hover:bg-gold/90"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-6"
                }
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-black pt-32 pb-20 flex items-center justify-center">
        <div className="text-gold">Loading...</div>
      </main>
    }>
      <ProductsContent />
    </Suspense>
  );
}
