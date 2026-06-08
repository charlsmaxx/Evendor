"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 120, height: 56, maxH: "max-h-12" },
  md: { width: 140, height: 64, maxH: "max-h-14" },
  lg: { width: 160, height: 72, maxH: "max-h-16" },
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
          alt="Evendor — Plan. Book. Celebrate."
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
