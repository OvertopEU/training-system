"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [message, setMessage] = useState("");
  return (
    <form
      className="mx-auto max-w-md rounded-lg border border-gold-200/20 bg-black/60 p-6 shadow-gold"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const result = await signIn("credentials", { email: form.get("email"), password: form.get("password"), redirect: true, callbackUrl: "/dashboard" });
        if (result?.error) setMessage(result.error);
      }}
    >
      <Image src="/logo.png" alt="Light & Glory Studio" width={120} height={120} className="mx-auto mb-6" />
      <div className="space-y-4">
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="password" type="password" placeholder="Password" required />
        <Button type="submit" className="w-full">Login</Button>
        <p className="text-center text-sm text-white/60">{message}</p>
      </div>
    </form>
  );
}

export function RegisterForm() {
  const [message, setMessage] = useState("");
  return (
    <form
      className="mx-auto max-w-md rounded-lg border border-gold-200/20 bg-black/60 p-6 shadow-gold"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: form.get("name"), email: form.get("email"), password: form.get("password") })
        });
        setMessage(response.ok ? "Account created. You can now log in." : "Registration failed.");
      }}
    >
      <Image src="/logo.png" alt="Light & Glory Studio" width={120} height={120} className="mx-auto mb-6" />
      <div className="space-y-4">
        <Input name="name" placeholder="Name" required />
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="password" type="password" placeholder="Password" required minLength={8} />
        <Button type="submit" className="w-full">Register</Button>
        <p className="text-center text-sm text-white/60">{message}</p>
      </div>
    </form>
  );
}
