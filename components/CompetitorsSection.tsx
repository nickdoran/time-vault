const competitors = [
  {
    name: "WOLF Roadster",
    price: "$150–$350",
    selfWinding: true,
    gps: false,
    fingerprint: false,
    secretStash: false,
    portable: true,
    note: "Single-watch travel winder, no security",
  },
  {
    name: "Orbita Sparta 1",
    price: "$300–$600",
    selfWinding: true,
    gps: false,
    fingerprint: false,
    secretStash: false,
    portable: true,
    note: "Excellent winder, no tracking or lock",
  },
  {
    name: "Rapport London",
    price: "$200–$400",
    selfWinding: false,
    gps: false,
    fingerprint: false,
    secretStash: false,
    portable: true,
    note: "Luxury travel case only, no winding",
  },
  {
    name: "Buben & Zorweg",
    price: "$5,000+",
    selfWinding: true,
    gps: false,
    fingerprint: false,
    secretStash: false,
    portable: false,
    note: "Ultra-luxury, stationary home safes",
  },
];

const Check = () => (
  <svg className="w-5 h-5 text-vault-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const X = () => (
  <svg className="w-5 h-5 text-vault-muted mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function CompetitorsSection() {
  return (
    <section className="py-28 bg-vault-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-vault-gold text-xs tracking-[0.4em] uppercase mb-4">
            The Market
          </p>
          <h2 className="section-heading">Why Time Vault Wins</h2>
          <span className="gold-line" />
          <p className="text-vault-muted max-w-xl mx-auto text-base leading-relaxed">
            Every competitor makes you choose between security, winding, or
            portability. Time Vault is the only case that delivers all three.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-vault-border">
                <th className="text-left py-4 px-6 text-vault-muted text-xs tracking-widest uppercase font-normal">
                  Product
                </th>
                <th className="text-center py-4 px-4 text-vault-muted text-xs tracking-widest uppercase font-normal">
                  Price
                </th>
                <th className="text-center py-4 px-4 text-vault-muted text-xs tracking-widest uppercase font-normal">
                  Self-Wind
                </th>
                <th className="text-center py-4 px-4 text-vault-muted text-xs tracking-widest uppercase font-normal">
                  GPS
                </th>
                <th className="text-center py-4 px-4 text-vault-muted text-xs tracking-widest uppercase font-normal">
                  Fingerprint
                </th>
                <th className="text-center py-4 px-4 text-vault-muted text-xs tracking-widest uppercase font-normal">
                  Portable
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Time Vault row (highlighted) */}
              <tr className="border-b border-vault-gold/30 bg-vault-gold/5">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-vault-gold rotate-45" />
                    <span className="font-serif text-vault-gold text-lg">Time Vault</span>
                    <span className="text-vault-gold/60 text-xs tracking-wider border border-vault-gold/30 px-2 py-0.5">
                      OUR PRODUCT
                    </span>
                  </div>
                  <p className="text-vault-muted text-xs mt-1 ml-5 pl-0">
                    All-in-one portable, secure, self-winding case
                  </p>
                </td>
                <td className="text-center py-5 px-4 font-serif text-vault-gold">$495</td>
                <td className="text-center py-5 px-4"><Check /></td>
                <td className="text-center py-5 px-4"><Check /></td>
                <td className="text-center py-5 px-4"><Check /></td>
                <td className="text-center py-5 px-4"><Check /></td>
              </tr>

              {/* Competitor rows */}
              {competitors.map((comp) => (
                <tr
                  key={comp.name}
                  className="border-b border-vault-border hover:bg-vault-card transition-colors"
                >
                  <td className="py-5 px-6">
                    <span className="text-vault-text font-medium">{comp.name}</span>
                    <p className="text-vault-muted text-xs mt-1">{comp.note}</p>
                  </td>
                  <td className="text-center py-5 px-4 text-vault-muted text-sm">{comp.price}</td>
                  <td className="text-center py-5 px-4">{comp.selfWinding ? <Check /> : <X />}</td>
                  <td className="text-center py-5 px-4">{comp.gps ? <Check /> : <X />}</td>
                  <td className="text-center py-5 px-4">{comp.fingerprint ? <Check /> : <X />}</td>
                  <td className="text-center py-5 px-4">{comp.portable ? <Check /> : <X />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-vault-muted text-xs mt-4 text-center italic">
          Competitor data based on publicly available product information. Prices subject to change.
        </p>
      </div>
    </section>
  );
}
