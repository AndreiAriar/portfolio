import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";
import { projects } from "../data/projects";

const cardImage = {
  rest: { scale: 1 },
  hover: { scale: 1.06 },
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="rest"
      whileHover="hover"
      animate={inView ? { y: 0, opacity: 1 } : {}}
      className="project-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView || reduce ? "none" : "translateY(40px)",
        transition: `opacity 0.7s ${index * 0.12}s ease, transform 0.7s ${index * 0.12}s cubic-bezier(0.16,1,0.3,1)`,
        padding: "2.5rem 0",
        borderTop: "1px solid var(--text-faint)",
        display: "grid",
        gridTemplateColumns: "220px 1fr 2fr auto",
        gap: "2rem",
        alignItems: "start",
        cursor: "default",
      }}
    >
      {/* Thumbnail */}
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="project-thumb"
        style={{
          display: "block",
          width: "220px",
          height: "160px",
          borderRadius: "var(--radius)",
          overflow: "hidden",
          background: "var(--accent-soft)",
          flexShrink: 0,
          cursor: "pointer",
        }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          variants={reduce ? {} : cardImage}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </a>

      {/* Left — year + category */}
      <div className="project-meta">
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--text-faint)",
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
      <div className="project-body">
        <h3
          style={{
            fontFamily: "var(--serif)",
            fontSize: "2rem",
            lineHeight: 1.1,
            color: "var(--text)",
            marginBottom: "0.75rem",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
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
                background: "var(--accent-soft)",
                color: "var(--accent)",
                borderRadius: "var(--radius)",
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
      <div
        className="project-links"
        style={{ display: "flex", flexDirection: "column", gap: "0.75rem", paddingTop: "0.25rem" }}
      >
        <motion.a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ color: "var(--accent)", x: 2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "var(--text)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Live <ArrowUpRight size={13} />
        </motion.a>
        <motion.a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          whileHover={{ color: "var(--text)", x: 2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.8rem",
            fontWeight: 400,
            color: "var(--text-muted)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Code <GithubIcon size={13} />
        </motion.a>
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
      className="projects-section"
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
            color: "var(--text)",
          }}
        >
          Things I've built
        </h2>
      </motion.div>

      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
        <div style={{ borderTop: "1px solid var(--text-faint)" }} />
      </div>
    </section>
  );
}