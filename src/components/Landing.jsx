export default function Landing({ onEnter }) {
  return (
    <div className="landing-screen" style={{
      position: "fixed", inset: 0, zIndex: 999,
      backgroundColor: "var(--bg)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      transition: "opacity 0.8s ease",
    }}>
      <h1 className="landing-title" style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(2.5rem, 8vw, 6rem)",
        color: "var(--text)", letterSpacing: "-0.02em",
        textAlign: "center",
        animation: "landingFadeUp 1s ease forwards", opacity: 0,
      }}>
       Hello, I am <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Ngatha Munyi.</em>
      </h1>

      <p style={{
        fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
        color: "var(--text3)", marginTop: "1rem",
        fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em",
        animation: "landingFadeUp 1s ease 0.3s forwards", opacity: 0,
        textAlign: "center",
      }}>
        {"Welcome to my portfolio website"}
      </p>

      <div style={{
        width: "60px", height: "2px", background: "var(--accent)",
        margin: "2rem auto 0",
        animation: "landingExpand 1s ease 0.6s forwards",
        transform: "scaleX(0)", transformOrigin: "left",
      }} />

      <button
        onClick={onEnter}
        style={{
          marginTop: "3rem",
          background: "transparent",
          border: "1px solid color-mix(in srgb, var(--accent) 45%, transparent)",
          color: "var(--accent)", padding: "12px 32px",
          borderRadius: "50px", fontFamily: "'Outfit', sans-serif",
          fontSize: "0.9rem", fontWeight: 500,
          cursor: "pointer", letterSpacing: "0.05em",
          animation: "landingFadeUp 1s ease 0.9s forwards", opacity: 0,
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "color-mix(in srgb, var(--accent) 16%, transparent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "color-mix(in srgb, var(--accent) 45%, transparent)"; }}
      >
        Enter →
      </button>
    </div>
  );
}
