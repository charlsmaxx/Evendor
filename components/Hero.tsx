"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WaitlistSocialProof } from "@/components/WaitlistSocialProof";
import { HERO_IMAGES } from "@/lib/constants";
import { defaultTransition, staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-6 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Launching soon
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-heading text-3xl font-semibold leading-[1.15] text-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              Find. Compare. Book{" "}
              <span className="text-accent">&</span>{" "}
              <br />
              Make Every Event <br />{" "}
              <span className="text-accent">Unforgettable.</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-4 font-heading text-xl text-accent sm:text-2xl"
            >
              Nigeria&apos;s Marketplace for{" "}
              <span className="text-foreground">
                Event Vendors and Event Halls.
              </span>
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              Find trusted photographers, decorators, caterers, makeup artists,
              rental services, DJs, MCs, and event halls—all in one place.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="#waitlist" size="lg">
                Join Waitlist
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#for-vendors" variant="secondary" size="lg">
                Become A Vendor
              </Button>
            </motion.div>

            <motion.div variants={staggerItem}>
              <WaitlistSocialProof />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="relative mt-4 lg:mt-0"
          >
            <div className="grid min-h-[220px] grid-cols-4 grid-rows-2 gap-2 sm:min-h-[300px] sm:gap-3 lg:min-h-[360px]">
              {HERO_IMAGES.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, ...defaultTransition }}
                  className={`relative overflow-hidden rounded-2xl shadow-lg shadow-accent/10 ${img.className}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 400px"
                    className="object-cover"
                    priority={i < 2}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
