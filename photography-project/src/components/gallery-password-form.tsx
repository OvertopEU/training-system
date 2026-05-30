"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function GalleryPasswordForm({ slug }: { slug: string }) {
  const [message, setMessage] = useState("");
  return (
    <form
      className="mx-auto max-w-md rounded-lg border border-gold-200/20 bg-black/60 p-6 shadow-gold"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const response = await fetch("/api/galleries/access", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug, password: form.get("password") })
        });
        if (response.ok) window.location.reload();
        else setMessage("Password was not accepted.");
      }}
    >
      <Input name="password" type="password" placeholder="Gallery password" required />
      <Button type="submit" className="mt-4 w-full">Open Gallery</Button>
      <p className="mt-3 text-center text-sm text-white/60">{message}</p>
    </form>
  );
}
