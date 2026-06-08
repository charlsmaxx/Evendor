"use client";

import { motion } from "framer-motion";
import { Search, GitCompare, Link2, PartyPopper } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Search",
    description:
      "Browse vendors and event halls by category, location, and style—all in one marketplace.",
  },
  {
    step: 2,
    icon: GitCompare,
    title: "Compare",
    description:
      "Compare portfolios, services, and pricing without endless back-and-forth messages.",
  },
  {
    step: 3,
    icon: Link2,
    title: "Connect",
    description:
      "Reach out to verified vendors and venues directly when you are ready to book.",
  },
  {
    step: 4,
    icon: PartyPopper,
    title: "Celebrate",
    description:
      "Plan with confidence and focus on what matters—your unforgettable event.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="How it works"
          title="From search to celebration"
          description="Four simple steps to find the perfect vendors and venues for your event."
        />

        <motion.ol
          className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/25 to-transparent lg:block" />

          {steps.map((item, index) => (
            <motion.li
              key={item.title}
              variants={staggerItem}
              className="relative"
            >
              <article className="flex h-full flex-col rounded-2xl border border-accent/10 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-accent/10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full gradient-accent text-sm font-bold text-white">
                    {item.step}
                  </span>
                  {index < steps.length - 1 && (
                    <span className="hidden text-accent/30 lg:inline">→</span>
                  )}
                </div>
                <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
