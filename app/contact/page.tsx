import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Time Vault",
  description: "Get in touch with the Time Vault team.",
};

const team = [
  { name: "Nicklas Doran", email: "doranni4@msu.edu", role: "Co-Founder" },
  { name: "Tamer Bazzi", email: "bazzitam@msu.edu", role: "Co-Founder" },
  { name: "Saanj Bhakta", email: "bhaktasa@msu.edu", role: "Co-Founder" },
  { name: "Yuliia Mykhailenko", email: "mykhaile@msu.edu", role: "Co-Founder" },
  { name: "Nate Laughton", email: "natelaughton@gmail.com", role: "Co-Founder" },
  { name: "Rithvik Gopalsamy", email: "rithvikg007@gmail.com", role: "Co-Founder" },
  { name: "Suprathik Emmadi", email: "suprathikemmadi14@gmail.com", role: "Co-Founder" },
  { name: "Anderson Threadgould", email: "anderson.threadgould@icloud.com", role: "Co-Founder" },
  { name: "Ryan Paulon", email: "paulonry@msu.edu", role: "Co-Founder" },
];

export default function ContactPage() {
  return (
    <div className="pt-24 bg-vault-black min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-vault-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-vault-gold text-xs tracking-[0.4em] uppercase mb-4">
            Reach Out
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-vault-text mb-6">
            Let&apos;s Talk.
          </h1>
          <span className="block w-16 h-px bg-vault-gold mx-auto mb-8" />
          <p className="text-vault-muted text-lg leading-relaxed">
            Questions about Time Vault? Press inquiries? Partnership ideas? Our
            team is here and happy to connect.
          </p>
        </div>
      </section>

      {/* Team contacts */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-vault-text mb-4">
              Our Team
            </h2>
            <p className="text-vault-muted">
              Email any of us directly — we read every message.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member) => (
              <a
                key={member.email}
                href={`mailto:${member.email}`}
                className="card-dark group block hover:border-vault-gold/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-vault-border flex items-center justify-center flex-shrink-0 group-hover:bg-vault-gold/10 transition-colors">
                    <span className="text-vault-gold font-serif">
                      {member.name.charAt(0)}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-vault-text font-medium mb-0.5">
                      {member.name}
                    </h3>
                    <p className="text-vault-gold text-xs tracking-wider uppercase mb-2">
                      {member.role}
                    </p>
                    <p className="text-vault-muted text-xs group-hover:text-vault-gold transition-colors break-all">
                      {member.email}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional info */}
      <section className="py-16 bg-vault-dark border-t border-vault-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-vault-text mb-4">
            General Inquiries
          </h2>
          <p className="text-vault-muted mb-8 leading-relaxed">
            For press, media, investor relations, or general questions, reach out
            to our primary contacts above. We aim to respond within 48 hours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card-dark text-center">
              <div className="text-vault-gold mb-3">
                <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-vault-text font-medium mb-1">Email Us</h3>
              <p className="text-vault-muted text-sm">We reply within 48 hours</p>
            </div>
            <div className="card-dark text-center">
              <div className="text-vault-gold mb-3">
                <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-vault-text font-medium mb-1">Response Time</h3>
              <p className="text-vault-muted text-sm">Mon–Fri, within 48 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
