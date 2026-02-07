"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold">Contact</h1>

      <p className="mt-4 text-gray-600">
        Have a question before booking? Drop us a message and we’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-lg">
        {/* Must match the name in __forms.html */}
        <input type="hidden" name="form-name" value="contact" />

        <input name="name" type="text" placeholder="Your name" required className="w-full rounded-xl border p-3" />
        <input name="email" type="email" placeholder="Your email" required className="w-full rounded-xl border p-3" />
        <textarea name="message" placeholder="How can we help?" required className="w-full rounded-xl border p-3 h-32" />

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-black px-6 py-3 text-white font-medium hover:opacity-90 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        {status === "sent" && <p className="text-sm text-green-600">Thanks! Your message has been sent.</p>}
        {status === "error" && <p className="text-sm text-red-600">Something went wrong—please try again.</p>}
      </form>
    </main>
  );
}
