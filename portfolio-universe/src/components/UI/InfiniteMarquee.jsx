import React from "react";
import { motion } from "framer-motion";

export default function InfiniteMarquee() {
  const lineItems = [
    "AWWWARDS SITE OF THE DAY",
    "INTERACTIVE PIPELINE ARCHITECTURE",
    "VISUAL INTERFACE DESIGN",
    "DIGITAL MATRIX",
  ];

  return (
    <div
      style={{
        width: "100vw",
        overflow: "hidden",
        borderY: "1px solid var(--glass-border)",
        background: "rgba(5, 5, 21, 0.6)",
        padding: "2rem 0",
        position: "relative",
        zIndex: 10,
      }}
    >
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        style={{
          display: "flex",
          gap: "4rem",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {[...lineItems, ...lineItems].map((text, index) => (
          <h3
            key={index}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "3rem",
              fontWeight: 800,
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {text} <span style={{ color: "var(--brand-pink)" }}>//</span>
          </h3>
        ))}
      </motion.div>
    </div>
  );
}
