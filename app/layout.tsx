import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evendor | Nigeria's Marketplace for Event Vendors and Event Halls",
  description:
    "Find trusted event vendors, event halls, makeup artists, decorators, caterers, DJs, MCs and rental services in one place.",
  keywords: [
    "event vendors Nigeria",
    "event halls Nigeria",
    "wedding vendors",
    "event marketplace",
    "Evendor",
  ],
  openGraph: {
    title: "Evendor | Nigeria's Marketplace for Event Vendors and Event Halls",
    description:
      "Find trusted event vendors, event halls, makeup artists, decorators, caterers, DJs, MCs and rental services in one place.",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evendor | Nigeria's Marketplace for Event Vendors and Event Halls",
    description:
      "Find trusted event vendors, event halls, makeup artists, decorators, caterers, DJs, MCs and rental services in one place.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
