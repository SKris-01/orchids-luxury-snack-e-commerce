"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Crown, Sparkles, Star, Truck, Shield, Award } from "lucide-react";
import { products, categories, recipes } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1920&q=80"
          alt="Luxury chocolates"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-black/30 backdrop-blur-sm mb-8"
        >
          <Sparkles className="h-4 w-4 text-gold" />
          <span className="text-sm text-gold/80 tracking-wider">Artisan Excellence Since 1892</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6"
        >
          <span className="text-cream">The Art of</span>
          <br />
          <span className="gold-text-gradient">Luxury Indulgence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Discover the world&apos;s most exquisite gourmet delicacies, handcrafted by master artisans 
          and sourced from the finest origins across the globe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90 px-8 py-6 text-lg group">
            <Link href="/products">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-gold/30 text-gold hover:bg-gold/10 px-8 py-6 text-lg">
            <Link href="/about">Our Story</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-gold"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Crown,
      title: "Premium Selection",
      description: "Hand-picked from the world's finest producers",
    },
    {
      icon: Truck,
      title: "White Glove Delivery",
      description: "Temperature-controlled luxury shipping",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "100% satisfaction or money back",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized excellence since 1892",
    },
  ];

  return (
    <section className="py-20 bg-charcoal border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex p-4 rounded-full bg-gold/5 border border-gold/20 mb-4 group-hover:bg-gold/10 transition-colors">
                <feature.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-cream font-serif text-lg mb-2">{feature.title}</h3>
              <p className="text-cream/50 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-burgundy/10 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold/60 uppercase tracking-[0.3em] text-sm mb-4"
          >
            Curated Collections
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-cream"
          >
            Explore Our <span className="gold-text-gradient">Categories</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/products?category=${category.id}`}
                className="group relative block p-6 md:p-8 rounded-2xl bg-gradient-to-b from-charcoal to-black border border-gold/10 hover:border-gold/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <span className="text-4xl md:text-5xl mb-4 block">{category.icon}</span>
                  <h3 className="font-serif text-lg text-cream group-hover:text-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-cream/40 mt-1">{category.count} items</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.badge).slice(0, 4);

  return (
    <section className="py-24 bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold/60 uppercase tracking-[0.3em] text-sm mb-4"
            >
              Featured Selection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-cream"
            >
              Signature <span className="gold-text-gradient">Delicacies</span>
            </motion.h2>
          </div>
          <Button asChild variant="outline" className="border-gold/30 text-gold hover:bg-gold/10 w-fit">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Victoria Sterling",
      role: "Culinary Critic",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      content: "LUXE has redefined what luxury snacking means. Their Belgian truffles are nothing short of perfection.",
      rating: 5,
    },
    {
      name: "James Montgomery",
      role: "Michelin Star Chef",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      content: "The Alba truffles from LUXE are the finest I've ever worked with. Impeccable quality and service.",
      rating: 5,
    },
    {
      name: "Elizabeth Crown",
      role: "Food Connoisseur",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      content: "From caviar to rare teas, every product exceeds expectations. A truly royal experience.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold/60 uppercase tracking-[0.3em] text-sm mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-cream"
          >
            What Our <span className="gold-text-gradient">Patrons Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-charcoal to-black border border-gold/10"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-cream/70 leading-relaxed mb-6">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif text-gold">{testimonial.name}</h4>
                  <p className="text-sm text-cream/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecipesPreview() {
  return (
    <section className="py-24 bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold/60 uppercase tracking-[0.3em] text-sm mb-4"
            >
              Culinary Inspirations
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-cream"
            >
              Gourmet <span className="gold-text-gradient">Recipes</span>
            </motion.h2>
          </div>
          <Button asChild variant="outline" className="border-gold/30 text-gold hover:bg-gold/10 w-fit">
            <Link href="/recipes">
              View All Recipes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recipes.slice(0, 2).map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/recipes/${recipe.id}`} className="group block">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-4 text-sm text-cream/70 mb-2">
                      <span>{recipe.prepTime}</span>
                      <span>•</span>
                      <span>{recipe.difficulty}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-cream group-hover:text-gold transition-colors">
                      {recipe.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542204625-ca960ca44635?w=1920&q=80"
          alt="Luxury background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Crown className="h-12 w-12 text-gold mx-auto" />
          <h2 className="text-4xl md:text-5xl font-serif text-cream">
            Join the <span className="gold-text-gradient">Inner Circle</span>
          </h2>
          <p className="text-cream/60 max-w-xl mx-auto">
            Subscribe to receive exclusive access to limited editions, private tastings, 
            and members-only offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-black/50 border border-gold/30 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
            />
            <Button className="bg-gold text-black hover:bg-gold/90 px-8 py-4 rounded-full">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <RecipesPreview />
      <NewsletterSection />
    </main>
  );
}
