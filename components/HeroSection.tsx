import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vault-black">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-vault-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Pre-heading */}
        <p className="text-vault-gold text-xs tracking-[0.4em] uppercase mb-6 font-sans">
          Introducing Time Vault
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-vault-text leading-tight mb-6">
          Protect What
          <br />
          <span className="text-gold-gradient">You Love.</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-vault-gold/50" />
          <div className="w-1.5 h-1.5 bg-vault-gold rotate-45" />
          <div className="h-px w-16 bg-vault-gold/50" />
        </div>

        {/* Subheading */}
        <p className="text-vault-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          The world&apos;s first portable watch case with fingerprint security,
          GPS tracking, and automatic self-winding. Crafted in leather, stainless
          steel, cork, and velvet — engineered for the modern collector.
        </p>

        {/* Price tag */}
        <p className="text-vault-gold font-serif text-2xl mb-10 tracking-wide">
          $495 <span className="text-vault-muted text-base font-sans">— Pre-order price</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/waitlist" className="btn-gold text-sm px-10 py-4">
            Join the Waitlist
          </Link>
          <Link href="/about" className="btn-outline text-sm px-10 py-4">
            Our Story
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-vault-border pt-10">
          {[
            { value: "4", label: "Premium Layers" },
            { value: "360°", label: "Self-Winding" },
            { value: "GPS", label: "Real-Time Tracking" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-2xl text-vault-gold mb-1">{stat.value}</p>
              <p className="text-vault-muted text-xs tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-vault-muted">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-vault-muted to-transparent" />
      </div>
    </section>
  );
}
