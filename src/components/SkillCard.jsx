export default function SkillCard({ skill }) {
  return (
    <div
      className="skill-card"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "0.85rem 1rem",
        transition: "all 0.2s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: 999,
            background: "var(--accent)",
            marginTop: "0.35rem",
            boxShadow: "0 0 0 2px color-mix(in srgb, var(--accent) 18%, transparent)",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.92rem",
            color: "var(--text2)",
            lineHeight: 1.5,
          }}
        >
          {skill}
        </div>
      </div>
    </div>
  );
}
