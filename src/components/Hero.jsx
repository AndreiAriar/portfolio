import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10vh 5vw 6vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Main content row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4rem",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {/* Left: Text content */}
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <motion.p
            {...fadeUp(0.1)}
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1.5rem",
            }}
          >
            Web Developer — Available for work
          </motion.p>

          <motion.h1
            {...fadeUp(0.25)}
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: "2rem",
            }}
          >
            I build things
            <br />
            <span style={{ fontStyle: "italic", color: "var(--ink-muted)" }}>
              for the web.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            style={{
              fontSize: "1.15rem",
              fontWeight: 300,
              color: "var(--ink-muted)",
              maxWidth: "520px",
              lineHeight: 1.75,
              marginBottom: "3rem",
            }}
          >
            I'm Andrei, a web developer who crafts thoughtful digital experiences — from REST APIs to pixel-perfect UIs. Three years turning ideas into products people love.
          </motion.p>

          <motion.div {...fadeUp(0.55)} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2rem",
                background: "var(--ink)",
                color: "var(--cream)",
                borderRadius: "2px",
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "0.03em",
                transition: "background var(--transition)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2rem",
                background: "transparent",
                color: "var(--ink)",
                border: "1px solid var(--ink-faint)",
                borderRadius: "2px",
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "0.03em",
                transition: "border-color var(--transition)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--ink-faint)")}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right: Photo + Stats below */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.8rem",
            marginRight: "-8vw",
          }}
        >
          {/* IG-style story ring + photo */}
          <div
            style={{
              padding: "3px",
              borderRadius: "50%",
              background: "var(--accent)",
            }}
          >
            <div
              style={{
                padding: "3px",
                borderRadius: "50%",
                background: "var(--cream, #fff)",
              }}
            >
              <div
                style={{
                  width: "clamp(200px, 24vw, 340px)",
                  height: "clamp(200px, 24vw, 340px)",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/asher.jpg"
                  alt="Andrei"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stats below photo, centered under it */}
          <motion.div
            {...fadeUp(0.7)}
            style={{
              display: "flex",
              gap: "2.5rem",
              justifyContent: "center",
            }}
          >
            {[
              { value: "3", label: "Years exp." },
              { value: "5", label: "Projects" },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.8rem",
                    lineHeight: 1,
                    color: "var(--ink)",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--ink-faint)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginTop: "0.25rem",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "5vw",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          color: "var(--ink-faint)",
          fontSize: "0.75rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
        Scroll
      </motion.div>
    </section>
  );
}