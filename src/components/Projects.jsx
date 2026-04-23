import { useRef } from "react";

const projects = [
  {
    id: "agrifine", initials: "AG", name: "Agrifine Consulting",
    statusLabel: "Live", isLive: true,
    statusColor: "#22d37a",
    statusBg: "rgba(34,211,122,0.08)", statusBorder: "rgba(34,211,122,0.3)",
    iconBg: "rgba(34,211,122,0.12)", iconColor: "#22d37a",
    desc: "Professional website for an agricultural consulting firm. Responsive multi-page site covering services, team, and client contact — delivered end-to-end.",
    tags: ["React", "Node.js", "Express", "MongoDB", "CSS3"],
    liveUrl: "https://agrifine-consulting-limited.vercel.app/",
    repoUrl: "https://github.com/J-MUNYI/Agrifine-.git",
  },
  {
    id: "budgetzen", initials: "BZ", name: "BudgetZen",
    statusLabel: "Live", isLive: true,
    statusColor: "#22d37a",
    statusBg: "rgba(34,211,122,0.08)", statusBorder: "rgba(34,211,122,0.3)",
    iconBg: "rgba(34,211,122,0.12)", iconColor: "#22d37a",
    desc: "Personal finance app built for young Kenyans to track income, set monthly budgets, and visualise spending by category.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Chart.js"],
    liveUrl: "https://budget-zen-zeta.vercel.app/",
    repoUrl: "https://github.com/J-MUNYI/Budget-zen",
  },
  {
    id: "supertaka", initials: "ST", name: "SuperTaka",
    statusLabel: "In Progress", isLive: false,
    statusColor: "#00d4c8",
    statusBg: "rgba(0,212,200,0.08)", statusBorder: "rgba(0,212,200,0.3)",
    iconBg: "rgba(0,212,200,0.1)", iconColor: "#00d4c8",
    desc: "Environmental awareness app that helps users log daily habits, track their carbon footprint, and receive personalised sustainability tips.",
    tags: ["React", "Express", "MongoDB", "Node.js", "Chart.js"],
    liveUrl: null,
    repoUrl: "https://github.com/J-MUNYI",
  },
  {
    id: "elimu", initials: "ET", name: "Elimu Track",
    statusLabel: "In Progress", isLive: false,
    statusColor: "#f5a623",
    statusBg: "rgba(245,166,35,0.08)", statusBorder: "rgba(245,166,35,0.3)",
    iconBg: "rgba(245,166,35,0.1)", iconColor: "#f5a623",
    desc: "Student progress tracker for learners and educators — log grades, set goals, and visualise academic performance. Built with the CBC curriculum in mind.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Express"],
    liveUrl: null,
    repoUrl: "https://github.com/J-MUNYI",
  },
];

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mx", ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + "%");
    cardRef.current.style.setProperty("--my", ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + "%");
  };

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove}
      style={{
        background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: "14px", padding: "1.75rem",
        transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "color-mix(in srgb, var(--accent) 40%, transparent)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Spotlight glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at var(--mx,50%) var(--my,50%), color-mix(in srgb, var(--accent) 24%, transparent), transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* Card top */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
        <div style={{
          width: 44, height: 44, borderRadius: "10px",
          background: project.iconBg, color: project.iconColor,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "0.85rem", fontWeight: "bold",
          fontFamily: "'DM Serif Display', serif",
        }}>
          {project.initials}
        </div>
        <span style={{
          fontSize: "0.7rem", fontFamily: "'DM Mono', monospace",
          padding: "4px 10px", borderRadius: "50px",
          border: `1px solid ${project.statusBorder}`,
          background: project.statusBg, color: project.statusColor,
        }}>
          {project.statusLabel}
        </span>
      </div>

      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem", color: "var(--text)", marginBottom: "0.5rem" }}>
        {project.name}
      </div>
      <p style={{ fontSize: "0.88rem", color: "var(--text2)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
        {project.desc}
      </p>

      {/* Tech tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.25rem" }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: "0.7rem", fontFamily: "'DM Mono', monospace",
            background: "var(--bg3)", border: "1px solid var(--border)",
            padding: "3px 10px", borderRadius: "4px", color: "var(--text3)",
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Card footer */}
      <div style={{
        display: "flex", gap: "8px",
        paddingTop: "1rem", borderTop: "1px solid var(--border)",
        flexWrap: "wrap",
      }}>

        {/* Live link — only shown if project is live */}
        {project.isLive && project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "0.8rem", color: "#22d37a", textDecoration: "none",
              padding: "6px 14px", borderRadius: "6px",
              border: "1px solid rgba(34,211,122,0.3)",
              background: "rgba(34,211,122,0.06)", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(34,211,122,0.14)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(34,211,122,0.06)"; }}
          >
            Live Site ↗
          </a>
        ) : (
          <span style={{
            fontSize: "0.8rem", color: "var(--text3)",
            padding: "6px 14px", borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(255,255,255,0.02)",
            fontFamily: "'DM Mono', monospace",
          }}>
            Coming soon
          </span>
        )}

        {/* GitHub link — always shown */}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: "0.8rem", color: "var(--accent)", textDecoration: "none",
            padding: "6px 14px", borderRadius: "6px",
            border: "1px solid color-mix(in srgb, var(--accent) 45%, transparent)",
            background: "color-mix(in srgb, var(--accent) 14%, transparent)", transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "color-mix(in srgb, var(--accent) 24%, transparent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "color-mix(in srgb, var(--accent) 14%, transparent)"; }}
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="fade-up section-pad" style={{ background: "var(--bg2)", padding: "6rem 2.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          fontSize: "0.75rem", fontFamily: "'DM Mono', monospace",
          color: "var(--accent2)", textTransform: "uppercase",
          letterSpacing: "0.15em", marginBottom: "0.75rem",
          display: "flex", alignItems: "center", gap: "8px",
        }}>
          <span style={{ width: 24, height: 1, background: "var(--accent2)", display: "inline-block" }} />
          Projects
        </div>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--text)", marginBottom: "1rem" }}>
          Things I've Built
        </h2>
        <p style={{ fontSize: "1rem", color: "var(--text2)", maxWidth: "500px", marginBottom: "3rem", lineHeight: 1.7 }}>
          A mix of client work and personal projects — each one solving a problem I actually care about.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
