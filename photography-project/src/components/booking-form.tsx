"use client";

import { useState } from "react";
import type { AddOn, Package, PortfolioCategory } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "@/lib/validations";
import { money } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";

type FormData = z.infer<typeof bookingSchema>;

export function BookingForm({ categories, packages, addOns }: { categories: PortfolioCategory[]; packages: Package[]; addOns: AddOn[] }) {
  const [message, setMessage] = useState("");
  const form = useForm<FormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      categoryId: categories[0]?.id,
      packageId: packages[0]?.id,
      addOnIds: [],
      paymentOption: "DEPOSIT",
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      notes: ""
    }
  });

  async function submit(values: FormData) {
    setMessage("Creating booking...");
    const response = await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.error?.toString() ?? "Booking failed");
      return;
    }
    if (values.paymentOption !== "CASH") {
      const checkout = await fetch("/api/payments/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ bookingId: data.id }) });
      const payment = await checkout.json();
      if (payment.url) window.location.href = payment.url;
    } else {
      setMessage("Booking requested. You will receive confirmation by email.");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(submit)} className="grid gap-5 rounded-lg border border-gold-200/20 bg-black/45 p-5 shadow-gold md:grid-cols-2">
      <label className="text-sm text-white/70">
        Category
        <select {...form.register("categoryId")} className="mt-2 w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white">
          {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
        </select>
      </label>
      <label className="text-sm text-white/70">
        Package
        <select {...form.register("packageId")} className="mt-2 w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white">
          {packages.map((pack) => <option key={pack.id} value={pack.id}>{pack.name} - {money(pack.priceCents)}</option>)}
        </select>
      </label>
      <fieldset className="md:col-span-2">
        <legend className="mb-3 text-sm text-white/70">Add-ons</legend>
        <div className="grid gap-3 md:grid-cols-3">
          {addOns.map((addOn) => (
            <label key={addOn.id} className="flex items-start gap-3 rounded-lg border border-white/10 p-3 text-sm text-white/70">
              <input type="checkbox" value={addOn.id} {...form.register("addOnIds")} className="mt-1 accent-gold-200" />
              <span><span className="block text-white">{addOn.name}</span>{money(addOn.priceCents)}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <Input type="datetime-local" {...form.register("startsAt", { valueAsDate: true })} />
      <select {...form.register("paymentOption")} className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white">
        <option value="DEPOSIT">Deposit / капаро</option>
        <option value="FULL">Full online payment</option>
        <option value="CASH">Pay on session / cash</option>
      </select>
      <Input placeholder="Full name" {...form.register("clientName")} />
      <Input placeholder="Email" type="email" {...form.register("clientEmail")} />
      <Input placeholder="Phone" {...form.register("clientPhone")} />
      <Textarea placeholder="Session notes, location ideas, styling, timing" {...form.register("notes")} className="md:col-span-2" />
      <div className="flex items-center gap-4 md:col-span-2">
        <Button type="submit">Confirm Booking</Button>
        <p className="text-sm text-white/60">{message}</p>
      </div>
    </form>
  );
}
