"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [message, setMessage] = useState("");
  return (
    <form
      className="grid gap-4 rounded-lg border border-gold-200/20 bg-black/45 p-5"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(form))
        });
        setMessage(response.ok ? "Message sent." : "Could not send message.");
      }}
    >
      <Input name="name" placeholder="Name" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Input name="phone" placeholder="Phone" />
      <Input name="subject" placeholder="Subject" required />
      <Textarea name="message" placeholder="Tell us what you want to create" required />
      <Button type="submit">Send</Button>
      <p className="text-sm text-white/60">{message}</p>
    </form>
  );
}
