export const REFERRAL_TIERS = [
  {
    referrals: 1,
    title: "Founding Member",
    reward: "Early access badge and first pick when we launch in your city.",
  },
  {
    referrals: 3,
    title: "Community Builder",
    reward: "Priority booking credits and exclusive launch-day perks.",
  },
  {
    referrals: 5,
    title: "Evendor Ambassador",
    reward: "Surprise rewards, VIP support, and the best launch offers we offer.",
  },
] as const;

export const TRUST_SIGNALS = [
  {
    title: "Vetted vendors only",
    description:
      "We check every professional before they join—identity verification, portfolio review, and track record.",
  },
  {
    title: "Protected payments with escrow",
    description:
      "Your money is held securely until services are delivered. Book with confidence, not guesswork.",
  },
] as const;

export const EARLY_BIRD_VENDOR = {
  headline: "Early birds get the best deals",
  description:
    "Vendors who join the waitlist now lock in exclusive launch offers—priority placement, and bonus visibility.",
} as const;

export const EARLY_BIRD_HALL = {
  headline: "Early birds get the best deals",
  description:
    "Event hall owners on the waitlist today secure priority listing, and featured placement in search results.",
} as const;

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

export const VENDOR_WAITLIST_CATEGORIES = [
  "Event Planners",
  "Venue Owners",
  "Caterers",
  "Decorators & Stylists",
  "Bakers & Cake Designers",
  "Photographers",
  "Videographers",
  "Makeup Artists",
  "Gele & Bridal Artists",
  "Fashion Designers",
  "MCs / Hosts",
  "DJ / Musicians",
  "Florists",
  "Lighting & Sound Providers",
  "Rental Equipment Providers",
  "Bridals",
  "Transportation Providers",
  "Security Services",
  "Bar & Cocktail Services",
  "Waiters / Ushers",
  "Event Rentals (Chairs, Tables, Tents)",
  "Printing & Branding Services",
  "Gift & Souvenir Vendors",
  "Catering (Small Chops, Snacks)",
  "Balloons & Backdrop Designers",
] as const;

export type VendorWaitlistCategory = (typeof VENDOR_WAITLIST_CATEGORIES)[number];

export function formatVendorRole(category: string) {
  return `(${category}) Vendor`;
}

export function parseVendorCategory(role: string) {
  const match = role.match(/^\((.+)\) Vendor$/);
  return match?.[1] ?? null;
}

export function isVendorRole(role: string) {
  return parseVendorCategory(role) !== null;
}

export function getRoleLabel(role: string) {
  const category = parseVendorCategory(role);
  if (category) {
    return formatVendorRole(category);
  }
  return role;
}

export function isValidWaitlistRole(role: string) {
  if (role === "Vendor") {
    return false;
  }

  if (WAITLIST_ROLES.includes(role as WaitlistRole)) {
    return true;
  }

  const category = parseVendorCategory(role);
  return (
    category !== null &&
    VENDOR_WAITLIST_CATEGORIES.includes(category as VendorWaitlistCategory)
  );
}

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

export const SOCIAL = {
  facebook: {
    label: "Facebook",
    handle: "Evendor",
    url: "https://www.facebook.com/profile.php?id=61590498944742",
  },
  instagram: {
    label: "Instagram",
    handle: "@evendors.ng",
    url: "https://www.instagram.com/evendors.ng",
  },
  youtube: {
    label: "YouTube",
    handle: "@Evendor-n2d",
    url: "https://www.youtube.com/@Evendor-n2d",
  },
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
  {
    question: "How does the referral program work?",
    answer:
      "After you join the waitlist, you get a personal invite link. Share it with friends, family, or clients—everyone who signs up through your link counts toward your tier. The more people you bring, the bigger your launch rewards.",
  },
  {
    question: "What early bird benefits do vendors and hall owners get?",
    answer:
      "Early birds on the waitlist lock in exclusive launch offers—reduced fees, priority placement in search, and bonus visibility. These perks are only available before we go live, so joining now is the smartest move.",
  },
  {
    question: "How does escrow protect my payment?",
    answer:
      "When Evendor launches, payments will be held in escrow until your vendor or venue delivers as agreed. That means your money is protected—you pay with confidence, not fear of losing a deposit to an unverified contact.",
  },
] as const;

export const VENDOR_CATEGORIES = [
  {
    name: "Photographers",
    slug: "photographers",
    image: "/images/photographers-vendor.png",
  },
  {
    name: "Bridals",
    slug: "bridals",
    image: "/images/bridals-vendor.jpg",
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
