"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/animations";

const VIDEO_SRC = "/videos/hero-mobile.mp4";
const VIDEO_END_SECONDS = 180;

export function PreFooterVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const clampPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.currentTime < VIDEO_END_SECONDS) return;

    video.currentTime = VIDEO_END_SECONDS;
    video.pause();
  }, []);

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Moments that matter"
          title="Every celebration tells a story."
          description="Watch a glimpse of the unforgettable events Evendor helps you plan."
        />

        <motion.div
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-accent/15 bg-card shadow-lg shadow-accent/10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <video
            ref={videoRef}
            className="aspect-video w-full bg-black object-cover"
            src={VIDEO_SRC}
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            onTimeUpdate={clampPlayback}
            onSeeking={clampPlayback}
          />
        </motion.div>
      </div>
    </section>
  );
}
