export default function Footer() {
  return (
    <footer className="section-pad footer-shell" style={{
      borderTop: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
      padding: "2rem 2.5rem",
      display: "flex", justifyContent: "center",
      alignItems: "center", flexWrap: "wrap",
      gap: "0.5rem", fontSize: "0.82rem",
      color: "var(--text3)", textAlign: "center",
      backgroundColor: "var(--bg)",
    }}>
      <span>© 2025 Joan Munyi. All rights reserved.</span>
      <span style={{ margin: "0 6px", color: "var(--border)" }}>·</span>
      <span>
        A <strong style={{ color: "var(--accent)" }}>Muny1verse</strong> creation{" "}
        <span style={{ color: "var(--text)" }}>♥</span>
      </span>
    </footer>
  );
}
