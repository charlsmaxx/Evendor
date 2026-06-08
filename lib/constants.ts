export const NAV_LINKS = [
  { label: "Features", href: "#why-evendor" },
  { label: "Categories", href: "#categories" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
] as const;

export const WAITLIST_ROLES = [
  "Customer (Waiting to Book)",
  "Vendor",
  "Event Hall Owner",
] as const;

export type WaitlistRole = (typeof WAITLIST_ROLES)[number];

export const WAITLIST_ROLE_OPTIONS: {
  value: WaitlistRole;
  label: string;
}[] = [
  { value: "Customer (Waiting to Book)", label: "Customer (Waiting to Book)" },
  { value: "Vendor", label: "Vendor" },
  { value: "Event Hall Owner", label: "Event Hall Owner" },
];

export const CONTACT = {
  phone: "+2347066997479",
  whatsapp: "https://wa.me/2347066997479",
  address: [
    "6 Transfiguration Close",
    "By Methodist Church",
    "Off Aka Avenue",
    "Effurun, Delta State",
    "Nigeria",
  ],
} as const;

export const FAQ_ITEMS = [
  {
    question: "Is Evendor free?",
    answer:
      "Browsing and discovering vendors and event halls on Evendor will be free for event planners and customers. Vendors and venue owners may have listing options when we launch—details will be shared before go-live.",
  },
  {
    question: "Can vendors join?",
    answer:
      "Yes. Photographers, caterers, decorators, DJs, MCs, makeup artists, rental services, bakers, planners, and other event vendors can join the waitlist today and be among the first listed at launch.",
  },
  {
    question: "Can event halls join?",
    answer:
      "Absolutely. Event hall and venue owners can list their spaces to reach more customers, fill more dates, and receive direct inquiries through Evendor.",
  },
  {
    question: "When will Evendor launch?",
    answer:
      "We are preparing for launch across Nigeria. Join the waitlist to get early access updates and be notified as soon as Evendor goes live in your area.",
  },
  {
    question: "How are vendors verified?",
    answer:
      "Evendor is building a verification process that includes identity checks, portfolio review, and community feedback so you can book with confidence—not guesswork from random WhatsApp contacts.",
  },
  {
    question: "Will Evendor be available nationwide?",
    answer:
      "Yes. Our goal is nationwide coverage, starting with major cities and expanding based on vendor and venue sign-ups. Launching across Nigeria is core to our mission.",
  },
] as const;

export const VENDOR_CATEGORIES = [
  {
    name: "Photographers",
    slug: "photographers",
    image: "/images/photographers-vendor.png",
  },
  {
    name: "Videographers",
    slug: "videographers",
    image: "/images/videographers-vendor.png",
  },
  {
    name: "Decorators",
    slug: "decorators",
    image: "/images/decorators-vendor.png",
  },
  {
    name: "Caterers",
    slug: "caterers",
    image: "/images/caterers-vendor.png",
  },
  {
    name: "Makeup Artists",
    slug: "makeup-artists",
    image: "/images/makeup-artists-vendor.png",
  },
  {
    name: "DJs",
    slug: "djs",
    image: "/images/dj-vendor.png",
  },
  {
    name: "MCs",
    slug: "mcs",
    image: "/images/mcs-vendor.png",
  },
  {
    name: "Event Halls",
    slug: "event-halls",
    image: "/images/event-halls-vendor.png",
  },
  {
    name: "Rental Services",
    slug: "rental-services",
    image: "/images/rental-services-vendor.png",
  },
  {
    name: "Bakers",
    slug: "bakers",
    image: "/images/bakers-vendor.png",
  },
  {
    name: "Event Planners",
    slug: "event-planners",
    image: "/images/event-planners-vendor.png",
  },
] as const;

export const HERO_IMAGES = [
  {
    src: "/images/event-halls-vendor.png",
    alt: "Elegant event hall interior",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/photographers-vendor.png",
    alt: "Professional event photographer",
    className: "col-span-1",
  },
  {
    src: "/images/caterers-vendor.png",
    alt: "Professional catering setup",
    className: "col-span-1",
  },
  {
    src: "/images/mcs-vendor.png",
    alt: "Professional MC at an event",
    className: "col-span-1",
  },
  {
    src: "/images/makeup-artists-vendor.png",
    alt: "Makeup artist at work",
    className: "col-span-1",
  },
] as const;
