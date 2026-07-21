"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { VENDOR_WAITLIST_CATEGORIES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface VendorCategoryModalProps {
  open: boolean;
  onClose: () => void;
  mode?: "select" | "browse";
  onSelect?: (category: string) => void;
  selectedCategory?: string;
}

export function VendorCategoryModal({
  open,
  onClose,
  mode = "select",
  onSelect,
  selectedCategory,
}: VendorCategoryModalProps) {
  const [query, setQuery] = useState("");
  const isBrowseMode = mode === "browse";

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const filteredCategories = VENDOR_WAITLIST_CATEGORIES.filter((category) =>
    category.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="vendor-category-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close vendor category modal"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-accent/10 bg-card shadow-2xl"
          >
            <div className="border-b border-accent/10 px-5 py-4 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2
                    id="vendor-category-title"
                    className="font-heading text-xl font-semibold text-foreground"
                  >
                    {isBrowseMode
                      ? "All vendor categories"
                      : "Select your vendor category"}
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    {isBrowseMode
                      ? "Browse every vendor type joining the Evendor marketplace."
                      : "Choose the category that best describes your business."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-2 text-muted transition hover:bg-accent/5 hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative mt-4">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search categories..."
                  className="w-full rounded-xl border border-accent/15 bg-background py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>

            <ul className="overflow-y-auto px-3 py-3 sm:px-4">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category, index) => {
                  const isSelected = selectedCategory === category;

                  if (isBrowseMode) {
                    return (
                      <li
                        key={category}
                        className="mb-2 flex items-start gap-3 rounded-xl border border-accent/10 bg-background px-4 py-3 text-sm"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                          {index + 1}
                        </span>
                        <span className="font-medium text-foreground">
                          {category}
                        </span>
                      </li>
                    );
                  }

                  return (
                    <li key={category}>
                      <button
                        type="button"
                        onClick={() => onSelect?.(category)}
                        className={`mb-2 flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition ${
                          isSelected
                            ? "border-accent bg-accent/5 text-foreground"
                            : "border-accent/10 bg-background hover:border-accent/30"
                        }`}
                      >
                        <span className="font-medium">{category}</span>
                        {isSelected && (
                          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                            Selected
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })
              ) : (
                <li className="px-2 py-8 text-center text-sm text-muted">
                  No categories match your search.
                </li>
              )}
            </ul>

            {isBrowseMode && (
              <div className="border-t border-accent/10 px-5 py-4 sm:px-6">
                <Button href="#waitlist" className="w-full" onClick={onClose}>
                  Join the waitlist
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
