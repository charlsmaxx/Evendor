"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { TRUST_SIGNALS } from "@/lib/constants";
import { fadeUp, viewportOnce, defaultTransition } from "@/lib/animations";

const icons = [BadgeCheck, ShieldCheck];

export function TrustSignals() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="section-container">
        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
        >
          {TRUST_SIGNALS.map((signal, index) => {
            const Icon = icons[index] ?? BadgeCheck;
            return (
              <article
                key={signal.title}
                className="flex gap-4 rounded-2xl border border-accent/10 bg-card p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {signal.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {signal.description}
                  </p>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
