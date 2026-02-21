const steps = [
  {
    step: "01",
    title: "Place Your Watch",
    description:
      "Open Time Vault with your fingerprint. Nestle your watch into the cork-lined interior. The fit is tailored for all standard watch sizes.",
  },
  {
    step: "02",
    title: "Lock It Down",
    description:
      "The biometric lock engages automatically when closed. GPS activates. The self-winding mechanism begins keeping your watch perfectly calibrated. The bottom drawer locks independently with the same fingerprint — one scan secures everything.",
  },
  {
    step: "03",
    title: "Take It Anywhere",
    description:
      "Concerts, travel, the gym — wherever life takes you, Time Vault goes with you. Compact, cylindrical, and built for the pocket or bag.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="pt-28 bg-vault-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-vault-gold text-xs tracking-[0.4em] uppercase mb-4">
            Simple by Design
          </p>
          <h2 className="section-heading">How It Works</h2>
          <span className="gold-line" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-vault-border z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vault-gold/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 border border-vault-gold flex items-center justify-center bg-vault-black">
                    <span className="font-serif text-vault-gold text-xl">{step.step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute top-1/2 -right-6 w-12 h-px bg-vault-border" />
                  )}
                </div>

                <h3 className="font-serif text-2xl text-vault-text mb-4">{step.title}</h3>
                <p className="text-vault-muted text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-20 text-center p-8 border border-vault-border bg-vault-card">
          <p className="font-serif text-xl text-vault-text mb-2">
            &ldquo;Born from a stolen watch. Built so it never happens to you.&rdquo;
          </p>
          <p className="text-vault-gold text-xs tracking-widest uppercase">— The Time Vault Story</p>
        </div>
      </div>
    </section>
  );
}
