export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "8rem 2.5rem 4rem", position: "relative", overflow: "hidden",
    }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "60px 60px", opacity: 0.3, pointerEvents: "none",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(124,106,255,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "780px", position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "var(--surface)", border: "1px solid var(--border2)",
          borderRadius: "50px", padding: "6px 16px", marginBottom: "2rem",
          fontSize: "0.78rem", color: "var(--text2)", fontFamily: "'DM Mono', monospace",
        }}>
          <span className="pulse-dot" style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "var(--green)", display: "inline-block",
          }} />
          Available for internships & collaborations
        </div>

        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          lineHeight: 1.05, letterSpacing: "-0.02em",
          marginBottom: "1.5rem", color: "var(--text)",
        }}>
          Building the web,<br />
          <em style={{ fontStyle: "italic", color: "var(--accent2)", display: "block" }}>
            one stack at a time.
          </em>
        </h1>

        <p style={{
          fontSize: "1.1rem", color: "var(--text2)", maxWidth: "520px",
          marginBottom: "2.5rem", lineHeight: 1.7, fontWeight: 300,
        }}>
          Full-stack developer & CS student at Kenyatta University. I build real
          products with the MERN stack — from consulting platforms to apps tackling
          personal finance, sustainability, and education.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#projects">
            <button style={{
              background: "var(--accent)", color: "#fff",
              padding: "0.8rem 2rem", borderRadius: "8px",
              fontWeight: 500, fontSize: "0.95rem", border: "none",
              cursor: "pointer", fontFamily: "'Outfit', sans-serif",
            }}>View My Work</button>
          </a>
          <a href="#contact">
            <button style={{
              background: "transparent", color: "var(--text2)",
              border: "1px solid var(--border2)",
              padding: "0.8rem 2rem", borderRadius: "8px",
              fontWeight: 500, fontSize: "0.95rem",
              cursor: "pointer", fontFamily: "'Outfit', sans-serif",
            }}>Get in Touch</button>
          </a>
        </div>

        <div style={{
          display: "flex", gap: "3rem", marginTop: "4rem",
          paddingTop: "2.5rem", borderTop: "1px solid var(--border)", flexWrap: "wrap",
        }}>
          {[["4+", "Projects Built"], ["MERN", "Core Stack"], ["2024", "Started CS Degree"]].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", color: "var(--accent2)" }}>{num}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}