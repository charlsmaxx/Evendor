"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EARLY_BIRD_HALL } from "@/lib/constants";
import { fadeUp, viewportOnce, defaultTransition } from "@/lib/animations";

const benefits = [
  {
    icon: Users,
    title: "Reach more customers",
    description: "Get in front of event planners searching for venues in your area.",
  },
  {
    icon: BarChart3,
    title: "Increase occupancy",
    description: "Fill open dates on your calendar with qualified inquiries.",
  },
  {
    icon: Mail,
    title: "Receive direct inquiries",
    description: "Connect with customers ready to book—without middlemen.",
  },
];

export function ForHallOwners() {
  return (
    <section id="for-halls" className="pb-16 sm:pb-24">
      <div className="section-container">
        <motion.div
          className="rounded-3xl border border-accent/10 gradient-accent-soft px-6 py-12 sm:px-12 sm:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              For Event Hall Owners
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Fill More Dates On Your Calendar
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              List your venue where planners are already looking—stop relying on
              word of mouth alone.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-accent/15 bg-card p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-heading text-lg font-semibold text-foreground">
                  {EARLY_BIRD_HALL.headline}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {EARLY_BIRD_HALL.description}
                </p>
              </div>
            </div>
          </div>

          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {benefits.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <Button href="#waitlist" size="lg">
              List Your Venue
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
