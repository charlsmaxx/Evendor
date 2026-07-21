import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyEvendor } from "@/components/WhyEvendor";
import { TrustSignals } from "@/components/TrustSignals";
import { VendorCategories } from "@/components/VendorCategories";
import { HowItWorks } from "@/components/HowItWorks";
import { ForVendors } from "@/components/ForVendors";
import { ForHallOwners } from "@/components/ForHallOwners";
import { FAQ } from "@/components/FAQ";
import { ReferralProgram } from "@/components/ReferralProgram";
import { Waitlist } from "@/components/Waitlist";
import { PreFooterVideo } from "@/components/PreFooterVideo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyEvendor />
        <TrustSignals />
        <VendorCategories />
        <HowItWorks />
        <ForVendors />
        <ForHallOwners />
        <FAQ />
        <ReferralProgram />
        <Waitlist />
        <PreFooterVideo />
      </main>
      <Footer />
    </>
  );
}
