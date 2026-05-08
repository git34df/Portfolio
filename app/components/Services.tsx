"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    icon: "✦",
    num: "01",
    title: "Community Manager",
    desc: "Estrategia y ejecución de contenido para construir comunidad, aumentar alcance, conectar con la audiencia y potenciar marcas a través de redes sociales.",
  },
  {
    icon: "◈",
    num: "02",
    title: "Creadora de Ideas",
    desc: "Desarrollo de conceptos creativos desde la idea inicial hasta la producción visual y audiovisual para contenido digital.",
  },
  {
    icon: "▸",
    num: "03",
    title: "Guiones",
    desc: "Creación de estructuras y narrativas estratégicas para videos, campañas y contenido en redes sociales.",
  },
  {
    icon: "⊞",
    num: "04",
    title: "Grabaciones",
    desc: "Producción de contenido audiovisual con enfoque visual, dinámico y coherente con la identidad de la marca.",
  },
  {
    icon: "◻",
    num: "05",
    title: "Edicion",
    desc: "Edición de videos con ritmo, storytelling y tendencias digitales para generar impacto y retención.",
  },
  {
    icon: "⌘",
    num: "06",
    title: "Manejo de Redes Sociales (Publicidad)",
    desc: "Gestión de plataformas digitales y campañas publicitarias para aumentar visibilidad, interacción y crecimiento de marca.",
  },
];

export default function Services() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      style={{
        position:   "relative",
        overflow:   "hidden",
        background: "var(--blush-pure)",
        minHeight:  "100vh",
        display:    "flex",
        alignItems: "center",
      }}
    >
      <div style={{
        width:    "100%",
        maxWidth: "1000px",
        margin:   "0 auto",
        padding:  "80px 80px",
      }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            display:        "flex",
            alignItems:     "flex-end",
            justifyContent: "space-between",
            gap:            "40px",
            marginBottom:   "48px",
          }}
        >
          <div>
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <span style={{ width: "28px", height: "1px", background: "var(--pink-deep)", display: "block" }} />
              <span style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "10px",
                letterSpacing: "0.32em",
                textTransform: "uppercase" as const,
                color:         "var(--noir-40)",
              }}>
                Servicios
              </span>
            </div>

            {/* Título */}
            <h2 style={{
              fontFamily:    "var(--font-display)",
              color:         "var(--noir)",
              fontSize:      "clamp(2.4rem, 4vw, 3.6rem)",
              fontWeight:    300,
              lineHeight:    1.08,
              letterSpacing: "-0.025em",
              margin:        0,
            }}>
              Qué puedo<br />
              <em style={{ color: "var(--pink-deep)", fontStyle: "italic" }}>hacer por ti.</em>
            </h2>
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "8px",
              padding:        "12px 24px",
              background:     "var(--noir)",
              color:          "var(--blush)",
              fontFamily:     "var(--font-body)",
              fontSize:       "11px",
              fontWeight:     500,
              letterSpacing:  "0.15em",
              textTransform:  "uppercase" as const,
              textDecoration: "none",
              flexShrink:     0,
              alignSelf:      "flex-end",
            }}
          >
            Hablemos →
          </motion.a>
        </motion.div>

        {/* ── Grid de servicios ── */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          border:              "1px solid rgba(26,0,15,0.08)",
        }}>
          {services.map((s, i) => {
            const isHovered = hovered === s.num;
            // borde derecho: no en la última columna de cada fila
            const noBorderRight = (i + 1) % 3 === 0;
            // borde bottom: no en la última fila
            const noBorderBottom = i >= services.length - 3;

            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.07 * i }}
                onMouseEnter={() => setHovered(s.num)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position:      "relative",
                  padding:       "36px 32px",
                  cursor:        "default",
                  background:    isHovered ? "var(--pink)" : "transparent",
                  transition:    "background 0.3s ease",
                  borderRight:   noBorderRight  ? "none" : "1px solid rgba(26,0,15,0.08)",
                  borderBottom:  noBorderBottom ? "none" : "1px solid rgba(26,0,15,0.08)",
                }}
              >
                {/* Número top-right */}
                <span style={{
                  position:      "absolute",
                  top:           "20px",
                  right:         "20px",
                  fontFamily:    "var(--font-body)",
                  fontSize:      "11px",
                  color:         "rgba(26,0,15,0.12)",
                  letterSpacing: "0.05em",
                }}>
                  {s.num}
                </span>

                {/* Ícono */}
                <span style={{
                  display:     "block",
                  fontSize:    "18px",
                  marginBottom:"20px",
                  color:       isHovered ? "var(--noir)" : "var(--pink-deep)",
                  transition:  "color 0.3s ease",
                }}>
                  {s.icon}
                </span>

                {/* Título */}
                <h3 style={{
                  fontFamily:    "var(--font-display)",
                  fontSize:      "1.2rem",
                  fontWeight:    600,
                  color:         "var(--noir)",
                  margin:        "0 0 12px",
                  lineHeight:    1.2,
                  letterSpacing: "-0.01em",
                }}>
                  {s.title}
                </h3>

                {/* Descripción */}
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   "13px",
                  lineHeight: 1.75,
                  color:      "var(--noir)",
                  opacity:    isHovered ? 0.75 : 0.55,
                  margin:     0,
                  fontWeight: 300,
                  transition: "opacity 0.3s ease",
                }}>
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}