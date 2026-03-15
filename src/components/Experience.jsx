const timeline = [
  {
    role: "Full-Stack Developer — Campus Bazaar",
    org: "Kenyatta University Group Project",
    date: "Jun 2025 – Present",
    points: [
      "Built and integrated full-stack features for a campus marketplace using the MERN stack.",
      "Collaborated in a team — code reviews, GitHub workflows, and resolving integration challenges.",
      "Gained hands-on experience managing shared codebases and hitting development milestones.",
    ],
  },
  {
    role: "Founder — szn.beads.ke",
    org: "Self-Employed · Nairobi, Kenya",
    date: "May 2024 – Present",
    points: [
      "Founded and operate a product business selling handmade beaded jewellery and beauty products.",
      "Handle product design, inventory, pricing, Instagram content, and order fulfilment.",
      "Built a loyal repeat customer base through consistent branding and personalised service.",
    ],
  },
  {
    role: "BSc. Computer Science",
    org: "Kenyatta University",
    date: "2024 – Present",
    points: [
      "Coursework: Data Structures, Web Development, Software Engineering, Database Systems, OS, Networking, AI, and more.",
    
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="fade-up" style={{ padding: "6rem 2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ fontSize: "0.75rem", fontFamily: "'DM Mono',monospace", color: "var(--accent2)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ width: 24, height: 1, background: "var(--accent2)", display: "inline-block" }} /> Experience
      </div>
      <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--text)", marginBottom: "1rem" }}>Where I've Been</h2>
      <p style={{ fontSize: "1rem", color: "var(--text2)", maxWidth: "500px", marginBottom: "3rem", lineHeight: 1.7 }}>
        A developer and an entrepreneur — both sides feed the other.
      </p>

      <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
        <div style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 1, background: "var(--border2)" }} />
        {timeline.map((item, i) => (
          <div key={i} style={{ position: "relative", marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
            <div style={{ position: "absolute", left: "-1.5rem", top: 8, width: 9, height: 9, borderRadius: "50%", background: "var(--accent)", border: "2px solid var(--bg)", boxShadow: "0 0 0 3px rgba(124,106,255,0.2)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text)" }}>{item.role}</span>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.75rem", color: "var(--text3)" }}>{item.date}</span>
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--accent2)", marginBottom: "0.75rem" }}>{item.org}</div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {item.points.map((pt, j) => (
                <li key={j} style={{ fontSize: "0.88rem", color: "var(--text2)", lineHeight: 1.65, padding: "0.25rem 0 0.25rem 1rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--text3)" }}>—</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}