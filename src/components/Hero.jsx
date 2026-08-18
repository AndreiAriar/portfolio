import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Download, Eye, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "./icons/SocialIcons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = (reduce) => ({
  hidden: reduce ? { opacity: 1 } : { y: 26, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
});

function MagneticButton({ children, ...props }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMove = (e) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.25);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      {...props}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ ...props.style, x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}

const railSocials = [
  { icon: GithubIcon, href: "https://github.com/AndreiAriar", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/andrei-ariar-7561163a0/", label: "LinkedIn" },
  { icon: FacebookIcon, href: "https://www.facebook.com/andrei.ariar.2024", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/ashersnclr/", label: "Instagram" },
  { icon: Mail, href: "mailto:francesandrei.ariar@gmail.com", label: "Email" },
];

const bottomStats = [
  { value: "3+", label: "Years of experience" },
  { value: "4", label: "Projects built" },
  { value: "1", label: "Best Thesis award" },
  { value: "4", label: "Live in production" },
];

const avatarInitials = ["CQ", "IT", "MS"];

const heroSans = "'Helvetica Neue', 'Segoe UI', Arial, sans-serif";

export default function Hero() {
  const reduce = useReducedMotion();
  const photoRef = useRef(null);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "16vh 5vw 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient accent glow, kept subtle per no-neon rule */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-6%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "var(--accent-soft)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Giant outlined word behind the heading */}
      <div
        aria-hidden="true"
        className="hero-bg-word"
        style={{
          position: "absolute",
          top: "-2vh",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--serif)",
          fontWeight: 400,
          fontSize: "clamp(6rem, 18vw, 13rem)",
          lineHeight: 1,
          letterSpacing: "0.02em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(245, 243, 238, 0.07)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        HELLO
      </div>

      {/* Vertical social rail */}
      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="hero-social-rail"
        style={{
          position: "absolute",
          right: "clamp(1.5rem, 3vw, 3rem)",
          top: "34%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "0.85rem",
          zIndex: 3,
        }}
      >
        {railSocials.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            whileHover={reduce ? {} : { x: -3, borderColor: "var(--accent)", color: "var(--accent)" }}
            whileTap={{ scale: 0.92 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid var(--text-faint)",
              background: "rgba(11,11,10,0.5)",
              color: "var(--text-muted)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Icon size={15} />
          </motion.a>
        ))}
      </motion.div>

      <div
        className="hero-row"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "4rem",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: Text content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hero-text"
          style={{ flex: "1 1 0", minWidth: 0, maxWidth: "600px", paddingTop: "1rem" }}
        >
          {/* Greeting label */}
          <motion.p
            variants={item(reduce)}
            style={{
              fontSize: "0.95rem",
              fontWeight: 400,
              color: "var(--text-muted)",
              marginBottom: "1.25rem",
            }}
          >
            This is Andrei Ariar
          </motion.p>

          <motion.h1
            variants={item(reduce)}
            style={{
              fontFamily: heroSans,
              fontWeight: 800,
              fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "1.25rem",
            }}
          >
            Web Developer &
            <br />
            <span style={{ color: "var(--accent)" }}>AI-Integrated Apps.</span>
          </motion.h1>

          <motion.p
            variants={item(reduce)}
            style={{
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--text-muted)",
              marginBottom: "2.25rem",
            }}
          >
            With 3+ years of experience turning ideas into products.
          </motion.p>

          <motion.div
            variants={item(reduce)}
            className="hero-cta-row"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
          >
            <MagneticButton
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2rem",
                background: "var(--accent)",
                color: "var(--bg)",
                borderRadius: "999px",
                fontSize: "0.9rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
              }}
            >
              Say Hello
            </MagneticButton>

            <motion.a
              href="/resume.pdf"
              download="Andrei-Ariar-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={reduce ? {} : { borderColor: "var(--accent)", color: "var(--accent)" }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2rem",
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--text-faint)",
                borderRadius: "999px",
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "0.03em",
              }}
            >
              Download CV <Download size={16} />
            </motion.a>
          </motion.div>

          {/* Preview link — opens the PDF in a new tab without forcing a download */}
          <motion.a
            variants={item(reduce)}
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={reduce ? {} : { color: "var(--accent)" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              marginTop: "-1.5rem",
              marginBottom: "2.5rem",
              fontSize: "0.8rem",
              fontWeight: 400,
              color: "var(--text-muted)",
              letterSpacing: "0.02em",
            }}
          >
            <Eye size={14} /> Preview resume before downloading
          </motion.a>

          {/* Avatar cluster + quick stat */}
          <motion.div
            variants={item(reduce)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.6rem 1.25rem 0.6rem 0.6rem",
              border: "1px solid var(--text-faint)",
              borderRadius: "999px",
            }}
          >
            <div style={{ display: "flex" }}>
              {avatarInitials.map((initials, i) => (
                <div
                  key={initials}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    color: "var(--bg)",
                    background: "var(--accent)",
                    border: "2px solid var(--bg)",
                    marginLeft: i === 0 ? 0 : "-10px",
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontFamily: heroSans,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  lineHeight: 1,
                  color: "var(--text)",
                }}
              >
                5+
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.03em",
                }}
              >
                Recent projects
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Photo — bleeds to the edge, tucks behind the stats bar below */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="hero-photo-wrap"
          style={{
            position: "relative",
            right: "-5vw",
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          <motion.div
            ref={photoRef}
            whileHover={reduce ? {} : { scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="hero-photo"
            style={{
              position: "relative",
              width: "clamp(300px, 32vw, 480px)",
              height: "clamp(440px, 66vh, 660px)",
              borderRadius: "24px 0 0 0",
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
            {/* Soft fade into the page background on the left edge */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, var(--bg) 0%, rgba(0,0,0,0) 16%)",
                pointerEvents: "none",
              }}
            />
            {/* Soft fade into the stats bar at the bottom */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(0deg, var(--bg) 0%, rgba(0,0,0,0) 22%)",
                pointerEvents: "none",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom stats bar — pulled up so it overlaps and tucks under the photo */}
      <motion.div
        initial={reduce ? { opacity: 1 } : { y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="hero-stats-bar"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1100px",
          margin: "-4.5rem auto 3rem",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {bottomStats.map(({ value, label }, i) => (
          <div
            key={label}
            style={{
              textAlign: "center",
              padding: "1.75rem 1rem",
              borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div
              style={{
                fontFamily: heroSans,
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                color: "var(--accent)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                letterSpacing: "0.02em",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}