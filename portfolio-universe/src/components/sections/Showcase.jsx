import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "CYBERPUNK ENGINE",
    category: "WebGL / Three.js",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
  },
  {
    id: 2,
    title: "NEURAL NETWORK UI",
    category: "Creative Front-End",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800",
  },
  {
    id: 3,
    title: "METAVERSE COMMERCE",
    category: "Full-Stack Immersive",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
  },
];

export default function Showcase() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <div
      ref={targetRef}
      style={{
        position: "relative",
        height: "300vh",
        backgroundColor: "var(--bg-space-900)",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "2.5rem",
            left: "max(1.5rem, 6rem)",
          }}
        >
          <h2
            className="text-gradient-neon"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 800,
            }}
          >
            SELECTED WORKS
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              marginTop: "0.25rem",
            }}
          >
            HORIZON TRANSITION TRACK
          </p>
        </div>

        <motion.div
          style={{
            x,
            display: "flex",
            gap: "3rem",
            paddingLeft: "max(1.5rem, 6rem)",
            paddingRight: "33vw",
          }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                position: "relative",
                width: "clamp(280px, 65vw, 500px)",
                height: "55vh",
                flexShrink: 0,
                borderRadius: "1rem",
                padding: "1rem",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "0.75rem",
                  position: "relative",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, var(--bg-space-950), transparent)",
                    opacity: 0.8,
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "2rem",
                  right: "2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--neon-cyan)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "0.2rem",
                  }}
                >
                  {project.category}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
