const contacts = [
  { label: "Email", value: "joan.munyi.dev@gmail.com", href: "mailto:joan.munyi.dev@gmail.com" },
  { label: "Phone", value: "+254 714 955 335", href: null },
  { label: "GitHub", value: "github.com/J-MUNYI", href: "https://github.com/J-MUNYI" },
  { label: "Location", value: "Nairobi, Kenya", href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="fade-up section-pad" style={{ background: "var(--bg)", padding: "6rem 2.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ fontSize: "0.75rem", fontFamily: "'DM Mono', monospace", color: "var(--accent2)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: 24, height: 1, background: "var(--accent2)", display: "inline-block" }} /> Contact
        </div>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--text)", marginBottom: "1rem" }}>
          Let's Build Something
        </h2>
        <p style={{ fontSize: "1rem", color: "var(--text2)", maxWidth: "500px", marginBottom: "2rem", lineHeight: 1.7 }}>
          Open to internships, freelance projects, and interesting collaborations.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {/* CTA */}
          <div className="contact-cta" style={{ gridColumn: "1 / -1", background: "var(--surface)", border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)", borderRadius: "16px", padding: "2.5rem", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", color: "var(--text)", marginBottom: "0.75rem" }}>
              Ready to work together?
            </h3>
            <p style={{ color: "var(--text2)", marginBottom: "1.75rem", fontSize: "0.95rem" }}>
              Whether it's a freelance build, an internship opportunity, or just a chat about tech — my inbox is open.
            </p>
            <a href="mailto:joan.munyi3@gmail.com">
              <button style={{
                background: "var(--accent)", color: "var(--bg)",
                padding: "0.8rem 2rem", borderRadius: "8px",
                fontWeight: 700, fontSize: "0.95rem", border: "none",
                cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                boxShadow: "0 0 24px color-mix(in srgb, var(--accent) 45%, transparent)",
              }}>
                Send me an email →
              </button>
            </a>
          </div>

          {contacts.map(({ label, value, href }) => (
            <div key={label} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", padding: "1.5rem" }}>
              <div style={{ fontSize: "0.75rem", fontFamily: "'DM Mono', monospace", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>{label}</div>
              <div style={{ fontSize: "1rem", color: "var(--text)", fontWeight: 500 }}>
                {href
                  ? <a href={href} target="_blank" rel="noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>{value}</a>
                  : value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
