"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isGift: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFields((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const data = await res.json();

      if (res.ok) {
        setFormState("success");
        setFields({ firstName: "", lastName: "", email: "", isGift: false });
      } else if (res.status === 409) {
        setFormState("error");
        setErrorMessage("This email is already on our waitlist. We'll be in touch!");
      } else {
        setFormState("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (formState === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 border border-vault-gold flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-vault-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-vault-text mb-4">
          You&apos;re on the list.
        </h3>
        <p className="text-vault-muted text-lg max-w-md mx-auto leading-relaxed">
          Thank you for joining the Time Vault waitlist. We&apos;ll reach out the
          moment pre-orders open — you&apos;ll be among the first to know.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-vault-gold/50" />
          <div className="w-1.5 h-1.5 bg-vault-gold rotate-45" />
          <div className="h-px w-12 bg-vault-gold/50" />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-vault-muted text-xs tracking-widest uppercase mb-2"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="John"
            value={fields.firstName}
            onChange={handleChange}
            className="vault-input"
            disabled={formState === "loading"}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-vault-muted text-xs tracking-widest uppercase mb-2"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Smith"
            value={fields.lastName}
            onChange={handleChange}
            className="vault-input"
            disabled={formState === "loading"}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-vault-muted text-xs tracking-widest uppercase mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
          value={fields.email}
          onChange={handleChange}
          className="vault-input"
          disabled={formState === "loading"}
        />
      </div>

      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex-shrink-0">
          <input
            type="checkbox"
            name="isGift"
            checked={fields.isGift}
            onChange={handleChange}
            disabled={formState === "loading"}
            className="sr-only peer"
          />
          <div className="w-5 h-5 border border-vault-border bg-vault-black peer-checked:border-vault-gold transition-colors" />
          <svg
            className="absolute inset-0 w-5 h-5 p-0.5 text-vault-gold opacity-0 peer-checked:opacity-100 transition-opacity"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-vault-muted text-sm group-hover:text-vault-text transition-colors">
          This is a gift for someone special
        </span>
      </label>

      {formState === "error" && (
        <div className="border border-red-800/50 bg-red-950/20 p-4">
          <p className="text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={formState === "loading"}
        className="btn-gold w-full text-sm py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState === "loading" ? "Reserving your spot..." : "Reserve My Spot"}
      </button>

      <p className="text-vault-muted text-xs text-center">
        No payment required. We&apos;ll only contact you about Time Vault.
      </p>
    </form>
  );
}
