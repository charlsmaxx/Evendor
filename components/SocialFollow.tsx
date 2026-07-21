import { Facebook, Instagram, Youtube } from "lucide-react";
import { SOCIAL } from "@/lib/constants";

interface SocialFollowProps {
  className?: string;
  description?: string;
  align?: "left" | "center";
}

const socialLinks = [
  { key: "facebook" as const, icon: Facebook },
  { key: "instagram" as const, icon: Instagram },
  { key: "youtube" as const, icon: Youtube },
];

export function SocialFollow({
  className = "",
  description = "Follow us and subscribe on YouTube for launch updates, tips, and behind-the-scenes from Nigeria's event marketplace.",
  align = "left",
}: SocialFollowProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const buttonsClass =
    align === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`${alignClass} ${className}`}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
        Follow us
      </h3>
      <p
        className={`mt-2 text-sm text-muted ${align === "center" ? "mx-auto max-w-md" : "max-w-sm"}`}
      >
        {description}
      </p>
      <div className={`mt-4 flex flex-wrap gap-3 ${buttonsClass}`}>
        {socialLinks.map(({ key, icon: Icon }) => {
          const social = SOCIAL[key];
          return (
            <a
              key={key}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5 hover:text-accent"
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{social.label}</span>
              <span className="text-muted">· {social.handle}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
