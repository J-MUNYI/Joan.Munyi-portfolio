import { useState, useEffect } from "react";

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="site-nav" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1rem 2.5rem",
      background: scrolled
        ? (isDark ? "rgba(10,10,15,0.92)" : "rgba(250,250,247,0.92)")
        : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid color-mix(in srgb, var(--accent) 26%, transparent)" : "1px solid transparent",
      transition: "all 0.3s",
    }}>
      <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem", color: "var(--accent)" }}>
        JNM.
      </span>

      <button
        className="site-nav-toggle"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        style={{
          display: "none",
          background: "var(--surface)",
          color: "var(--text)",
          border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
          borderRadius: "10px",
          padding: "6px 10px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`site-nav-links ${menuOpen ? "open" : ""}`} style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["about", "projects", "experience", "certificates", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "0.85rem", fontWeight: 500,
              color: isDark ? "var(--text2)" : "var(--text2)",
              textTransform: "uppercase", letterSpacing: "0.1em",
              textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--text2)")}
          >
            {id}
          </a>
        ))}

        <button
          onClick={toggleTheme}
          style={{
            background: "var(--surface)",
            border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
            borderRadius: "50px", padding: "6px 14px", cursor: "pointer",
            fontSize: "0.8rem", color: "var(--text2)",
            fontFamily: "'Outfit', sans-serif", transition: "all 0.2s",
            display: "flex", alignItems: "center", gap: "6px",
          }}
        >
          {isDark ? "☀ Light" : "☾ Dark"}
        </button>
      </div>
    </nav>
  );
}
