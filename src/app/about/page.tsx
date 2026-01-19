"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, Award, Globe, Users, Heart, Leaf, Gem, History } from "lucide-react";

const milestones = [
  { year: "1892", title: "Founded in Paris", description: "Established as a small confectionery" },
  { year: "1924", title: "Royal Warrant", description: "Appointed to European royalty" },
  { year: "1956", title: "Global Expansion", description: "Opened boutiques worldwide" },
  { year: "1989", title: "Artisan Revival", description: "Returned to handcrafted traditions" },
  { year: "2024", title: "Digital Excellence", description: "Bringing luxury to your doorstep" },
];

const values = [
  {
    icon: Gem,
    title: "Uncompromising Quality",
    description:
      "Every product is meticulously sourced from the world's finest producers and undergoes rigorous quality control.",
  },
  {
    icon: Heart,
    title: "Passionate Craftsmanship",
    description:
      "Our artisans dedicate their lives to perfecting the art of gourmet delicacies, with techniques passed down through generations.",
  },
  {
    icon: Leaf,
    title: "Sustainable Luxury",
    description:
      "We partner with ethical producers who share our commitment to environmental responsibility and fair trade practices.",
  },
  {
    icon: Users,
    title: "Customer Excellence",
    description:
      "Every patron receives personalized service worthy of royalty, from selection to white-glove delivery.",
  },
];

const team = [
  {
    name: "Charles Beaumont",
    role: "Master Chocolatier",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Isabella Romano",
    role: "Head of Procurement",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Jean-Pierre Laurent",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sophie Chen",
    role: "Tea Sommelier",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Luxury interior"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Crown className="h-16 w-16 text-gold mx-auto" />
            <p className="text-gold/60 uppercase tracking-[0.3em] text-sm">Est. 1892</p>
            <h1 className="text-5xl md:text-6xl font-serif text-cream">
              The Art of <span className="gold-text-gradient">Luxury</span>
            </h1>
            <p className="text-xl text-cream/60 max-w-2xl mx-auto leading-relaxed">
              For over a century, LUXE has been the world&apos;s premier destination for 
              exceptional gourmet delicacies, serving royalty, celebrities, and connoisseurs alike.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80"
                    alt="Artisan crafting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-black">
                  <Image
                    src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&q=80"
                    alt="Chocolate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gold/60 uppercase tracking-[0.3em] text-sm">Our Story</p>
              <h2 className="text-4xl font-serif text-cream">
                A Legacy of <span className="gold-text-gradient">Excellence</span>
              </h2>
              <p className="text-cream/70 leading-relaxed">
                Founded in 1892 in the heart of Paris by master confectioner François Beaumont, 
                LUXE began as a small artisan shop catering to the discerning tastes of Parisian aristocracy.
              </p>
              <p className="text-cream/70 leading-relaxed">
                What started as a passion for perfection quickly grew into an internationally 
                renowned house of luxury delicacies. Our commitment to sourcing only the finest 
                ingredients from around the world has remained unchanged for over 130 years.
              </p>
              <p className="text-cream/70 leading-relaxed">
                Today, we continue the Beaumont family tradition, bringing the same dedication 
                to craftsmanship and excellence that has made LUXE synonymous with luxury.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold/60 uppercase tracking-[0.3em] text-sm mb-4">Our Journey</p>
            <h2 className="text-4xl font-serif text-cream">
              Through the <span className="gold-text-gradient">Years</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <p className="text-4xl font-serif text-gold mb-2">{milestone.year}</p>
                    <h3 className="text-xl font-serif text-cream mb-2">{milestone.title}</h3>
                    <p className="text-cream/60">{milestone.description}</p>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-gold border-4 border-black" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold/60 uppercase tracking-[0.3em] text-sm mb-4">Our Philosophy</p>
            <h2 className="text-4xl font-serif text-cream">
              What We <span className="gold-text-gradient">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-charcoal/50 border border-gold/10 hover:border-gold/30 transition-colors"
              >
                <div className="p-3 rounded-xl bg-gold/5 w-fit mb-4">
                  <value.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-serif text-cream mb-3">{value.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold/60 uppercase tracking-[0.3em] text-sm mb-4">Meet the Team</p>
            <h2 className="text-4xl font-serif text-cream">
              Our <span className="gold-text-gradient">Artisans</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-lg font-serif text-cream group-hover:text-gold transition-colors">
                  {member.name}
                </h3>
                <p className="text-cream/60 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "130+", label: "Years of Excellence" },
              { value: "50+", label: "Countries Served" },
              { value: "1M+", label: "Happy Customers" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-charcoal/50 border border-gold/10"
              >
                <p className="text-5xl font-serif text-gold mb-2">{stat.value}</p>
                <p className="text-cream/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
