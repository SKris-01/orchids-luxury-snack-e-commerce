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
                  src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?w=1920&q=80"
                  alt="Luxury roasted makhana backdrop"
                  fill
                  className="object-cover"
                  priority
                />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
        </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-black/30 backdrop-blur-sm mb-8"
        >
          <Sparkles className="h-4 w-4 text-gold" />
          <span className="text-sm text-gold/80 tracking-wider">Shriyans: The Golden Grain of Mithila</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6"
        >
          <span className="text-cream">Exquisite Roasted</span>
          <br />
          <span className="gold-text-gradient">Lotus Seeds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Savor the crunch of royalty. Our hand-picked, slow-roasted flavored makhana 
          brings the ancient heritage of Mithila to your modern gourmet palate.
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
        title: "Royal Heritage",
        description: "Authentic lotus seeds from the heart of Mithila",
      },
      {
        icon: Sparkles,
        title: "Artisanal Roasting",
        description: "Slow-roasted in small batches with pure ghee",
      },
      {
        icon: Shield,
        title: "Purity Promised",
        description: "No preservatives, artificial colors or MSG",
      },
      {
        icon: Award,
        title: "Luxury Quality",
        description: "Export-grade makhana for the global connoisseur",
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
        name: "Aditi Sharma",
        role: "Wellness Coach",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
        content: "Shriyans Lotus Seeds are my favorite healthy luxury. The Truffle & Parmesan flavor is absolutely addictive!",
        rating: 5,
      },
      {
        name: "Vikram Mehta",
        role: "Gourmet Enthusiast",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        content: "I've tried many makhana brands, but the quality and crunch of Shriyans are in a league of their own. Truly royal.",
        rating: 5,
      },
      {
        name: "Sonia Kapoor",
        role: "Lifestyle Blogger",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
        content: "The packaging is as beautiful as the taste. Their gift hampers are my go-to for festive gifting.",
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

function ShoppingPlatformsSection() {
  const platforms = [
    {
      name: "Amazon",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
          <path d="M15.93 17.13c-1.47.81-2.04.99-3.81.99-1.63 0-2.37-.14-3.37-.62-.51-.24-.9-.55-1.16-.94-.26-.39-.39-.85-.39-1.37 0-.52.13-1.01.39-1.47.26-.46.61-.83 1.05-1.12.44-.29.98-.5 1.62-.63.64-.13 1.4-.2 2.27-.2h1.41v-.43c0-.36-.05-.7-.14-1.01-.09-.31-.22-.59-.39-.84-.17-.25-.39-.45-.66-.59-.27-.14-.59-.21-.96-.21-.36 0-.68.07-.96.21-.28.14-.52.33-.7.58s-.33.53-.41.83c-.08.31-.13.62-.13.92h-2.1c.01-.58.1-1.14.28-1.68.18-.54.44-1.03.78-1.47.34-.44.76-.8 1.25-1.08.49-.28 1.05-.42 1.68-.42.66 0 1.26.15 1.79.44.53.29.97.68 1.32 1.16.35.48.61 1.03.78 1.65.17.62.25 1.28.25 1.99v3.1c0 .54.07 1.05.21 1.53.14.48.33.92.58 1.32l-.93.26c-.19-.34-.33-.72-.42-1.13zm-1.54-3.52c-.59 0-1.1.05-1.53.15-.43.1-.8.25-1.1.45-.3.2-.53.45-.69.75-.16.3-.24.64-.24 1.02 0 .34.07.65.21.92.14.27.34.5.59.68.25.18.54.31.87.39.33.08.69.12 1.08.12.56 0 1.07-.09 1.51-.27.44-.18.82-.44 1.13-.77.31-.33.54-.73.69-1.19.15-.46.22-.96.22-1.5v-.75h-1.74zm4.4 5.37c-1.54 1.33-3.69 2.14-6.11 2.14-2.88 0-5.38-1.14-7.14-2.98l.61-.53c1.61 1.71 3.93 2.77 6.53 2.77 2.13 0 4.04-.73 5.48-1.95l.63.55zm.6-1.04l-.53-.59.73-.59 1.24 1.33-1.66 1.04-.33-.66.55-.53z" />
        </svg>
      ),
      url: "https://www.amazon.in",
      color: "hover:text-[#FF9900]",
    },
    {
      name: "Flipkart",
      icon: (
        <span className="text-2xl font-bold italic">F<span className="text-gold">!</span></span>
      ),
      url: "https://www.flipkart.com",
      color: "hover:text-[#2874F0]",
    },
    {
      name: "Meesho",
      icon: (
        <span className="text-2xl font-bold">M</span>
      ),
      url: "https://www.meesho.com",
      color: "hover:text-[#F43397]",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-cream">
              Find us on your <span className="gold-text-gradient">Shopping Platform</span>
            </h2>
            <p className="text-cream/60 max-w-xl mx-auto">
              Our premium lotus seeds are available across major e-commerce destinations. 
              Click below to shop from your preferred store.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {platforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col items-center gap-3 text-cream/50 transition-all duration-300 ${platform.color} group`}
              >
                <div className="w-16 h-16 rounded-2xl border border-gold/10 bg-black/50 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/5 transition-all">
                  {platform.icon}
                </div>
                <span className="text-sm tracking-[0.2em] uppercase font-medium">{platform.name}</span>
              </motion.a>
            ))}
          </div>
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
      <ShoppingPlatformsSection />
    </main>
  );
}
