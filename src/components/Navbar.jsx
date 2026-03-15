export default function Navbar({ isDark, toggleTheme }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1rem 2.5rem",
      background: isDark ? "rgba(10,10,15,0.85)" : "rgba(250,250,247,0.9)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border)",
      transition: "background 0.3s",
    }}>
      <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem", color: "var(--accent2)" }}>
        JM.
      </span>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["about", "projects", "experience", "contact"].map((id) => (
          <a key={id} href={`#${id}`} style={{
            fontSize: "0.85rem", fontWeight: 500, color: "var(--text2)",
            textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none",
          }}
            onMouseEnter={(e) => (e.target.style.color = "var(--accent2)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--text2)")}
          >
            {id}
          </a>
        ))}
        <button onClick={toggleTheme} style={{
          background: "var(--surface)", border: "1px solid var(--border2)",
          borderRadius: "50px", padding: "6px 14px", cursor: "pointer",
          fontSize: "0.8rem", color: "var(--text2)", fontFamily: "'Outfit', sans-serif",
          display: "flex", alignItems: "center", gap: "6px",
        }}>
          {isDark ? "☀ Light" : "☾ Dark"}
        </button>
      </div>
    </nav>
  );
}