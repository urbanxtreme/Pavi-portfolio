import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const MOCK_PROJECTS = [
  {
    id: 1,
    name: "Vercel Analytics Dashboard",
    stack: "Next.js / GLSL Shaders",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600",
  },
  {
    id: 2,
    name: "Linear Automation Matrix",
    stack: "Rust Core / Webpack Canvas",
    img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600",
  },
  {
    id: 3,
    name: "Stripe Engine Re-architecture",
    stack: "WebGL Real-time Vector Pipelines",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600",
  },
];

export default function ProjectCarousel() {
  const carouselRef = useRef(null);
  const [dragConstraint, setDragConstraint] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setDragConstraint(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
      );
    }
  }, []);

  return (
    <div
      style={{ position: "relative", width: "100%", overflow: "visible" }}
      data-interaction="carousel"
    >
      <motion.div
        ref={carouselRef}
        drag="x"
        dragConstraints={{ right: 0, left: -dragConstraint }}
        style={{
          display: "flex",
          gap: "2.5rem",
          cursor: "grab",
          width: "max-content",
          paddingRight: "10vw",
        }}
      >
        {MOCK_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="elite-glass"
            style={{
              width: "420px",
              height: "520px",
              borderRadius: "24px",
              overflow: "hidden",
              padding: "1rem",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "70%",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={project.img}
                alt={project.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, #000, transparent)",
                }}
              />
            </div>
            <div style={{ padding: "1.5rem 0.5rem 0 0.5rem" }}>
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--brand-cyan)",
                  fontFamily: "monospace",
                  tracking: "2px",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {project.stack}
              </span>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                }}
              >
                {project.name}
              </h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
