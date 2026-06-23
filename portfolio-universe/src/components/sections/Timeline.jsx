import React from "react";
import { motion } from "framer-motion";

const MILESTONES = [
  {
    year: "2026",
    title: "Site of the Year Nominee",
    company: "Awwwards CSSDA",
    desc: "Recognized globally for progressive WebGL interactions.",
  },
  {
    year: "2024",
    title: "Lead Frontend Architect",
    company: "Quantum Labs",
    desc: "Designed framework systems rendering massive real-time datasets.",
  },
  {
    year: "2022",
    title: "Creative Developer",
    company: "Vortex Digital",
    desc: "Constructed premium micro-interaction ecosystems for Fortune 100 brands.",
  },
];

export default function Timeline() {
  return (
    <section className="section-container" style={{ paddingBlock: "8rem" }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto", width: "100%" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "5rem",
            textAlign: "center",
          }}
        >
          EXPEDITION{" "}
          <span style={{ color: "var(--neon-purple)" }}>TIMELINE</span>
        </h2>

        <div
          style={{
            borderLeft: "1px solid #1e293b",
            marginLeft: "2rem",
            position: "relative",
          }}
        >
          {MILESTONES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              style={{
                marginBottom: "4rem",
                marginLeft: "2.5rem",
                position: "relative",
              }}
            >
              {/* Outer Glow Node Marker */}
              <div
                style={{
                  position: "absolute",
                  left: "-49px",
                  top: "4px",
                  width: "1.5rem",
                  height: "1.5rem",
                  borderRadius: "50%",
                  backgroundColor: "var(--bg-space-950)",
                  border: "4px solid var(--neon-purple)",
                  boxShadow: "0 0 15px var(--neon-purple)",
                }}
              />

              <span
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  color: "var(--neon-cyan)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {item.year}
              </span>
              <h3
                style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff" }}
              >
                {item.title} —{" "}
                <span style={{ color: "var(--text-muted)", fontWeight: 300 }}>
                  {item.company}
                </span>
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  marginTop: "0.5rem",
                  maxWidth: "36rem",
                  lineHeight: 1.5,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
