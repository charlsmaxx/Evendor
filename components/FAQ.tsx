"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions? We've got answers."
          description="Everything you need to know about joining Evendor before launch."
        />
        <div className="mx-auto max-w-3xl">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
}
