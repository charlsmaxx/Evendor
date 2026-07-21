const REFERRAL_STORAGE_KEY = "evendor_ref";
const REFERRAL_CODE_KEY = "evendor_my_referral";

export function generateReferralCode(email: string): string {
  const normalized = email.trim().toLowerCase();
  const prefix =
    normalized.split("@")[0]?.replace(/[^a-z0-9]/g, "").slice(0, 5) || "ev";
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    hash = (hash << 5) - hash + normalized.charCodeAt(i);
    hash |= 0;
  }
  return `${prefix}${Math.abs(hash).toString(36).slice(0, 5)}`;
}

export function getReferralLink(code: string): string {
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_SITE_URL ?? "";
  return `${origin}?ref=${code}`;
}

export function captureReferralFromUrl(): string | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("ref")?.trim().toLowerCase();
  if (ref) {
    sessionStorage.setItem(REFERRAL_STORAGE_KEY, ref);
    return ref;
  }
  return sessionStorage.getItem(REFERRAL_STORAGE_KEY);
}

export function getStoredReferral(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(REFERRAL_STORAGE_KEY);
}

export function saveMyReferralCode(email: string): string {
  const code = generateReferralCode(email);
  localStorage.setItem(REFERRAL_CODE_KEY, code);
  return code;
}

export function getMyReferralCode(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(REFERRAL_CODE_KEY);
}
