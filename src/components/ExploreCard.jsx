export default function ExploreCard({ icon: Icon, title, desc }) {
  return (
    <div
      className="explore-card"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "0.85rem 1rem",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <div
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
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {Icon ? (
              <span style={{ color: "var(--accent)", display: "inline-flex" }}>
                <Icon size={18} />
              </span>
            ) : null}
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.92rem",
                color: "var(--text2)",
                lineHeight: 1.5,
              }}
            >
              {title}
            </div>
          </div>

          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--text3)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
