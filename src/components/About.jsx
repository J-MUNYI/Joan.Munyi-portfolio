const skills = [
  "JavaScript", "React.js", "Node.js", "Express.js",
  "MongoDB", "HTML5 / CSS3", "Tailwind CSS", "REST APIs",
  "Git & GitHub", "JWT Auth", "Mongoose ODM", "Postman",
];

const exploring = [
  { icon: "⚙", title: "MERN Stack Depth", desc: "Going deeper into full-stack patterns, middleware, and scalable app architecture." },
  { icon: "🔗", title: "API Development", desc: "Building and consuming RESTful APIs, authentication flows, and async patterns." },
  { icon: "◈", title: "AI & RAG Systems", desc: "Exploring retrieval-augmented generation and practical AI integrations in web apps." },
  { icon: "▣", title: "Backend Architecture", desc: "Studying scalable design patterns, database optimisation, and microservice concepts." },
];

export default function About() {
  return (
    <section id="about" className="fade-up" style={{ padding: "6rem 2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ fontSize: "0.75rem", fontFamily: "'DM Mono', monospace", color: "var(--accent2)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ width: 24, height: 1, background: "var(--accent2)", display: "inline-block" }} /> About
      </div>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--text)", marginBottom: "1rem" }}>
        Skills & What I'm Learning
      </h2>
      <p style={{ fontSize: "1rem", color: "var(--text2)", maxWidth: "500px", marginBottom: "2.5rem", lineHeight: 1.7 }}>
        My current technical toolkit, and the rabbit holes I'm currently going down.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "12px", marginBottom: "3rem" }}>
        {skills.map((s) => (
          <div key={s} style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "8px", padding: "12px 16px",
            fontFamily: "'DM Mono', monospace", fontSize: "0.78rem",
            color: "var(--text2)", display: "flex", alignItems: "center", gap: "8px",
            transition: "all 0.2s", cursor: "default",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text2)"; }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
            {s}
          </div>
        ))}
      </div>

      <div style={{ fontSize: "0.75rem", fontFamily: "'DM Mono', monospace", color: "var(--accent2)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ width: 24, height: 1, background: "var(--accent2)", display: "inline-block" }} /> Currently Exploring
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
        {exploring.map((item) => (
          <div key={item.title} style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "10px", padding: "1.25rem", transition: "all 0.25s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--teal)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ fontSize: "1.4rem", marginBottom: "8px" }}>{item.icon}</div>
            <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text)", marginBottom: "4px" }}>{item.title}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text3)", lineHeight: 1.5 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}