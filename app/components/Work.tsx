"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    num: "01",
    brand: "New Atlex - Moda y Calzado",
    role: "Creadora de Contenido - CM @newatlexseven",
    result:
      "Rediseñé la estrategia visual de TikTok mediante contenido enfocado en storytelling y presentación estratégica del producto, aumentando el engagement de 1.2% a 5% en solo 2 meses.",
    tags: ["Guiones", "Grabación", "Edición"],
    metric: "5%",
    metricLabel: "Engagement",
    image: "/Newatlex.mp4",
  },
  {
    id: 2,
    num: "02",
    brand: "Klandestino Producciones",
    role: "Asistente de Producción - Script",
    result:
      "Participé en la producción de un documental sobre una comunidad Shipiba, desempeñando el rol de Asistente de Producción y Script. El proyecto fue publicado en YouTube, alcanzando más de 1K visualizaciones",
    tags: ["Documental", "Productora", "Youtube"],
    metric: "1K",
    metricLabel: "Views",
    image: "/Klandestino.mp4",
  },
  {
    id: 3,
    num: "03",
    brand: "Odontomania - Clinica Dental",
    role: "Creadora de Contenido - Editora Visual",
    result:
      "Potencié la presencia digital de Odontomanía con contenido estratégico y edición enfocada en alcance y conversión.",
    tags: ["Edición", "Diseño", "Creación de contenido Tiktok - IG"],
    metric: "456 mil visualizaciones ",
    metricLabel: "visualizaciones en TikTok",
    image: "/Odontomania.mp4",
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [hovered, setHovered] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section
      id="work"
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--noir)",
        minHeight: "100vh",
      }}
    >
      {/* Blob decorativo top-right */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(212,83,126,0.18)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 80px",
        }}
      >
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "1px",
                  background: "var(--pink-deep)",
                  display: "block",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase" as const,
                  color: "rgba(252,187,226,0.5)",
                }}
              >
                Casos de trabajo
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--blush)",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Lo que
              <br />
              <em style={{ color: "var(--pink)", fontStyle: "italic" }}>
                he resuelto.
              </em>
            </h2>
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "rgba(254,231,245,0.5)",
              maxWidth: "240px",
              fontWeight: 300,
              margin: 0,
              flexShrink: 0,
            }}
          >
            Proyectos reales con marcas reales. Cada uno con un reto específico
            y resultados medibles.
          </p>
        </motion.div>

        {/* ── Project cards ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + 0.1 * i }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                borderRadius: "12px",
                border: "1px solid rgba(252,187,226,0.10)",
                background:
                  hovered === p.id
                    ? "rgba(252,187,226,0.05)"
                    : "rgba(26,0,15,0.4)",
                overflow: "hidden",
                cursor: "default",
                transition: "background 0.3s ease",
                display: "grid",
                gridTemplateColumns: "90px 1fr 1fr auto auto",
                gap: "24px",
                alignItems: "center",
                padding: "28px 28px",
              }}
            >
              {/* Número */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 300,
                    color: "var(--pink-deep)",
                    margin: 0,
                    lineHeight: 1,
                    opacity: 0.7,
                  }}
                >
                  {p.num}
                </p>

                <div
                  style={{
                    width: "24px",
                    height: "1px",
                    background: "var(--pink-deep)",
                    marginTop: "8px",
                    opacity: 0.4,
                  }}
                />
              </div>

              {/* Brand + role */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "var(--blush)",
                    margin: "0 0 6px",
                    lineHeight: 1.2,
                  }}
                >
                  {p.brand}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "lowercase" as const,
                    color: "var(--pink-deep)",
                    margin: 0,
                    opacity: 0.8,
                  }}
                >
                  {p.role}
                </p>
              </div>

              {/* Result */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "rgba(254,231,245,0.55)",
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                {p.result}
              </p>

              {/* Metric + tags */}
              <div style={{ minWidth: "140px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      fontWeight: 300,
                      color: "var(--pink)",
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {p.metric}
                  </p>

                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "var(--pink-deep)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: "var(--noir)", fontSize: "12px" }}>
                      ↗
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase" as const,
                    color: "rgba(252,187,226,0.45)",
                    margin: "0 0 10px",
                  }}
                >
                  {p.metricLabel}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap" as const,
                    gap: "6px",
                  }}
                >
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "10px",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        border: "1px solid rgba(252,187,226,0.22)",
                        color: "rgba(252,187,226,0.55)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Thumbnail */}
              <div
                onClick={() => {
                  if (p.image.endsWith(".mp4")) {
                    setActiveVideo(p.image);
                  }
                }}
                style={{
                  width: "160px",
                  height: "100px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                  background: "rgba(252,187,226,0.08)",
                  cursor: p.image.endsWith(".mp4") ? "pointer" : "default",
                }}
              >
                {p.image.endsWith(".mp4") ? (
                  <video
                    src={p.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Image
                    src={p.image}
                    alt={p.brand}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                )}

                {/* Play button overlay */}
                {p.image.endsWith(".mp4") && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(26,0,15,0.35)",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "rgba(232,160,200,0.25)",
                        border: "1.5px solid rgba(252,187,226,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--blush)",
                          fontSize: "12px",
                          marginLeft: "2px",
                        }}
                      >
                        ▶
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIDEO MODAL */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "20px",
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "100%",
                  maxWidth: "900px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  background: "#000",
                  position: "relative",
                }}
              >
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />

                <button
                  onClick={() => setActiveVideo(null)}
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "rgba(255,255,255,0.15)",
                    color: "white",
                    fontSize: "18px",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}