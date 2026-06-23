"use client";

import { useState } from "react";

const EVENT_TYPES = [
  "Corporate Offsite & Retreat",
  "Brand Activation",
  "Team Building & Experience",
  "Corporate & Company Event",
  "Other",
];

const inputClass =
  "w-full bg-surface border border-ink-border px-4 py-3.5 text-sm text-parchment placeholder:text-muted focus:outline-none focus:border-gold transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    eventType: "",
    eventDate: "",
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
          <label className="block text-[11px] font-semibold text-muted tracking-[0.25em] uppercase mb-3">
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
          <label className="block text-[11px] font-semibold text-muted tracking-[0.25em] uppercase mb-3">
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
        <label className="block text-[11px] font-semibold text-muted tracking-[0.25em] uppercase mb-3">
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
        <label className="block text-[11px] font-semibold text-muted tracking-[0.25em] uppercase mb-3">
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
        <label className="block text-[11px] font-semibold text-muted tracking-[0.25em] uppercase mb-3">
          Event Date
        </label>
        <input
          type="date"
          name="eventDate"
          value={form.eventDate}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-[11px] font-semibold text-muted tracking-[0.25em] uppercase mb-3">
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
        className="inline-flex items-center gap-3 bg-parchment text-surface px-9 py-4 text-[11px] font-semibold tracking-[0.25em] uppercase hover:opacity-80 transition-opacity"
      >
        Send Enquiry →
      </button>
    </form>
  );
}
