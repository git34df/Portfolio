"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        position:       "relative",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        overflow:       "hidden",
        background:     "var(--blush-pure)",
      }}
    >
      {/* Blob top-right */}
      <div style={{
        position:      "absolute",
        top:           0,
        right:         0,
        width:         "55%",
        height:        "70%",
        pointerEvents: "none",
        background:    "radial-gradient(ellipse at 85% 30%, rgba(252,187,226,0.45) 0%, transparent 65%)",
      }} />
      {/* Blob bottom-left */}
      <div style={{
        position:      "absolute",
        bottom:        0,
        left:          "10%",
        width:         "40%",
        height:        "45%",
        pointerEvents: "none",
        background:    "radial-gradient(ellipse at 20% 90%, rgba(232,160,200,0.20) 0%, transparent 65%)",
      }} />

      <motion.div
        style={{
          y,
          opacity,
          position:  "relative",
          zIndex:    10,
          width:     "100%",
          maxWidth:  "1000px",
          margin:    "0 auto",
          padding:   "clamp(100px, 15vw, 120px) clamp(20px, 5vw, 80px) clamp(60px, 8vw, 80px)",
        }}
        className="hero-grid"
      >
        {/* ── LEFT COLUMN ── */}
        <div style={{ display: "flex", flexDirection: "column" }}>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}
          >
            <span style={{
              width: "8px", height: "8px", borderRadius: "2px",
              background: "var(--pink-deep)", flexShrink: 0, display: "block",
            }} />
            <span style={{
              fontFamily:    "var(--font-body)",
              fontSize:      "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase" as const,
              color:         "var(--noir-40)",
            }}>
              Contenido audiovisual · Lima, Perú
            </span>
          </motion.div>

          {/* Main title */}
          <div style={{ marginBottom: "18px" }}>
            {["Visualizo", "historias"].map((word, wi) => (
              <div key={wi} style={{ overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.25 + wi * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display:       "block",
                    lineHeight:    1.05,
                    fontFamily:    "var(--font-display)",
                    color:         "var(--noir)",
                    fontSize:      "clamp(2.4rem, 7vw, 3.4rem)",
                    letterSpacing: "-0.03em",
                    fontWeight:    700,
                  }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
            <div style={{ overflow: "hidden" }}>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display:       "block",
                  lineHeight:    1.1,
                  fontFamily:    "var(--font-display)",
                  color:         "var(--pink-deep)",
                  fontSize:      "clamp(2.4rem, 7vw, 3.4rem)",
                  letterSpacing: "-0.03em",
                  fontStyle:     "italic",
                  fontWeight:    400,
                }}
              >
                que importan.
              </motion.span>
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize:   "14px",
              lineHeight: 1.7,
              color:      "var(--noir)",
              opacity:    0.55,
              maxWidth:   "320px",
              marginBottom: "36px",
              fontWeight: 300,
            }}
          >
            Creo contenido audiovisual para marcas que quieren conectar de verdad y dejar huella.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}
          >
            <motion.a
              href="https://wa.me/922739135?text=Hola%20Melita%20%F0%9F%91%8B%0A%0AMe%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios%20audiovisuales%20%F0%9F%93%B8%F0%9F%92%97%2C%20en%20el%20rubro%20de%20..."
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding:        "12px 28px",
                fontSize:       "11px",
                fontWeight:     500,
                borderRadius:   "4px",
                background:     "var(--pink-deep)",
                color:          "var(--noir)",
                fontFamily:     "var(--font-body)",
                letterSpacing:  "0.08em",
                textTransform:  "uppercase" as const,
                textDecoration: "none",
                display:        "inline-block",
              }}
            >
              Ver trabajo
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding:        "12px 28px",
                fontSize:       "11px",
                fontWeight:     500,
                borderRadius:   "4px",
                border:         "1.5px solid var(--noir)",
                color:          "var(--noir)",
                fontFamily:     "var(--font-body)",
                background:     "transparent",
                letterSpacing:  "0.08em",
                textTransform:  "uppercase" as const,
                textDecoration: "none",
                display:        "inline-block",
              }}
            >
              Contactar
            </motion.a>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN — foto ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-image-col"
          style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          {/* Círculo decorativo */}
          <motion.div
            animate={{ scale: [1, 1.04, 1], rotate: [0, 4, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position:      "absolute",
              width:         "90%",
              aspectRatio:   "1",
              borderRadius:  "50%",
              background:    "radial-gradient(circle, rgba(252,187,226,0.35) 0%, transparent 70%)",
              top:           "50%",
              left:          "50%",
              transform:     "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />

          {/* Arco con foto */}
          <div style={{
            position:     "relative",
            overflow:     "hidden",
            width:        "65%",
            maxWidth:     "255px",
            aspectRatio:  "3/4",
            borderRadius: "200px 200px 20px 20px",
            background:   "var(--pink)",
          }}>
            <div style={{
              position:      "absolute",
              inset:         0,
              zIndex:        10,
              pointerEvents: "none",
              mixBlendMode:  "multiply",
              background:    "rgba(232,160,200,0.28)",
            }} />
            <Image
              src="/IMG_0867.PNG"
              alt="Melani Nazario"
              fill
              style={{ objectFit: "cover", objectPosition: "top cover" }}
              priority
              onError={() => {}}
            />
          </div>

          {/* Dots */}
          <svg
            style={{ position: "absolute", bottom: "-8px", right: "8%", opacity: 0.25, pointerEvents: "none" }}
            width="60" height="60" viewBox="0 0 60 60"
          >
            {[0, 1, 2].map(row =>
              [0, 1, 2].map(col => (
                <circle key={`${row}-${col}`} cx={col * 20 + 10} cy={row * 20 + 10} r="2.5" fill="var(--pink-deep)" />
              ))
            )}
          </svg>
        </motion.div>
      </motion.div>

      {/* Scroll hint — oculto en móvil */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hero-scroll-hint"
        style={{
          position:   "absolute",
          bottom:     "32px",
          right:      "40px",
          display:    "flex",
          alignItems: "center",
          gap:        "10px",
        }}
      >
        <span style={{
          fontFamily:    "var(--font-body)",
          fontSize:      "9px",
          letterSpacing: "0.3em",
          textTransform: "uppercase" as const,
          color:         "var(--noir-40)",
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width:      "1px",
            height:     "32px",
            background: "linear-gradient(to bottom, var(--noir-40), transparent)",
          }}
        />
      </motion.div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .hero-image-col {
            order: -1;
          }
          .hero-scroll-hint {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}