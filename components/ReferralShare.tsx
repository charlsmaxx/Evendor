"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SocialFollow } from "@/components/SocialFollow";
import { getReferralLink } from "@/lib/referral";
interface ReferralShareProps {
  referralCode: string;
  name?: string;
}

export function ReferralShare({ referralCode, name }: ReferralShareProps) {
  const [copied, setCopied] = useState(false);
  const referralLink = getReferralLink(referralCode);

  const shareMessage = encodeURIComponent(
    `${name ? `Hey, it's ${name}. ` : ""}I'm on the Evendor waitlist—Nigeria's marketplace for event vendors and halls. Join with my link and we both unlock launch perks: ${referralLink}`
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="font-heading text-xl font-semibold text-foreground">
          {"You're on the list!"}
        </p>
        <p className="mt-2 text-muted">
          Now invite others and unlock special benefits when we launch.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/15 bg-background/60 p-4">
        <p className="mb-2 text-sm font-medium text-foreground">
          Your personal invite link
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            readOnly
            value={referralLink}
            className="min-w-0 flex-1 rounded-xl border border-accent/15 bg-card px-4 py-2.5 text-sm text-foreground"
          />
          <Button
            type="button"
            variant="outline"
            onClick={handleCopy}
            className="shrink-0"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy link
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <a
          href={`https://wa.me/?text=${shareMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full gradient-accent px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30"
        >
          <MessageCircle className="h-4 w-4" />
          Share on WhatsApp
        </a>
      </div>

      <SocialFollow        description="Follow us on Facebook, Instagram, and YouTube so you never miss launch news and exclusive updates."
      />
    </div>
  );
}
