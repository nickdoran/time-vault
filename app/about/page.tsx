import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Time Vault",
  description:
    "The story behind Time Vault — how a stolen watch at a concert sparked a revolution in portable watch security.",
};


export default function AboutPage() {
  return (
    <div className="pt-24 bg-vault-black min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-vault-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-vault-gold text-xs tracking-[0.4em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-vault-text mb-6">
            Born at a Concert.
            <br />
            <span className="text-gold-gradient">Built for Everyone.</span>
          </h1>
          <span className="block w-16 h-px bg-vault-gold mx-auto mb-8" />
          <p className="text-vault-muted text-lg leading-relaxed">
            Every great invention begins with a problem. Ours began with a fence,
            a crowd, and a watch that shouldn&apos;t have gone missing.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 border-b border-vault-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative pl-8 border-l-2 border-vault-gold/30">
            <div className="absolute -left-1 top-0 w-2 h-2 bg-vault-gold rotate-45" />

            <p className="text-vault-muted text-lg leading-relaxed mb-8">
              It was a packed concert. The energy was electric, the crowd was
              moving, and in a moment of excitement — our founder jumped a fence.
            </p>

            <p className="text-vault-muted text-lg leading-relaxed mb-8">
              His watch got loose. In the chaos of the crowd — a mix of good
              people and those looking for opportunity — it was taken. Gone. Just
              like that.
            </p>

            <p className="text-vault-muted text-lg leading-relaxed mb-8">
              Standing there, watchless, he realized the problem wasn&apos;t just
              about theft. It was about the reality of carrying something
              irreplaceable into the real world — somewhere unpredictable,
              sometimes dangerous.
            </p>

            <p className="font-serif text-xl text-vault-text leading-relaxed mb-8">
              &ldquo;What if a watch case could be portable, truly secure, and
              keep my mechanical watch wound — all at once?&rdquo;
            </p>

            <p className="text-vault-muted text-lg leading-relaxed">
              No product existed. So we built one.
            </p>

            <div className="absolute -left-1 bottom-0 w-2 h-2 bg-vault-gold/30 rotate-45" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-vault-dark border-b border-vault-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-vault-gold text-xs tracking-[0.4em] uppercase mb-4">
                Our Mission
              </p>
              <h2 className="font-serif text-4xl text-vault-text mb-6">
                A Case Built for Life, Not Just Storage.
              </h2>
              <p className="text-vault-muted leading-relaxed mb-4">
                Time Vault exists to eliminate the impossible choice watch owners
                face: leave your watch at home, or risk losing it.
              </p>
              <p className="text-vault-muted leading-relaxed">
                We believe a mechanical watch is more than an accessory — it&apos;s
                a story, an investment, a piece of art. It deserves protection
                worthy of what it represents.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { label: "Portability", desc: "Cylindrical form factor fits in any bag or large pocket." },
                { label: "Security", desc: "Fingerprint + GPS + steel body = peace of mind, always." },
                { label: "Care", desc: "Self-winding mechanism keeps mechanical watches healthy during storage." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-1 h-full bg-vault-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-vault-text font-medium mb-1">{item.label}</h3>
                    <p className="text-vault-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-vault-dark border-t border-vault-border text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-vault-muted mb-6 leading-relaxed">
            Believe in what we&apos;re building? Be one of the first to experience
            Time Vault.
          </p>
          <Link href="/waitlist" className="btn-gold">
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
}
