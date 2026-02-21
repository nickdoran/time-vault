import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist — Time Vault",
  description:
    "Reserve your spot for Time Vault — the world's most advanced portable watch case. Sign up to be notified when pre-orders open.",
};

export default function WaitlistPage() {
  return (
    <div className="pt-24 bg-vault-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <p className="text-vault-gold text-xs tracking-[0.4em] uppercase mb-4">
              Exclusive Access
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-vault-text mb-6 leading-tight">
              Join the
              <br />
              <span className="text-gold-gradient">Waitlist.</span>
            </h1>
            <span className="block w-16 h-px bg-vault-gold mb-8" />

            <p className="text-vault-muted text-lg leading-relaxed mb-10">
              Time Vault is currently in development. Sign up to be among the
              first notified when pre-orders open — and secure your place in line
              for the world&apos;s most advanced portable watch case.
            </p>

            {/* What you get */}
            <div className="space-y-4 mb-12">
              <h3 className="text-vault-text font-medium tracking-wide uppercase text-xs">
                Waitlist Members Receive:
              </h3>
              {[
                "Priority access when pre-orders open",
                "Exclusive early-bird pricing opportunity",
                "Product development updates",
                "Behind-the-scenes content",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-vault-gold rotate-45 flex-shrink-0" />
                  <p className="text-vault-muted text-sm">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Product specs */}
            <div className="border border-vault-border p-6 bg-vault-card">
              <h3 className="text-vault-text font-medium mb-4 text-sm tracking-widest uppercase">
                What You&apos;re Waiting For
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { label: "Price", value: "$495" },
                  { label: "Form", value: "Cylinder" },
                  { label: "Security", value: "Fingerprint + GPS" },
                  { label: "Winding", value: "Auto Self-Wind" },
                  { label: "Layers", value: "3 Premium" },
                  { label: "Hidden", value: "Secret Stash" },
                ].map((spec) => (
                  <div key={spec.label}>
                    <p className="text-vault-muted text-xs uppercase tracking-wider mb-1">
                      {spec.label}
                    </p>
                    <p className="text-vault-text font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:sticky lg:top-28">
            <div className="border border-vault-border bg-vault-card p-8 md:p-10">
              <h2 className="font-serif text-2xl text-vault-text mb-2">
                Secure Your Spot
              </h2>
              <p className="text-vault-muted text-sm mb-8">
                Join thousands who believe the future of watch protection is here.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
