import { NextResponse } from "next/server";
import { WAITLIST_ROLES } from "@/lib/constants";

interface WaitlistPayload {
  name: string;
  email: string;
  phone: string;
  role: string;
}

function isValidPayload(body: unknown): body is WaitlistPayload {
  if (!body || typeof body !== "object") return false;
  const data = body as Record<string, unknown>;
  return (
    typeof data.name === "string" &&
    data.name.trim().length > 0 &&
    typeof data.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data.phone === "string" &&
    data.phone.trim().length > 0 &&
    typeof data.role === "string" &&
    WAITLIST_ROLES.includes(data.role as (typeof WAITLIST_ROLES)[number])
  );
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!isValidPayload(body)) {
      return NextResponse.json(
        { error: "Invalid form data. Please check all fields." },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not configured");
      return NextResponse.json(
        { error: "Waitlist is temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone.trim(),
        role: body.role,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error ?? "Submission failed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist. Please try again." },
      { status: 500 }
    );
  }
}
