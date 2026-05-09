export default function ExploreCard({ icon: Icon, title, desc }) {
  return (
    <div
      className="explore-card"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "1.2rem 1.25rem",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "0.75rem" }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "rgba(212, 175, 55, 0.10)",
            border: "1px solid rgba(212, 175, 55, 0.22)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent)",
            flexShrink: 0,
          }}
        >
          {Icon ? <Icon size={18} /> : null}
        </div>

        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem", color: "var(--text)", lineHeight: 1.2 }}>
          {title}
        </div>
      </div>

      <p
        style={{
          fontSize: "0.88rem",
          color: "var(--text2)",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}
