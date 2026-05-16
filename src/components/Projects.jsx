import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, GithubIcon } from "lucide-react";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
      style={{
        padding: "2.5rem 0",
        borderTop: "1px solid var(--ink-faint)",
        display: "grid",
        gridTemplateColumns: "1fr 2fr auto",
        gap: "2rem",
        alignItems: "start",
        cursor: "default",
      }}
    >
      {/* Left — year + category */}
      <div>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--ink-faint)",
            marginBottom: "0.4rem",
          }}
        >
          {project.year}
        </p>
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--accent)",
            fontWeight: 400,
          }}
        >
          {project.category}
        </p>
      </div>

      {/* Center — title + description + tech */}
      <div>
        <h3
          style={{
            fontFamily: "var(--serif)",
            fontSize: "2rem",
            lineHeight: 1.1,
            color: "var(--ink)",
            marginBottom: "0.75rem",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--ink-muted)",
            lineHeight: 1.7,
            maxWidth: "440px",
            marginBottom: "1.25rem",
          }}
        >
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "0.25rem 0.75rem",
                background: "var(--accent-light)",
                color: "var(--accent)",
                borderRadius: "2px",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right — links */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", paddingTop: "0.25rem" }}>
        <a
          href={project.link}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "var(--ink)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            transition: "color var(--transition)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
        >
          Live <ArrowUpRight size={13} />
        </a>
        <a
          href={project.repo}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.8rem",
            fontWeight: 400,
            color: "var(--ink-muted)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            transition: "color var(--transition)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-muted)")}
        >
          Code <GithubIcon size={13} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
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
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "1rem" }}
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
          Selected Work
        </p>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
          }}
        >
          Things I've built
        </h2>
      </motion.div>

      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
        {/* closing border */}
        <div style={{ borderTop: "1px solid var(--ink-faint)" }} />
      </div>
    </section>
  );
}