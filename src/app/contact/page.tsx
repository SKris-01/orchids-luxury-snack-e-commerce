"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  Package,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (888) LUXE-000",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "concierge@luxe.com",
    description: "Response within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Fifth Avenue, New York",
    description: "NY 10022, USA",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 10am-8pm",
    description: "Sun: 12pm-6pm",
  },
];

const faqs = [
  {
    question: "What are your shipping options?",
    answer:
      "We offer standard shipping (5-7 business days), express shipping (2-3 business days), and overnight delivery for orders placed before 2pm EST. All luxury items are shipped with temperature-controlled packaging to ensure freshness.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 50 countries worldwide. International shipping times vary by destination, typically 7-14 business days. Some perishable items may have restrictions based on destination.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Due to the perishable nature of our products, we cannot accept returns once items have been delivered. However, if you receive damaged or incorrect items, please contact us within 24 hours for a full replacement or refund.",
  },
  {
    question: "How do you ensure product freshness?",
    answer:
      "All products are stored in temperature-controlled facilities and shipped in insulated packaging with ice packs or dry ice as needed. We guarantee freshness upon arrival.",
  },
  {
    question: "Can I customize gift orders?",
    answer:
      "Absolutely! We offer complimentary gift wrapping, personalized message cards, and custom gift boxes. Contact our concierge team for bespoke arrangements.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll respond within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <MessageSquare className="h-12 w-12 text-gold mx-auto" />
            <p className="text-gold/60 uppercase tracking-[0.3em] text-sm">Get in Touch</p>
            <h1 className="text-5xl md:text-6xl font-serif text-cream">
              Contact <span className="gold-text-gradient">Us</span>
            </h1>
            <p className="text-xl text-cream/60 max-w-2xl mx-auto">
              Our dedicated concierge team is here to assist you with any inquiries,
              from product recommendations to bespoke orders.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-charcoal/50 border border-gold/10 text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-gold/5 mb-4">
                  <info.icon className="h-6 w-6 text-gold" />
                </div>
                <p className="text-cream font-serif mb-1">{info.value}</p>
                <p className="text-cream/50 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif text-cream mb-6">
                Send Us a <span className="gold-text-gradient">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-cream/80">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-charcoal border-gold/20 text-cream placeholder:text-cream/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-cream/80">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="bg-charcoal border-gold/20 text-cream placeholder:text-cream/40"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-cream/80">
                    Subject
                  </Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger className="bg-charcoal border-gold/20 text-cream">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent className="bg-charcoal border-gold/20">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="order">Order Status</SelectItem>
                      <SelectItem value="product">Product Question</SelectItem>
                      <SelectItem value="corporate">Corporate Gifts</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-cream/80">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    required
                    rows={6}
                    className="bg-charcoal border-gold/20 text-cream placeholder:text-cream/40 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-gold text-black hover:bg-gold/90 py-6">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-serif text-cream mb-6">
                Frequently Asked <span className="gold-text-gradient">Questions</span>
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-charcoal/50 border border-gold/10 rounded-xl px-6 data-[state=open]:border-gold/30"
                  >
                    <AccordionTrigger className="text-cream hover:text-gold py-4 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-cream/60 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-gold/10 to-burgundy/10 border border-gold/20">
                <HelpCircle className="h-8 w-8 text-gold mb-4" />
                <h3 className="text-lg font-serif text-cream mb-2">Need More Help?</h3>
                <p className="text-cream/60 text-sm mb-4">
                  Our concierge team is available 24/7 for urgent inquiries.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-gold/30 text-gold hover:bg-gold/10">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </Button>
                  <Button variant="outline" size="sm" className="border-gold/30 text-gold hover:bg-gold/10">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Live Chat
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-gold/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841379042847!2d-73.97418542392156!3d40.75774913540592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fe77c0b0c1%3A0x8c6e1f79c9d6f93a!2sFifth%20Avenue%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
