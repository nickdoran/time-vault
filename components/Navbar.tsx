"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-vault-black/90 backdrop-blur-md border-b border-vault-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/timevault.png"
            alt="Time Vault"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="font-serif text-xl tracking-widest text-vault-text group-hover:text-vault-gold transition-colors">
            TIME VAULT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-vault-muted hover:text-vault-gold transition-colors text-sm tracking-widest uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/waitlist" className="btn-gold text-xs px-6 py-2.5">
            Join Waitlist
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-vault-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-vault-text transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block h-px bg-vault-text transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-vault-text transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-vault-dark border-t border-vault-border">
          <nav className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-vault-muted hover:text-vault-gold transition-colors text-sm tracking-widest uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/waitlist"
              className="btn-gold text-center text-xs"
              onClick={() => setMenuOpen(false)}
            >
              Join Waitlist
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
