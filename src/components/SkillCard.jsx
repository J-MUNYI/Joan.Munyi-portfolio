export default function SkillCard({ skill }) {
  return (
    <div
      className="skill-card"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "1.1rem 1.2rem",
        transition: "all 0.2s ease",
        boxShadow: "none",
      }}
    >
      <div
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1.2rem",
          color: "var(--text)",
          marginBottom: "0.35rem",
        }}
      >
        {skill}
      </div>
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.72rem",
          color: "var(--text3)",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
        }}
      >
        Active learning
      </div>
    </div>
  );
}
