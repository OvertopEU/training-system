"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type TrainerPlanCheckoutCopy = {
  button: string;
  loading: string;
  error: string;
};

type TrainerLang = "en" | "bg" | "de" | "fr" | "es";

export function TrainerPlanCheckoutButton({ copy, lang }: { copy: TrainerPlanCheckoutCopy; lang: TrainerLang }) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function startCheckout() {
    setIsLoading(true);
    setMessage(copy.loading);

    try {
      const response = await fetch("/api/trainer/nutrition-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang })
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Checkout failed");
      }

      window.location.href = data.url;
    } catch {
      setMessage(copy.error);
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={startCheckout}
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-200 px-6 py-3 text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isLoading ? copy.loading : copy.button}
        <ArrowRight size={16} />
      </button>
      {message ? <p className="mt-3 text-sm text-white/60">{message}</p> : null}
    </div>
  );
}
