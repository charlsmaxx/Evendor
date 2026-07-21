"use client";

import Image from "next/image";
import { motion, useInView, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AVATARS = [
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&h=120&fit=crop&q=80",
    alt: "Event planner on Evendor waitlist",
  },
  {
    src: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=120&h=120&fit=crop&q=80",
    alt: "Vendor on Evendor waitlist",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&q=80",
    alt: "Event hall owner on Evendor waitlist",
  },
] as const;

export function WaitlistSocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setCount(Math.round(latest));
    });
    return unsubscribe;
  }, [spring]);

  useEffect(() => {
    if (isInView) {
      spring.set(2000);
    }
  }, [isInView, spring]);

  return (
    <motion.div
      ref={ref}
      className="mt-8 flex items-center gap-3"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex items-center">
        {AVATARS.map((avatar, index) => (
          <motion.div
            key={avatar.src}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
            className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-card shadow-sm sm:h-11 sm:w-11"
            style={{ marginLeft: index === 0 ? 0 : "-12px", zIndex: AVATARS.length - index }}
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              fill
              sizes="44px"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
      <p className="text-sm font-medium text-accent sm:text-base">
        <span className="font-semibold text-foreground">{count.toLocaleString()}+</span>{" "}
        on waitlist
      </p>
    </motion.div>
  );
}
