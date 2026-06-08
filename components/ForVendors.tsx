"use client";

import { motion } from "framer-motion";
import { TrendingUp, MessageSquare, CalendarCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewportOnce, defaultTransition } from "@/lib/animations";

const benefits = [
  { icon: TrendingUp, text: "More visibility" },
  { icon: MessageSquare, text: "More inquiries" },
  { icon: CalendarCheck, text: "More bookings" },
  { icon: Globe, text: "Professional online presence" },
];

export function ForVendors() {
  return (
    <section id="for-vendors" className="py-16 sm:py-24">
      <div className="section-container">
        <div className="overflow-hidden rounded-3xl border border-accent/10 bg-card shadow-xl shadow-accent/5">
          <div className="grid lg:grid-cols-2">
            <motion.div
              className="gradient-accent p-8 text-white sm:p-12 lg:p-14"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={defaultTransition}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                For Vendors
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">
                Grow Your Event Business
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/90">
                Join Nigeria&apos;s marketplace built for event professionals.
                Get discovered by planners actively looking for your services.
              </p>
              <div className="mt-8">
                <Button
                  href="#waitlist"
                  variant="secondary"
                  size="lg"
                  className="!bg-white !text-accent hover:!bg-white/95"
                >
                  Join As Vendor
                </Button>
              </div>
            </motion.div>

            <motion.ul
              className="grid gap-4 p-8 sm:grid-cols-2 sm:p-12 lg:p-14"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={defaultTransition}
            >
              {benefits.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-4 rounded-2xl border border-accent/8 bg-background/50 p-5"
                >
                  <div className="rounded-xl bg-accent/10 p-2.5 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
