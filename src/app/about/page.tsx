"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, Award, Globe, Users, Heart, Leaf, Gem, History, Sparkles } from "lucide-react";

const milestones = [
  { year: "1985", title: "Roots in Mithila", description: "The Shriyans family began cultivating premium lotus seeds in Bihar's fertile wetlands." },
  { year: "2005", title: "The Golden Grain", description: "First local processing unit established to ensure artisanal quality control." },
  { year: "2015", title: "Gourmet Innovation", description: "Launched our first line of luxury roasted flavored makhana." },
  { year: "2020", title: "Global Recognition", description: "Awarded for excellence in sustainable snack innovation." },
  { year: "2026", title: "The Royal Era", description: "Launching Shriyans as the global benchmark for luxury lotus seeds." },
];

const values = [
  {
    icon: Crown,
    title: "Heritage Quality",
    description:
      "We source only the largest, whitest, and most premium 'Dhire' makhana, a grade reserved for royalty.",
  },
  {
    icon: Sparkles,
    title: "Artisanal Perfection",
    description:
      "Every seed is hand-sorted and slow-roasted in small batches to achieve the perfect, delicate crunch.",
  },
  {
    icon: Leaf,
    title: "Ethically Harvested",
    description:
      "Our sustainable farming practices protect the delicate ecosystem of Mithila's lotus ponds and support local harvesters.",
  },
  {
    icon: Heart,
    title: "Modern Gourmet",
    description:
      "We blend traditional techniques with global luxury flavors like Italian truffle and Belgian chocolate.",
  },
];

const team = [
  {
    name: "Rajesh Shriyans",
    role: "Founder & Master Roaster",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Meera Singh",
    role: "Head of Flavor Innovation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Anil Kumar",
    role: "Sustainable Farming Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Priya Das",
    role: "Quality Assurance Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1628102472305-6ec032f3c716?w=1920&q=80"
            alt="Lotus seed harvest"
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
            <p className="text-gold/60 uppercase tracking-[0.3em] text-sm">Est. 1985</p>
            <h1 className="text-5xl md:text-6xl font-serif text-cream">
              The Legacy of <span className="gold-text-gradient">Shriyans</span>
            </h1>
            <p className="text-xl text-cream/60 max-w-2xl mx-auto leading-relaxed">
              From the serene ponds of Mithila to the world&apos;s most sophisticated tables, 
              we bring you the purest expression of nature&apos;s most versatile superfood.
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
                    src="https://images.unsplash.com/photo-1621262451369-0260f8625907?w=800&q=80"
                    alt="Artisanal makhana roasting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-black">
                  <Image
                    src="https://images.unsplash.com/photo-1628102472305-6ec032f3c716?w=400&q=80"
                    alt="Premium lotus seeds"
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
                Nurturing the <span className="gold-text-gradient">Golden Grain</span>
              </h2>
              <p className="text-cream/70 leading-relaxed">
                Shriyans Lotus Seeds began in the heart of Bihar, where our family has cultivated 
                the finest fox nuts for generations. We realized that this humble superfood, 
                blessed by nature and steeped in tradition, deserved a place on the world stage.
              </p>
              <p className="text-cream/70 leading-relaxed">
                Our mission is to transform the snacking experience by combining the nutritional 
                powerhouse of makhana with the most exquisite global flavors. We believe that 
                luxury should be healthy, and tradition should be innovative.
              </p>
              <p className="text-cream/70 leading-relaxed">
                Today, Shriyans stands as a symbol of artisanal quality and royal taste, 
                connecting the hardworking farmers of Mithila with the global gourmet community.
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
              Roots of <span className="gold-text-gradient">Tradition</span>
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
              The Shriyans <span className="gold-text-gradient">Way</span>
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
              Guardians of the <span className="gold-text-gradient">Grain</span>
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
              { value: "40+", label: "Years of Heritage" },
              { value: "500+", label: "Farmer Families Supported" },
              { value: "100%", label: "Natural & Preservative Free" },
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
