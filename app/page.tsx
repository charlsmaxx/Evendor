import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyEvendor } from "@/components/WhyEvendor";
import { VendorCategories } from "@/components/VendorCategories";
import { HowItWorks } from "@/components/HowItWorks";
import { ForVendors } from "@/components/ForVendors";
import { ForHallOwners } from "@/components/ForHallOwners";
import { FAQ } from "@/components/FAQ";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyEvendor />
        <VendorCategories />
        <HowItWorks />
        <ForVendors />
        <ForHallOwners />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
