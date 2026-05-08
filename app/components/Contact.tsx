"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_l65c329",
        "template_hh8ommw",
        { name: form.name, email: form.email, message: form.message },
        "39T8ZnrmNV-cE8enj",
      );
      setSent(true);
    } catch (err) {
      console.error("Error enviando:", err);
      alert("Hubo un error. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width:           "100%",
    background:      "transparent",
    border:          "none",
    borderBottom:    "1px solid rgba(252,187,226,0.18)",
    padding:         "12px 0",
    fontSize:        "14px",
    fontFamily:      "var(--font-body)",
    color:           "var(--blush)",
    outline:         "none",
    fontWeight:      300,
  };

  const labelStyle: React.CSSProperties = {
    display:       "block",
    fontFamily:    "var(--font-body)",
    fontSize:      "10px",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color:         "rgba(252,187,226,0.38)",
    marginBottom:  "8px",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "space-between",
        overflow:       "hidden",
        background:     "var(--noir)",
        minHeight:      "100vh",
        position:       "relative",
      }}
    >
      {/* Blob decorativo */}
      <div style={{
        position:      "absolute",
        bottom:        "-40px",
        right:         "-40px",
        width:         "320px",
        height:        "320px",
        borderRadius:  "50%",
        background:    "rgba(212,83,126,0.12)",
        filter:        "blur(80px)",
        pointerEvents: "none",
      }} />

      {/* Contenido principal */}
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div style={{
          width:               "100%",
          maxWidth:            "1000px",
          margin:              "0 auto",
          padding:             "80px 80px",
          display:             "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:                 "80px",
          alignItems:          "start",
        }}>

          {/* ── LEFT — Headline ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
              <span style={{ width: "28px", height: "1px", background: "var(--pink-deep)", display: "block" }} />
              <span style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "10px",
                letterSpacing: "0.32em",
                textTransform: "uppercase" as const,
                color:         "rgba(252,187,226,0.45)",
              }}>
                Contacto
              </span>
            </div>

            {/* Título */}
            <h2 style={{
              fontFamily:    "var(--font-display)",
              color:         "var(--blush)",
              fontSize:      "clamp(2.4rem, 4vw, 3.6rem)",
              fontWeight:    300,
              lineHeight:    1.05,
              letterSpacing: "-0.025em",
              margin:        "0 0 24px",
            }}>
              ¿Empezamos<br />
              <em style={{ color: "var(--pink)", fontStyle: "italic" }}>juntos?</em>
            </h2>

            {/* Descripción */}
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize:   "14px",
              lineHeight: 1.75,
              color:      "rgba(254,231,245,0.45)",
              maxWidth:   "300px",
              fontWeight: 300,
              margin:     "0 0 40px",
            }}>
              Cuéntame tu proyecto en dos líneas. Sin forms eternos, sin reuniones innecesarias — solo trabajemos.
            </p>

            {/* Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Email",     value: "nazarioguzmanmelani@gmail.com", href: "mailto:nazarioguzmanmelani@gmail.com" },
                { label: "Instagram", value: "@yosoy_melita",                href: "https://www.instagram.com/yosoy_melita" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display:        "flex",
                    alignItems:     "center",
                    gap:            "20px",
                    textDecoration: "none",
                  }}
                >
                  <span style={{
                    fontFamily:    "var(--font-body)",
                    fontSize:      "9px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase" as const,
                    color:         "rgba(252,187,226,0.30)",
                    width:         "72px",
                    flexShrink:    0,
                  }}>
                    {link.label}
                  </span>
                  <span style={{
                    fontFamily:  "var(--font-body)",
                    fontSize:    "13px",
                    color:       "var(--pink)",
                    opacity:     0.85,
                    transition:  "opacity 0.2s",
                  }}>
                    {link.value}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Formulario ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display:        "flex",
                  flexDirection:  "column",
                  alignItems:     "center",
                  justifyContent: "center",
                  textAlign:      "center",
                  padding:        "60px 0",
                  gap:            "16px",
                }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontSize: "4rem", color: "var(--pink)", margin: 0 }}>✦</p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 300, color: "var(--blush)", margin: 0 }}>
                  Mensaje recibido.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(254,231,245,0.4)", margin: 0 }}>
                  Te escribo pronto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

                {/* Nombre */}
                <div>
                  <label style={labelStyle}>Tu nombre</label>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Tu email</label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label style={labelStyle}>Tu proyecto</label>
                  <textarea
                    placeholder="Cuéntame en qué puedo ayudarte..."
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  style={{
                    width:         "100%",
                    padding:       "16px",
                    fontFamily:    "var(--font-body)",
                    fontSize:      "11px",
                    fontWeight:    500,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase" as const,
                    background:    "var(--pink)",
                    color:         "var(--noir)",
                    border:        "none",
                    cursor:        loading ? "not-allowed" : "pointer",
                    opacity:       loading ? 0.6 : 1,
                    transition:    "opacity 0.2s",
                  }}
                >
                  {loading ? "Enviando..." : "Enviar mensaje →"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.7 }}
        style={{
          padding:        "20px 80px",
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          gap:            "16px",
          borderTop:      "1px solid rgba(252,187,226,0.08)",
          maxWidth:       "1000px",
          width:          "100%",
          margin:         "0 auto",
          boxSizing:      "border-box" as const,
        }}
      >
        <span style={{
          fontFamily:    "var(--font-body)",
          fontSize:      "11px",
          letterSpacing: "0.15em",
          color:         "rgba(254,231,245,0.2)",
        }}>
          © {new Date().getFullYear()} Melani Nazario
        </span>
        <span style={{
          fontFamily:  "var(--font-display)",
          fontStyle:   "italic",
          fontSize:    "13px",
          color:       "rgba(254,231,245,0.2)",
        }}>
          Contenido que conecta ✦
        </span>
      </motion.footer>
    </section>
  );
}