"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const traits = ["Curiosa", "Visual", "Directa", "Detallista", "Creativa", "Proactiva"];

const stats = [
  { icon: "★", num: "10+", label: "Marcas trabajadas" },
  { icon: "∞", num: "∞",   label: "Ideas nuevas"      },
];

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        display:    "flex",
        alignItems: "stretch",
        overflow:   "hidden",
        background: "var(--blush)",
        minHeight:  "100vh",
        position:   "relative",
      }}
    >
      <div className="about-grid" style={{ width: "100%" }}>

        {/* ── LEFT — Imagen ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="about-image-col"
          style={{
            position:  "relative",
            overflow:  "hidden",
            minHeight: "300px",
          }}
        >
          {/* Blob rosa detrás */}
          <div style={{
            position:      "absolute",
            bottom:        "20%",
            left:          "50%",
            transform:     "translateX(-50%)",
            width:         "340px",
            height:        "340px",
            borderRadius:  "50%",
            background:    "rgba(252,187,226,0.55)",
            filter:        "blur(70px)",
            zIndex:        1,
            pointerEvents: "none",
          }} />
          {/* Overlay fade right */}
          <div style={{
            position:      "absolute",
            inset:         0,
            zIndex:        10,
            pointerEvents: "none",
            background:    "linear-gradient(to right, transparent 60%, var(--blush) 100%)",
          }} />
          <Image
            src="/IMG_3772.jpeg"
            alt="Melani Nazario"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{
              objectFit:      "cover",
              objectPosition: "center top",
              zIndex:         5,
            }}
            priority
          />
        </motion.div>

        {/* ── RIGHT — Contenido ── */}
        <div style={{
          display:        "flex",
          flexDirection:  "column",
          justifyContent: "center",
          padding:        "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 80px) clamp(40px, 8vw, 80px) clamp(20px, 5vw, 60px)",
          gap:            "28px",
        }}>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: "14px" }}
          >
            <span style={{ width: "28px", height: "1px", background: "var(--pink-deep)", display: "block" }} />
            <span style={{
              fontFamily:    "var(--font-body)",
              fontSize:      "10px",
              letterSpacing: "0.32em",
              textTransform: "uppercase" as const,
              color:         "var(--noir-40)",
            }}>
              Sobre mí
            </span>
          </motion.div>

          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily:    "var(--font-display)",
              color:         "var(--noir)",
              fontSize:      "clamp(2rem, 5vw, 3.4rem)",
              fontWeight:    600,
              lineHeight:    1.08,
              letterSpacing: "-0.025em",
              margin:        0,
            }}
          >
            Más que{" "}
            <em style={{ color: "var(--pink-deep)", fontStyle: "italic", fontWeight: 400 }}>
              publicar,
            </em>
            <br />
            conectar.
          </motion.h2>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize:   "14.5px",
              lineHeight: 1.75,
              color:      "var(--noir)",
              opacity:    0.7,
              maxWidth:   "400px",
              fontWeight: 300,
              margin:     0,
            }}
          >
            Hago contenido porque creo que cada{" "}
            <strong style={{ color: "var(--noir)", opacity: 1, fontWeight: 600 }}>
              historia bien contada
            </strong>{" "}
            puede cambiar cómo alguien ve el mundo — o simplemente su próxima{" "}
            <strong style={{ color: "var(--noir)", opacity: 1, fontWeight: 600 }}>
              decisión de compra.
            </strong>
          </motion.p>

          {/* Traits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", flexWrap: "wrap" as const, gap: "10px" }}
          >
            {traits.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.35 + i * 0.08 }}
                whileHover={{ background: "var(--pink-deep)", transition: { duration: 0.2 } }}
                style={{
                  fontFamily:    "var(--font-body)",
                  fontSize:      "13px",
                  padding:       "8px 22px",
                  borderRadius:  "999px",
                  border:        "1.5px solid var(--pink-deep)",
                  color:         "var(--noir)",
                  cursor:        "default",
                  letterSpacing: "0.01em",
                  background:    "transparent",
                }}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{ display: "flex", gap: "clamp(20px, 5vw, 40px)", marginTop: "8px", flexWrap: "wrap" as const }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4 }}
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <div style={{
                  width:          "48px",
                  height:         "48px",
                  borderRadius:   "50%",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  background:     "var(--pink-deep)",
                  color:          "var(--noir)",
                  fontSize:       "18px",
                  flexShrink:     0,
                }}>
                  {s.icon}
                </div>
                <div>
                  <p style={{
                    fontFamily: "var(--font-display)",
                    fontSize:   "1.8rem",
                    fontWeight: 600,
                    color:      "var(--noir)",
                    margin:     0,
                    lineHeight: 1,
                  }}>
                    {s.num}
                  </p>
                  <p style={{
                    fontFamily:    "var(--font-body)",
                    fontSize:      "9px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase" as const,
                    color:         "var(--noir-40)",
                    margin:        "6px 0 0",
                  }}>
                    {s.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 45% 55%;
          min-height: 100vh;
        }
        .about-image-col {
          min-height: 100vh;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            min-height: unset;
          }
          .about-image-col {
            min-height: 55vw !important;
            max-height: 420px;
          }
        }
      `}</style>
    </section>
  );
}