"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

const fields = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "pickup", label: "Pickup Location", type: "text", required: true },
  { name: "destination", label: "Destination", type: "text", required: true },
  { name: "passengers", label: "Number of Passengers", type: "number", required: true },
  { name: "date", label: "Travel Date", type: "date", required: true },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const subject = `Quote request from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Pickup: ${data.get("pickup")}`,
      `Destination: ${data.get("destination")}`,
      `Passengers: ${data.get("passengers")}`,
      `Travel Date: ${data.get("date")}`,
      "",
      `Message:`,
      `${data.get("message") ?? ""}`,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-2">
          <label htmlFor={field.name} className="text-sm font-semibold text-primary">
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            required={field.required}
            className="rounded-xl border border-black/10 bg-bg-light px-4 py-3 text-sm text-text outline-none transition-colors focus:border-secondary focus:bg-white"
          />
        </div>
      ))}

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-semibold text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us more about your trip..."
          className="resize-none rounded-xl border border-black/10 bg-bg-light px-4 py-3 text-sm text-text outline-none transition-colors focus:border-secondary focus:bg-white"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-primary"
        >
          <Send className="h-4 w-4" />
          Submit Quote Request
        </button>
        {sent && (
          <p className="mt-3 text-sm font-medium text-success">
            Your email app should now be open with your request pre-filled —
            send it to reach our team, or call us directly at {site.phone}.
          </p>
        )}
      </div>
    </form>
  );
}
