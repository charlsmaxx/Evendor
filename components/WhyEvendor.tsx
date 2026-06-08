"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  ShieldAlert,
  Scale,
  Star,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

const problems = [
  {
    icon: MessageCircle,
    title: "Endless WhatsApp searches",
    description:
      "Scrolling through chats and forwarded contacts with no central place to compare options.",
  },
  {
    icon: ShieldAlert,
    title: "Unverified vendors",
    description:
      "Hard to know who is reliable before you pay a deposit or show up on event day.",
  },
  {
    icon: Scale,
    title: "Manual price comparison",
    description:
      "Hours spent asking for quotes one vendor at a time instead of comparing side by side.",
  },
  {
    icon: Star,
    title: "No trusted reviews",
    description:
      "Word of mouth only—no structured ratings or verified feedback from real events.",
  },
];

export function WhyEvendor() {
  return (
    <section id="why-evendor" className="pb-16 pt-6 sm:pb-24 sm:pt-10">
      <div className="section-container">
        <SectionHeading
          eyebrow="Why Evendor"
          title="Event planning is broken."
          description="Millions celebrate across Africa — yet planning remains fragmented and stressful.
"
          className="mb-8 md:mb-16"
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {problems.map((item) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-accent/10 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="gradient-accent-soft mt-12 flex flex-col items-center gap-4 rounded-3xl border border-accent/15 px-6 py-10 text-center sm:flex-row sm:justify-center sm:gap-6 sm:px-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <CheckCircle2 className="h-10 w-10 shrink-0 text-accent" />
          <p className="max-w-2xl font-heading text-xl font-medium leading-snug text-foreground sm:text-2xl">
            Evendor brings event vendors and event halls together in one
            trusted marketplace.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
