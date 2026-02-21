import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-28 bg-vault-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-vault-gold/5 via-vault-gold/10 to-vault-gold/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vault-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vault-gold to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-vault-gold text-xs tracking-[0.4em] uppercase mb-4">
          Limited Pre-Orders
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-vault-text mb-6">
          Be First in Line.
        </h2>
        <p className="text-vault-muted text-lg leading-relaxed mb-10">
          Time Vault is not yet in production. Join our exclusive waitlist to
          secure your spot and be notified the moment pre-orders open. Early
          members receive priority access.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link href="/waitlist" className="btn-gold text-sm px-12 py-4">
            Reserve My Spot
          </Link>
        </div>

        <p className="text-vault-muted text-xs">
          No payment required now. We&apos;ll notify you when Time Vault is ready.
        </p>
      </div>
    </section>
  );
}
