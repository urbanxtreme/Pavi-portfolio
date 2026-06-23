import React from "react";
import { motion } from "framer-motion";

export default function FinalConvergence() {
  const triggerEasterEgg = () => {
    alert(
      "🌌 Matrix System Intercept. Transmission vector configured: matrix@creative.dev",
    );
  };

  return (
    <section
      className="viewport-snap"
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          zIndex: 10,
          position: "relative",
          maxWidth: "52rem",
          padding: "0 1.5rem",
        }}
      >
        <h2
          className="reveal-mask"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 6vw, 6rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Initialize{" "}
          <span
            style={{ color: "var(--brand-cyan)", cursor: "help" }}
            onClick={triggerEasterEgg}
          >
            System Link
          </span>
        </h2>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.25rem",
            fontWeight: 300,
            lineHeight: 1.6,
            marginBottom: "4rem",
          }}
        >
          Ready to transcend standard web limitations? Tap below to open an
          encrypted communication terminal with my design network.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px var(--brand-purple)",
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => (window.location.href = "mailto:matrix@creative.dev")}
          data-interaction="magnetic"
          className="elite-glass"
          style={{
            padding: "1.25rem 3rem",
            borderRadius: "9999px",
            color: "#fff",
            fontSize: "14px",
            fontFamily: "monospace",
            letterSpacing: "3px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          TRANSMIT DATA BURST
        </motion.button>
      </div>
    </section>
  );
}
