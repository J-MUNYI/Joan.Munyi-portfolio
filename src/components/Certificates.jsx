import { useState } from "react";
import { FaGraduationCap, FaCode, FaExternalLinkAlt, FaTimes, FaCheckCircle } from "react-icons/fa";



const certs = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    name: "International Computer Driving License (ICDL)",
    issuer: "Equip Africa Institute",
    date: "2024",
    image: "/certificates/cert-1.jpeg",
    color: "#d4af37",
  },
  {
    id: 2,
    icon: <FaCode />,
    name: "Web Development technologies",
    issuer: "Power Learn Project",
    date: "2025",
    image: "/certificates/cert-2.jpeg",
    color: "#f5a623",
  },

  {
    id: 3,
    icon: <FaCode />,
    name: "Web 3 certificate of participation",
    issuer: "Internet Computer",
    date: "2024",
    image: "/certificates/cert-3.jpeg",
    color: "#f5a623",
  },
 
  
];

// Duplicate for seamless infinite scroll
const allCerts = [...certs, ...certs];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certificates"
      className="fade-up"
      style={{ background: "var(--bg2)", padding: "6rem 0" }}
    >
      {/* Section header */}
      <div className="cert-shell" style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "0 2.5rem", marginBottom: "3rem",
      }}>
        <div style={{
          fontSize: "0.75rem", fontFamily: "'DM Mono', monospace",
          color: "var(--accent2)", textTransform: "uppercase",
          letterSpacing: "0.15em", marginBottom: "0.75rem",
          display: "flex", alignItems: "center", gap: "8px",
        }}>
          <span style={{ width: 24, height: 1, background: "var(--accent2)", display: "inline-block" }} />
          Certificates
        </div>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "var(--text)", marginBottom: "1rem",
        }}>
          What I've Earned
        </h2>
        <p style={{
          fontSize: "1rem", color: "var(--text2)",
          maxWidth: "500px", lineHeight: 1.7,
        }}>
          Click any certificate to view it in full. Hover the track to pause.
        </p>
      </div>

      {/* ── SCROLLING TRACK ─────────────────────────────────────── */}
      <div style={{ overflow: "hidden", position: "relative", padding: "1rem 0" }}>

        {/* Left fade edge */}
        <div style={{
          position: "absolute", top: 0, bottom: 0, left: 0, width: "100px",
          background: "linear-gradient(90deg, var(--bg2), transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />

        {/* Right fade edge */}
        <div style={{
          position: "absolute", top: 0, bottom: 0, right: 0, width: "100px",
          background: "linear-gradient(-90deg, var(--bg2), transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />

        {/* Scrolling row */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            animation: "certScrollX 28s ease-in-out infinite alternate-reverse",
            width: "max-content",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {allCerts.map((cert, i) => (
            <div
              key={i}
              className="cert-card"
              onClick={() => setSelected(cert)}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                overflow: "hidden",
                minWidth: "260px", maxWidth: "260px",
                flexShrink: 0, cursor: "pointer",
                transition: "all 0.3s ease",
                animation: `certPopIn 0.5s ease ${(i % 6) * 0.08}s backwards`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cert.color;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 0 0 1px ${cert.color}30, 0 12px 32px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Certificate image */}
              <div style={{
                width: "100%", height: "155px",
                background: "var(--bg)", overflow: "hidden",
                position: "relative",
              }}>
                <img
                  src={cert.image}
                  alt={cert.name}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.style.display = "flex";
                    e.currentTarget.parentElement.style.alignItems = "center";
                    e.currentTarget.parentElement.style.justifyContent = "center";
                    e.currentTarget.parentElement.style.fontSize = "3.5rem";
                    e.currentTarget.parentElement.style.color = cert.color;
                    e.currentTarget.parentElement.style.opacity = "0.3";
                  }}
                />

                {/* Click to view overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(0,0,0,0.6)",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: "6px",
                  opacity: 0, transition: "opacity 0.3s",
                  color: cert.color, fontSize: "0.82rem",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.05em",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <FaExternalLinkAlt size={12} />
                  Click to view
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "1.1rem 1.25rem" }}>

                {/* Title row with icon */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
                  <span style={{
                    fontSize: "1.3rem", color: cert.color,
                    marginTop: "2px", flexShrink: 0,
                  }}>
                    {cert.icon}
                  </span>
                  <div style={{
                    fontSize: "0.88rem", fontWeight: 600,
                    color: "var(--text)", lineHeight: 1.3,
                    fontFamily: "'DM Serif Display', serif",
                  }}>
                    {cert.name}
                  </div>
                </div>

                {/* Issuer row with icon */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  fontSize: "0.75rem", color: "var(--accent)",
                  fontFamily: "'DM Mono', monospace", marginBottom: "6px",
                }}>
                  <span style={{ fontSize: "0.85rem" }}>{cert.issuerIcon}</span>
                  {cert.issuer}
                </div>

                {/* Date */}
                <div style={{
                  fontSize: "0.72rem", color: "var(--text3)", marginBottom: "10px",
                }}>
                  {cert.date}
                </div>

                {/* Verified badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "5px",
                  fontSize: "0.65rem", fontFamily: "'DM Mono', monospace",
                  padding: "3px 10px", borderRadius: "50px",
                  background: "rgba(34,211,122,0.1)", color: "#22d37a",
                  border: "1px solid rgba(34,211,122,0.25)",
                }}>
                  <FaCheckCircle size={9} />
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ──────────────────────────────────────── */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(0,0,0,0.88)",
            backdropFilter: "blur(10px)",
            display: "flex", alignItems: "center",
            justifyContent: "center", padding: "2rem",
            animation: "landingFadeUp 0.25s ease forwards",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="cert-modal"
            style={{
              background: "var(--surface)",
              border: "1px solid color-mix(in srgb, var(--accent) 45%, transparent)",
              borderRadius: "18px", overflow: "hidden",
              maxWidth: "820px", width: "100%",
              maxHeight: "90vh", display: "flex",
              flexDirection: "column",
              boxShadow: "var(--shadow)",
            }}
          >
            {/* Modal top bar */}
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "center", padding: "1rem 1.5rem",
              borderBottom: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: "10px",
                fontSize: "1.3rem", color: selected.color,
              }}>
                {selected.icon}
                <span style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1rem", color: "var(--text)",
                }}>
                  {selected.name}
                </span>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "transparent", border: "none",
                  color: "var(--text3)", cursor: "pointer",
                  fontSize: "1rem", padding: "6px",
                  transition: "color 0.2s", display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text3)")}
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Certificate image */}
            <div style={{
              flex: 1, background: "var(--bg)",
              display: "flex", alignItems: "center",
              justifyContent: "center", minHeight: "380px",
              overflow: "hidden",
            }}>
              <img
                src={selected.image}
                alt={selected.name}
                style={{
                  width: "100%", height: "100%",
                  objectFit: "contain",
                  maxHeight: "500px",
                }}
                onError={(e) => {
                  e.currentTarget.parentElement.innerHTML = `
                    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;color:var(--text3);font-family:'DM Mono',monospace;font-size:0.82rem;text-align:center;padding:2rem">
                      <span style="font-size:4rem;opacity:0.25">${selected.id}</span>
                      <span>Image not found.<br/>Add it to public/certificates/</span>
                    </div>`;
                }}
              />
            </div>

            {/* Modal footer */}
            <div style={{
              padding: "1.25rem 1.5rem",
              borderTop: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
              display: "flex", justifyContent: "space-between",
              alignItems: "center", flexWrap: "wrap", gap: "1rem",
              background: "var(--bg3)",
            }}>
              {/* Issuer info */}
              <div style={{
                display: "flex", alignItems: "center", gap: "8px",
                fontSize: "0.85rem", color: "var(--text2)",
              }}>
                <span style={{ fontSize: "1rem", color: "var(--accent)" }}>
                  {selected.issuerIcon}
                </span>
                <span style={{ color: "var(--accent)", fontFamily: "'DM Mono', monospace" }}>
                  {selected.issuer}
                </span>
                <span style={{ color: "var(--text3)" }}>·</span>
                <span style={{ color: "var(--text3)", fontSize: "0.78rem" }}>
                  {selected.date}
                </span>
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

                {/* Verify button — only if verifyUrl exists */}
                {selected.verifyUrl && (
                  <a
                    href={selected.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      fontSize: "0.82rem", color: "#22d37a",
                      textDecoration: "none", padding: "8px 16px",
                      borderRadius: "8px",
                      border: "1px solid rgba(34,211,122,0.3)",
                      background: "rgba(34,211,122,0.08)",
                      fontFamily: "'DM Mono', monospace",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(34,211,122,0.16)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(34,211,122,0.08)")}
                  >
                    <FaCheckCircle size={12} />
                    Verify Certificate
                    <FaExternalLinkAlt size={10} />
                  </a>
                )}

                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    fontSize: "0.82rem", color: "var(--text2)",
                    padding: "8px 16px", borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "transparent", cursor: "pointer",
                    fontFamily: "'DM Mono', monospace", transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "var(--text2)";
                  }}
                >
                  <FaTimes size={12} />
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
