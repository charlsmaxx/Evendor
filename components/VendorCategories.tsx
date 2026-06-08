"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Flower2,
  UtensilsCrossed,
  Sparkles,
  Music2,
  Mic2,
  Building2,
  Package,
  Cake,
  CalendarHeart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VENDOR_CATEGORIES } from "@/lib/constants";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

const categoryIcons: Record<string, LucideIcon> = {
  Photographers: Camera,
  Videographers: Video,
  Decorators: Flower2,
  Caterers: UtensilsCrossed,
  "Makeup Artists": Sparkles,
  DJs: Music2,
  MCs: Mic2,
  "Event Halls": Building2,
  "Rental Services": Package,
  Bakers: Cake,
  "Event Planners": CalendarHeart,
};

export function VendorCategories() {
  return (
    <section id="categories" className="py-16 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Categories"
          title="Featured vendor categories"
          description="From photographers to event halls—discover every service you need for your next celebration."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {VENDOR_CATEGORIES.map((category) => {
            const Icon = categoryIcons[category.name] ?? Package;
            return (
              <motion.article
                key={category.slug}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-md transition-shadow hover:shadow-xl hover:shadow-accent/15"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-accent/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-card/95 px-3 py-1.5 shadow-sm">
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-foreground">
                      {category.name}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
