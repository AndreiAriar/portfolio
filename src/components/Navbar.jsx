import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 5vw",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(247,245,240,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--ink-faint)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "var(--serif)",
          fontSize: "1.2rem",
          color: "var(--ink)",
          letterSpacing: "-0.01em",
        }}
      >
        Andrei Ariar.
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontSize: "0.875rem",
              fontWeight: 400,
              color: "var(--ink-muted)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              transition: "color var(--transition)",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--ink-muted)")}
          >
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}