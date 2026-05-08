"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { label: "Sobre mí",  href: "#about"    },
  { label: "Trabajo",   href: "#work"     },
  { label: "Servicios", href: "#services" },
  { label: "Contacto",  href: "#contact"  },
];

const DARK_SECTIONS = ["work", "contact"];

export default function Navbar() {
  const [active,   setActive]   = useState("");
  const [isDark,   setIsDark]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            setActive(id);
            setIsDark(DARK_SECTIONS.includes(id));
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const textColor   = isDark ? "rgba(254,231,245,0.65)" : "rgba(26,0,15,0.55)";
  const activeColor = isDark ? "var(--blush)"           : "var(--noir)";
  const navBg       = menuOpen
    ? (isDark ? "rgba(26,0,15,0.98)" : "rgba(255,245,251,0.98)")
    : isDark
    ? "rgba(26,0,15,0.92)"
    : scrolled
    ? "rgba(255,245,251,0.92)"
    : "transparent";
  const navBorder = isDark
    ? "rgba(252,187,226,0.08)"
    : scrolled
    ? "rgba(26,0,15,0.06)"
    : "transparent";

  const burgerColor = isDark || menuOpen ? "var(--blush)" : "var(--noir)";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position:             "fixed",
          top:                  0,
          left:                 0,
          right:                0,
          zIndex:               50,
          backdropFilter:       "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background:           navBg,
          borderBottom:         `1px solid ${navBorder}`,
          transition:           "background 0.5s ease, border-color 0.5s ease",
        }}
      >
        <div style={{
          maxWidth:       "1000px",
          margin:         "0 auto",
          padding:        "0 clamp(20px, 5vw, 80px)",
          height:         "60px",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
        }}>

          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily:     "var(--font-display)",
              color:          isDark || menuOpen ? "var(--blush)" : "var(--noir)",
              fontSize:       "1.1rem",
              letterSpacing:  "0.01em",
              fontWeight:     400,
              textDecoration: "none",
              flexShrink:     0,
              transition:     "color 0.3s ease",
            }}
          >
            Melani Nazario
          </a>

          {/* Links desktop */}
          <ul style={{
            display:    "flex",
            alignItems: "center",
            gap:        "36px",
            listStyle:  "none",
            margin:     0,
            padding:    0,
          }}
          className="nav-links-desktop"
          >
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href} style={{ position: "relative" }}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily:     "var(--font-body)",
                      fontSize:       "13px",
                      letterSpacing:  "0.01em",
                      color:          isActive ? activeColor : textColor,
                      fontWeight:     isActive ? 500 : 400,
                      textDecoration: "none",
                      transition:     "color 0.3s ease",
                      paddingBottom:  "4px",
                      display:        "block",
                    }}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        style={{
                          position:   "absolute",
                          bottom:     0,
                          left:       0,
                          right:      0,
                          height:     "1px",
                          background: isDark ? "var(--pink)" : "var(--pink-deep)",
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA desktop */}
          <motion.a
            href="https://wa.me/922739135?text=Hola%20Melita%20%F0%9F%91%8B%0A%0AMe%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios%20audiovisuales%20%F0%9F%93%B8%F0%9F%92%97%2C%20en%20el%20rubro%20de%20..."
            whileTap={{ scale: 0.97 }}
            className="nav-cta-desktop"
            style={{
              fontFamily:     "var(--font-body)",
              fontSize:       "11px",
              fontWeight:     500,
              letterSpacing:  "0.08em",
              textTransform:  "uppercase",
              textDecoration: "none",
              padding:        "10px 22px",
              borderRadius:   "4px",
              background:     "var(--pink-deep)",
              color:          "var(--noir)",
              flexShrink:     0,
            }}
          >
            Contactar
          </motion.a>

          {/* Burger mobile */}
          <button
            className="nav-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menú"
            style={{
              display:    "none",
              background: "transparent",
              border:     "none",
              cursor:     "pointer",
              padding:    "8px",
              flexShrink: 0,
            }}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <motion.rect
                x="0" y="0" width="22" height="1.5" rx="1"
                fill={burgerColor}
                animate={menuOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
                style={{ originX: "center", originY: "center" }}
              />
              <motion.rect
                x="0" y="7" width="22" height="1.5" rx="1"
                fill={burgerColor}
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.rect
                x="0" y="14" width="22" height="1.5" rx="1"
                fill={burgerColor}
                animate={menuOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
                style={{ originX: "center", originY: "center" }}
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position:             "fixed",
              top:                  "60px",
              left:                 0,
              right:                0,
              bottom:               0,
              zIndex:               49,
              backdropFilter:       "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              background:           isDark ? "rgba(26,0,15,0.97)" : "rgba(255,245,251,0.97)",
              display:              "flex",
              flexDirection:        "column",
              alignItems:           "center",
              justifyContent:       "center",
              gap:                  "36px",
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily:     "var(--font-display)",
                  fontSize:       "clamp(2rem, 8vw, 3rem)",
                  fontWeight:     300,
                  color:          isDark ? "var(--blush)" : "var(--noir)",
                  textDecoration: "none",
                  letterSpacing:  "-0.02em",
                  lineHeight:     1,
                }}
              >
                {l.label}
              </motion.a>
            ))}

            <motion.a
              href="https://wa.me/922739135?text=Hola%20Melita%20%F0%9F%91%8B%0A%0AMe%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios%20audiovisuales%20%F0%9F%93%B8%F0%9F%92%97%2C%20en%20el%20rubro%20de%20..."
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily:     "var(--font-body)",
                fontSize:       "11px",
                fontWeight:     500,
                letterSpacing:  "0.12em",
                textTransform:  "uppercase",
                textDecoration: "none",
                padding:        "14px 36px",
                borderRadius:   "4px",
                background:     "var(--pink-deep)",
                color:          "var(--noir)",
                marginTop:      "8px",
              }}
            >
              Contactar
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop   { display: none !important; }
          .nav-burger        { display: flex !important; }
        }
      `}</style>
    </>
  );
}