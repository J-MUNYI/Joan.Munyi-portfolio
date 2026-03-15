export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        fontSize: "0.8rem",
        color: "var(--text3)",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Serif Display', serif",
          color: "var(--accent2)",
          fontSize: "0.95rem",
        }}
      >
        Joan Munyi.
      </span>
      <span>Built with React · Tailwind CSS · MERN Stack</span>
      <span>Nairobi, Kenya · 2026</span>
    </footer>
  );
}