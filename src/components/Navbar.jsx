import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  const links = ["About", "Projects", "Contact"];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: "1.25rem",
        left: "5vw",
        right: "5vw",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <nav
        className="navbar"
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          gap: "1.5rem",
          padding: "0.65rem 0.65rem 0.65rem 1.5rem",
          borderRadius: "999px",
          background: scrolled
            ? "rgba(255,255,255,0.07)"
            : "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
          transition: "background 0.4s ease",
        }}
      >
        <a
          href="#hero"
          className="navbar-brand"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 0.85rem 0.5rem 0.35rem",
            whiteSpace: "nowrap",
          }}
        >
          <img
            src="/andreiariarlogo.png"
            alt=""
            aria-hidden="true"
            style={{
              height: "44px",
              width: "auto",
              display: "block",
              filter: "brightness(0) invert(1)",
            }}
          />
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.05,
              fontFamily: "var(--serif)",
              fontSize: "0.95rem",
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
            }}
          >
            <span>Andrei</span>
            <span>Ariar</span>
          </span>
        </a>

        <div
          className="navbar-links"
          style={{ display: "flex", justifyContent: "center", gap: "2.25rem" }}
        >
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ color: "var(--accent)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontSize: "0.85rem",
                fontWeight: 400,
                color: "var(--text-muted)",
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
              }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="navbar-cta"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.65rem 1.4rem",
            background: "var(--accent)",
            color: "var(--bg)",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
        >
          Hire Me
        </motion.a>
      </nav>
    </motion.div>
  );
}