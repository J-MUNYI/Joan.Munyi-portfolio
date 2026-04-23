import { useEffect, useRef } from "react";

const phrases = [
  "one stack at a time.",
  "with purpose and passion.",
  "solving real problems.",
];

export default function Hero() {
  const typeRef = useRef(null);
  const stateRef = useRef({ phraseIndex: 0, charIndex: 0, deleting: false });

  useEffect(() => {
    let timeout;
    function typeLoop() {
      const { phraseIndex, charIndex, deleting } = stateRef.current;
      const current = phrases[phraseIndex];
      const cursor = '<span class="typewriter-cursor"></span>';
      if (!deleting) {
        const next = charIndex + 1;
        if (typeRef.current) typeRef.current.innerHTML = current.slice(0, next) + cursor;
        stateRef.current.charIndex = next;
        if (next === current.length) {
          stateRef.current.deleting = true;
          timeout = setTimeout(typeLoop, 2000);
          return;
        }
      } else {
        const next = charIndex - 1;
        if (typeRef.current) typeRef.current.innerHTML = current.slice(0, next) + cursor;
        stateRef.current.charIndex = next;
        if (next === 0) {
          stateRef.current.deleting = false;
          stateRef.current.phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      timeout = setTimeout(typeLoop, deleting ? 40 : 80);
    }
    typeLoop();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero-section" style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      backgroundColor: "var(--bg)",
    }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(color-mix(in srgb, var(--accent) 20%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--accent) 20%, transparent) 1px, transparent 1px)",
        backgroundSize: "60px 60px", pointerEvents: "none",
      }} />

      {/* Glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 70% 40%, color-mix(in srgb, var(--accent) 24%, transparent) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 70%, color-mix(in srgb, var(--teal) 20%, transparent) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="hero-grid" style={{
        maxWidth: "1200px", margin: "0 auto", padding: "8rem 2.5rem 4rem",
        display: "grid", gridTemplateColumns: "1fr 320px",
        gap: "4rem", alignItems: "center", position: "relative", zIndex: 1,
      }}>

        {/* Left content */}
        <div>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "var(--surface)", border: "1px solid color-mix(in srgb, var(--accent) 35%, transparent)",
            borderRadius: "50px", padding: "6px 16px", marginBottom: "2rem",
            fontSize: "0.78rem", color: "var(--text2)", fontFamily: "'DM Mono', monospace",
          }}>
            <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)", display: "inline-block" }} />
            Available for internships & collaborations
          </div>

          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            lineHeight: 1.05, letterSpacing: "-0.02em",
            marginBottom: "1.5rem", color: "var(--text)",
          }}>
            Building the web,<br />
            <em ref={typeRef} style={{
              fontStyle: "italic", color: "var(--accent2)",
              display: "block", minHeight: "1.2em",
            }}>
              <span className="typewriter-cursor"></span>
            </em>
          </h1>

          <p style={{
            fontSize: "1rem", color: "var(--text2)", maxWidth: "520px",
            marginBottom: "2.5rem", lineHeight: 1.7, fontWeight: 300,
          }}>
            Full stack developer & CS student at Kenyatta University. I build real products
            with the MERN stack, from consulting platforms to apps tackling personal finance,
            sustainability, and education.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#projects">
              <button style={{
                background: "var(--accent)", color: "var(--bg)",
                padding: "0.8rem 2rem", borderRadius: "8px",
                fontWeight: 600, fontSize: "0.95rem", border: "none",
                cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                transition: "all 0.2s",
                boxShadow: "0 0 24px color-mix(in srgb, var(--accent) 45%, transparent)",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent2)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                View My Work
              </button>
            </a>
            <a href="#contact">
              <button style={{
                background: "transparent", color: "var(--text2)",
                border: "1px solid color-mix(in srgb, var(--accent) 35%, transparent)",
                padding: "0.8rem 2rem", borderRadius: "8px",
                fontWeight: 500, fontSize: "0.95rem",
                cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                transition: "all 0.2s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "color-mix(in srgb, var(--accent) 35%, transparent)"; e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Get in Touch
              </button>
            </a>
          </div>

          <div style={{
            display: "flex", gap: "3rem", marginTop: "4rem",
            paddingTop: "2.5rem", borderTop: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
            flexWrap: "wrap",
          }}>
            {[["4+", "Projects Built"], ["MERN", "Core Stack"], ["2024", "Started CS Degree"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", color: "var(--accent2)" }}>{num}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-photo-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="hero-photo-card" style={{ position: "relative", width: "280px", height: "340px" }}>
            {/* Gradient border */}
            <div style={{
              position: "absolute", inset: "-2px", borderRadius: "24px",
              background: "linear-gradient(135deg, var(--accent), var(--teal))",
              zIndex: 0, opacity: 0.7,
            }} />
            {/* Inner bg */}
            <div style={{ position: "absolute", inset: "2px", borderRadius: "22px", background: "var(--bg)", zIndex: 1 }} />

            <img
              src="/myphoto.jpeg"
              alt="Joan Munyi"
              style={{
                position: "absolute",
                inset: "2px",
                width: "calc(100% - 4px)",
                height: "calc(100% - 4px)",
                borderRadius: "22px",
                objectFit: "cover",
                zIndex: 2,
                mixBlendMode: "normal",
                filter: "saturate(1) contrast(1) brightness(1)",
                opacity: 1,
                transition: "all 0.4s",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
