"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialFollow } from "@/components/SocialFollow";
import { fadeUp, viewportOnce } from "@/lib/animations";
export function ReferralProgram() {
  return (
    <section id="referral" className="py-16 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Referral rewards"
          title="Invite friends. Unlock launch perks."
          description="Everyone on the waitlist gets a personal invite link. The more people you bring, the bigger your rewards when Evendor goes live."
        />

        <motion.div
          className="mx-auto max-w-3xl rounded-2xl border border-accent/15 bg-card px-6 py-5 text-center shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="font-heading text-lg font-medium text-foreground">
            Join the waitlist first—your unique invite link appears instantly.
          </p>
          <p className="mt-2 text-sm text-muted">
            Share with event planners, vendors, or hall owners and help grow the
            Evendor community before launch.
          </p>
        </motion.div>

        <SocialFollow
          align="center"
          className="mx-auto mt-10 max-w-xl"
          description="Follow Evendor on Facebook, Instagram, and YouTube for launch news, vendor spotlights, and community updates."
        />
      </div>
    </section>
  );
}
