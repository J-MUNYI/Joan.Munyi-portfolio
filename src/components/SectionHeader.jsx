export default function SectionHeader({ label, title, description }) {
  return (
    <div
      className="fade-up"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2.5rem",
        marginBottom: "3rem",
      }}
    >
      {label ? (
        <div
          style={{
            fontSize: "0.75rem",
            fontFamily: "'DM Mono', monospace",
            color: "var(--accent2)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              width: 24,
              height: 1,
              background: "var(--accent2)",
              display: "inline-block",
            }}
          />
          {label}
        </div>
      ) : null}

      {title ? (
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--text)",
            marginBottom: "1rem",
          }}
        >
          {title}
        </h2>
      ) : null}

      {description ? (
        <p
          style={{
            fontSize: "1rem",
            color: "var(--text2)",
            maxWidth: "650px",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
