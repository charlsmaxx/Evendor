"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 210, height: 84, maxH: "max-h-[84px]" },
  md: { width: 240, height: 104, maxH: "max-h-20" },
  lg: { width: 280, height: 120, maxH: "max-h-24" },
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  const { width, height, maxH } = sizes[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Evendor home"
    >
      {!imgError ? (
        <Image
          src="/evendor-logo.png"
          alt="Evendor — Discover. Book. Celebrate."
          width={width}
          height={height}
          className={`h-auto w-auto object-contain ${maxH}`}
          priority
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="font-heading text-xl font-semibold tracking-tight text-accent sm:text-2xl">
          Evendor
        </span>
      )}
    </Link>
  );
}
