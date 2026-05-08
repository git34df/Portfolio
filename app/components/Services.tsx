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
    title: "Edición",
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
      <div
        className="services-container"
        style={{
          width:    "100%",
          maxWidth: "1000px",
          margin:   "0 auto",
          /* mobile: 40px 20px | desktop: 80px */
          padding:  "clamp(40px, 8vw, 80px) clamp(20px, 6vw, 80px)",
        }}
      >

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="services-header"
          style={{
            display:        "flex",
            /* mobile: column; desktop: row (via CSS) */
            flexDirection:  "column",
            gap:            "clamp(20px, 4vw, 40px)",
            marginBottom:   "clamp(32px, 5vw, 48px)",
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
              fontSize:      "clamp(2.2rem, 5vw, 3.6rem)",
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
            className="services-cta"
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
              /* en mobile ocupa el ancho del contenido, alineado a la izquierda */
              alignSelf:      "flex-start",
            }}
          >
            Hablemos →
          </motion.a>
        </motion.div>

        {/* ── Grid de servicios ── */}
        <div
          className="services-grid"
          style={{
            display:             "grid",
            /*
             * mobile  : 1 columna
             * tablet+ : 2 columnas  (via CSS)
             * desktop : 3 columnas  (via CSS)
             */
            gridTemplateColumns: "1fr",
            border:              "1px solid rgba(26,0,15,0.08)",
          }}
        >
          {services.map((s, i) => {
            const isHovered = hovered === s.num;

            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.07 * i }}
                onMouseEnter={() => setHovered(s.num)}
                onMouseLeave={() => setHovered(null)}
                className={`service-card service-card-${i}`}
                style={{
                  position:   "relative",
                  padding:    "clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px)",
                  cursor:     "default",
                  background: isHovered ? "var(--pink)" : "transparent",
                  transition: "background 0.3s ease",
                  /*
                   * Los bordes internos se calculan en CSS según las columnas
                   * activas. Aquí ponemos el borde bottom siempre como base;
                   * el media query lo ajustará.
                   */
                  borderBottom: "1px solid rgba(26,0,15,0.08)",
                }}
              >
                {/* Número top-right */}
                <span style={{
                  position:      "absolute",
                  top:           "16px",
                  right:         "16px",
                  fontFamily:    "var(--font-body)",
                  fontSize:      "11px",
                  color:         "rgba(26,0,15,0.12)",
                  letterSpacing: "0.05em",
                }}>
                  {s.num}
                </span>

                {/* Ícono */}
                <span style={{
                  display:      "block",
                  fontSize:     "18px",
                  marginBottom: "20px",
                  color:        isHovered ? "var(--noir)" : "var(--pink-deep)",
                  transition:   "color 0.3s ease",
                }}>
                  {s.icon}
                </span>

                {/* Título */}
                <h3 style={{
                  fontFamily:    "var(--font-display)",
                  fontSize:      "clamp(1rem, 2vw, 1.2rem)",
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
                  fontSize:   "clamp(12px, 1.2vw, 13px)",
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

      {/*
       * ── Responsive overrides ────────────────────────────────────────────
       *
       * Los bordes internos del grid dependen del número de columnas
       * activo en cada breakpoint, por eso se calculan aquí y no en
       * el inline style (que no conoce el layout real al renderizar).
       */}
      <style>{`

        /* ── Tablet: 2 columnas (≥ 600px) ── */
        @media (min-width: 600px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          /* borde derecho: toda tarjeta par (columna 1 en 0-index) */
          .services-grid .service-card:nth-child(odd) {
            border-right: 1px solid rgba(26,0,15,0.08);
          }

          /* quitar borde inferior de las últimas 2 tarjetas */
          .services-grid .service-card:nth-last-child(-n+2) {
            border-bottom: none !important;
          }
        }

        /* ── Desktop: 3 columnas (≥ 900px) ── */
        @media (min-width: 900px) {
          .services-header {
            flex-direction:  row !important;
            align-items:     flex-end !important;
            justify-content: space-between !important;
          }

          .services-cta {
            align-self: flex-end !important;
            flex-shrink: 0;
          }

          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }

          /* Resetear bordes del layout de 2 columnas */
          .services-grid .service-card:nth-child(odd) {
            border-right: none;
          }
          .services-grid .service-card:nth-last-child(-n+2) {
            border-bottom: 1px solid rgba(26,0,15,0.08) !important;
          }

          /* borde derecho: no en col 3 (cada 3er hijo) */
          .services-grid .service-card:not(:nth-child(3n)) {
            border-right: 1px solid rgba(26,0,15,0.08);
          }

          /* sin borde inferior en la última fila (últimas 3 tarjetas) */
          .services-grid .service-card:nth-last-child(-n+3) {
            border-bottom: none !important;
          }
        }

        /* ── Mobile: sin borde inferior en la última tarjeta ── */
        @media (max-width: 599px) {
          .services-grid .service-card:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}