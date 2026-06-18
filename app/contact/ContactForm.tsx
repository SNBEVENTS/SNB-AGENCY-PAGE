"use client";

import { useState } from "react";

const EVENT_TYPES = [
  "Corporate Offsite",
  "Brand Launch & Activation",
  "Retreat & Team Experience",
  "Event Production",
  "Other",
];

const inputClass =
  "w-full bg-ink border border-ink-border px-4 py-3.5 text-sm text-parchment placeholder:text-muted focus:outline-none focus:border-gold transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    eventType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-16 border border-ink-border">
        <div className="text-center px-10">
          <div className="w-10 h-px bg-gold mx-auto mb-8" />
          <h3 className="font-heading text-3xl text-parchment mb-4">
            Thank You
          </h3>
          <p className="text-muted leading-relaxed">
            We've received your enquiry and will be in touch within 48 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-2.5">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-2.5">
            Company
          </label>
          <input
            type="text"
            name="company"
            required
            value={form.company}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your company"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-2.5">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="your@company.com"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-2.5">
          Event Type
        </label>
        <select
          name="eventType"
          required
          value={form.eventType}
          onChange={handleChange}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="" disabled>
            Select event type
          </option>
          {EVENT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-2.5">
          Message
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={7}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your event brief — type of event, scale, timeline, and any specific goals or requirements..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-3 bg-gold text-ink px-9 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
      >
        Send Enquiry →
      </button>
    </form>
  );
}
