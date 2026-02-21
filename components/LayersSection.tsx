const layers = [
  {
    number: "01",
    material: "Full-Grain Leather",
    role: "Outer Shell",
    description:
      "Premium full-grain leather wraps the exterior, providing a tactile luxury feel while protecting the steel beneath. Ages beautifully with every carry.",
    color: "#8B5E3C",
    texture: "Leather",
  },
  {
    number: "02",
    material: "Stainless Steel",
    role: "Structural Core",
    description:
      "A precision-machined stainless steel cylinder forms the vault's backbone — housing the winding mechanism, locking system, GPS module, and the fingerprint-secured drawer compartment built into the base.",
    color: "#8A8A8A",
    texture: "Steel",
  },
  {
    number: "03",
    material: "Natural Cork",
    role: "Inner Cushion",
    description:
      "Sustainably sourced cork lines the interior, cradling your watch in a naturally anti-microbial, shock-absorbing embrace that won't scratch delicate cases.",
    color: "#C8A880",
    texture: "Cork",
  },
];

export default function LayersSection() {
  return (
    <section className="py-28 bg-vault-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-vault-gold text-xs tracking-[0.4em] uppercase mb-4">
            Material Excellence
          </p>
          <h2 className="section-heading">Three Layers. One Purpose.</h2>
          <span className="gold-line" />
          <p className="text-vault-muted max-w-xl mx-auto text-base leading-relaxed">
            Like a great timepiece itself, every component has a reason to exist.
            Three materials, each selected for its unique properties.
          </p>
        </div>

        {/* Layers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-vault-border">
          {layers.map((layer, index) => (
            <div
              key={layer.number}
              className={`relative p-10 group ${
                index < layers.length - 1
                  ? "md:border-r border-b md:border-b-0 border-vault-border"
                  : ""
              } hover:bg-vault-card transition-colors duration-300`}
            >
              {/* Layer number */}
              <span className="font-serif text-6xl text-vault-border leading-none block mb-6 group-hover:text-vault-gold/20 transition-colors">
                {layer.number}
              </span>

              {/* Color swatch */}
              <div
                className="w-10 h-1 mb-6"
                style={{ backgroundColor: layer.color }}
              />

              {/* Content */}
              <p className="text-vault-gold text-xs tracking-widest uppercase mb-2">
                {layer.role}
              </p>
              <h3 className="font-serif text-2xl text-vault-text mb-4">
                {layer.material}
              </h3>
              <p className="text-vault-muted text-sm leading-relaxed">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
