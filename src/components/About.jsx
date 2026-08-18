import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "React", note: "Component architecture, hooks, state" },
  { name: "TypeScript", note: "Type-safe, maintainable code" },
  { name: "Tailwind CSS", note: "Fast, consistent UI systems" },
  { name: "Firebase", note: "Auth, Firestore, storage" },
  { name: "REST APIs", note: "Integration & data flow" },
  { name: "Framer Motion", note: "Interaction & motion design" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="about-section"
      style={{
        padding: "8rem 5vw",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: "3.5rem" }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1rem",
          }}
        >
          About
        </p>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          A little about me
        </h2>
      </motion.div>

      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left: bio */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.3rem, 2.4vw, 1.7rem)",
              lineHeight: 1.5,
              color: "var(--text)",
              marginBottom: "1.75rem",
            }}
          >
            I care about the details most people scroll past.
          </p>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--text-muted)",
              lineHeight: 1.85,
              marginBottom: "1.25rem",
              maxWidth: "480px",
            }}
          >
            I'm a web developer who likes taking a product from a rough idea
            to something people actually enjoy using — wiring up the backend,
            shaping the interface, and polishing the small interactions in
            between. Three years in, I'm still happiest when a layout finally
            clicks or an animation lands exactly right.
          </p>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--text-muted)",
              lineHeight: 1.85,
              maxWidth: "480px",
            }}
          >
            Outside of client work, I build side projects to keep learning —
            weather apps with ambient animation, music players with a bit of
            personality, anything that gives me a reason to try something new.
          </p>
        </motion.div>

        {/* Right: skills, hairline rows to echo the contact list */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ borderTop: "1px solid var(--text-faint)" }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1.1rem 0",
                borderBottom: "1px solid var(--text-faint)",
              }}
            >
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  letterSpacing: "0.02em",
                }}
              >
                {skill.name}
              </span>
              <span
                className="about-skill-note"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "var(--text-faint)",
                  textAlign: "right",
                }}
              >
                {skill.note}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}