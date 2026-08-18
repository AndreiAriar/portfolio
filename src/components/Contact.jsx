import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./icons/SocialIcons";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { icon: Mail, label: "Email", href: "francesandrei.ariar@gmail.com", text: "francesandrei.ariar@gmail.com" },
    { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/andrei.ariar.2024", text: "facebook.com/andrei.ariar.2024" },
    { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/ashersnclr/", text: "@ashersnclr" },
    { icon: Send, label: "Telegram", href: "https://t.me/asher_sinclair", text: "@asher_sinclair" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/639760237404", text: "0976 023 7404" },
  ];

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        padding: "8rem 5vw 6rem",
        background: "var(--ink)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "5%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />

      <div ref={ref} style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1rem",
          }}
        >
          Let's Work Together
        </motion.p>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "#F7F5F0",
            marginBottom: "3rem",
            maxWidth: "700px",
          }}
        >
          Have an idea?
          <br />
          <span style={{ fontStyle: "italic", color: "rgba(247,245,240,0.4)" }}>
            Let's talk.
          </span>
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {socials.map(({ icon: Icon, label, href, text }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="contact-row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.5rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(247,245,240,0.6)",
                transition: "color var(--transition)",
                gap: "1rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F7F5F0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(247,245,240,0.6)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Icon size={18} />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
              </div>
              <span className="contact-row-text" style={{ fontSize: "0.95rem", fontWeight: 300 }}>{text}</span>
            </a>
          ))}
        </motion.div>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginTop: "4rem",
            fontSize: "0.8rem",
            color: "rgba(247,245,240,0.25)",
            letterSpacing: "0.04em",
          }}
        >
          © {new Date().getFullYear()} Andrei Ariar. Designed & built with care.
        </motion.p>
      </div>
    </section>
  );
}