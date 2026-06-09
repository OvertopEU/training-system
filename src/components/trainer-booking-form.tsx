"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";

type TrainerFormCopy = {
  name: string;
  namePlaceholder: string;
  contact: string;
  contactPlaceholder: string;
  service: string;
  servicePlaceholder: string;
  serviceOptions: string[];
  day: string;
  dayPlaceholder: string;
  goal: string;
  goalPlaceholder: string;
  submit: string;
};

type TrainerLang = "en" | "bg" | "uk" | "de" | "fr" | "es";

const messages = {
  bg: {
    starting: "Подготвям плащане...",
    failed: "Не успях да стартирам плащането. Опитай пак.",
    invalid: "Попълни всички задължителни полета."
  },
  en: {
    starting: "Preparing payment...",
    failed: "Could not start payment. Please try again.",
    invalid: "Please complete all required fields."
  },
  uk: {
    starting: "Підготовка оплати...",
    failed: "Не вдалося розпочати оплату. Спробуйте ще раз.",
    invalid: "Заповніть усі обов'язкові поля."
  },
  de: {
    starting: "Zahlung wird vorbereitet...",
    failed: "Zahlung konnte nicht gestartet werden. Bitte versuche es erneut.",
    invalid: "Bitte fülle alle Pflichtfelder aus."
  },
  fr: {
    starting: "Preparation du paiement...",
    failed: "Impossible de lancer le paiement. Reessaie.",
    invalid: "Merci de remplir tous les champs obligatoires."
  },
  es: {
    starting: "Preparando el pago...",
    failed: "No se pudo iniciar el pago. Intentalo de nuevo.",
    invalid: "Completa todos los campos obligatorios."
  }
};

export function TrainerBookingForm({ copy, lang }: { copy: TrainerFormCopy; lang: TrainerLang }) {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get("name")?.toString().trim() ?? "",
      contact: form.get("contact")?.toString().trim() ?? "",
      service: form.get("service")?.toString().trim() ?? "",
      day: form.get("day")?.toString().trim() ?? "",
      goal: form.get("goal")?.toString().trim() ?? "",
      lang
    };

    if (!payload.name || !payload.contact || !payload.service || !payload.day) {
      setMessage(messages[lang].invalid);
      return;
    }

    setIsSubmitting(true);
    setMessage(messages[lang].starting);

    let data: { url?: string; error?: string } = {};
    let response: Response;

    try {
      response = await fetch("/api/trainer/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      data = await response.json();
    } catch {
      setIsSubmitting(false);
      setMessage(messages[lang].failed);
      return;
    }

    if (!response.ok || !data.url) {
      setIsSubmitting(false);
      setMessage(data.error?.toString() ?? messages[lang].failed);
      return;
    }

    window.location.href = data.url;
  }

  return (
    <form onSubmit={submit} className="min-w-0 rounded-lg border border-white/10 bg-white/[.04] p-4 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/70">
          {copy.name}
          <input required className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-200" name="name" placeholder={copy.namePlaceholder} />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          {copy.contact}
          <input required className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-200" name="contact" placeholder={copy.contactPlaceholder} />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          {copy.service}
          <select required className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-200" name="service" defaultValue="">
            <option value="" disabled>{copy.servicePlaceholder}</option>
            {copy.serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          {copy.day}
          <input required className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-200" name="day" placeholder={copy.dayPlaceholder} />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm text-white/70">
        {copy.goal}
        <textarea className="min-h-28 rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-200" name="goal" placeholder={copy.goalPlaceholder} />
      </label>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button className="inline-flex w-full max-w-[18rem] items-center justify-center gap-2 rounded-full bg-emerald-200 px-4 py-3 text-sm font-medium text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto" type="submit" disabled={isSubmitting}>
          {copy.submit} <MessageSquare size={16} />
        </button>
        {message ? <p className="text-sm text-white/60">{message}</p> : null}
      </div>
    </form>
  );
}
