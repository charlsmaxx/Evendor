"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WAITLIST_ROLE_OPTIONS, type WaitlistRole } from "@/lib/constants";
import { fadeUp, viewportOnce, defaultTransition } from "@/lib/animations";

interface WaitlistFormData {
  name: string;
  email: string;
  phone: string;
  role: WaitlistRole;
}

export function Waitlist() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    defaultValues: { role: "Customer (Waiting to Book)" },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to submit. Please try again."
      );
    }
  };

  return (
    <section id="waitlist" className="py-16 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Early access"
          title="Join the Evendor waitlist"
          description={
            "Be the first to know when we launch. Whether you're waiting to book, listing as a vendor, or own an event hall."
          }
        />

        <motion.div
          className="mx-auto max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-accent/10 bg-card p-6 shadow-xl shadow-accent/5 sm:p-8"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <p className="font-heading text-xl font-semibold text-foreground">
                  You&apos;re on the list!
                </p>
                <p className="text-muted">
                  Thank you for joining. We&apos;ll be in touch before launch.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-4"
                  onClick={() => setStatus("idle")}
                >
                  Submit another
                </Button>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    className="w-full rounded-xl border border-accent/15 bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Your full name"
                    {...register("name", { required: "Full name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-accent">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-xl border border-accent/15 bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="you@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-accent">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-accent/15 bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="+234 800 000 0000"
                    {...register("phone", { required: "Phone number is required" })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-accent">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <p className="mb-1.5 block text-sm font-medium text-foreground">
                    Role
                  </p>
                  <Controller
                    name="role"
                    control={control}
                    rules={{ required: "Please select a role" }}
                    render={({ field }) => (
                      <div className="space-y-2">
                        {WAITLIST_ROLE_OPTIONS.map((option) => {
                          const isSelected = field.value === option.value;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => field.onChange(option.value)}
                              className={`flex w-full items-center gap-2 rounded-xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                                isSelected
                                  ? "border-accent bg-accent/5"
                                  : "border-accent/15 bg-background hover:border-accent/30"
                              }`}
                            >
                              <span
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                                  isSelected
                                    ? "border-accent bg-accent"
                                    : "border-accent/30"
                                }`}
                              >
                                {isSelected && (
                                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                )}
                              </span>
                              <span className="font-medium text-foreground">
                                {option.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                  {errors.role && (
                    <p className="mt-1 text-sm text-accent">{errors.role.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl bg-accent/10 px-4 py-3 text-sm text-accent">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
