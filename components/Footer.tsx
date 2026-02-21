import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-vault-dark border-t border-vault-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-vault-gold flex items-center justify-center">
                <span className="text-vault-gold font-serif text-sm font-bold">T</span>
              </div>
              <span className="font-serif text-lg tracking-widest text-vault-text">
                TIME VAULT
              </span>
            </div>
            <p className="text-vault-muted text-sm leading-relaxed">
              The world&apos;s most advanced portable watch case. Engineered for
              those who refuse to compromise.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-vault-gold text-xs tracking-widest uppercase mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/waitlist", label: "Join Waitlist" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-vault-muted hover:text-vault-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-vault-gold text-xs tracking-widest uppercase mb-4">
              Get In Touch
            </h3>
            <p className="text-vault-muted text-sm mb-2">
              Questions? Reach out to our team.
            </p>
            <Link
              href="/contact"
              className="text-vault-gold text-sm hover:text-vault-gold-light transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-vault-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-vault-muted text-xs tracking-wide">
            © {new Date().getFullYear()} Time Vault. All rights reserved.
          </p>
          <p className="text-vault-muted text-xs italic font-serif">
            Protect What You Love.
          </p>
        </div>
      </div>
    </footer>
  );
}
