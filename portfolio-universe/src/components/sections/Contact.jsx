import React from "react";
import MagneticButton from "../UI/MagneticButton";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="section-container"
      style={{
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(to bottom, var(--bg-space-950), #000)",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "50vh",
          background:
            "radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "48rem", zIndex: 10 }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 900,
            tracking: "-0.03em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Let's Initiate <br />
          <span className="text-gradient-neon">A Convergence.</span>
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontWeight: 300,
            maxWidth: "32rem",
            margin: "0 auto 3rem auto",
            lineHeight: 1.6,
          }}
        >
          Seeking revolutionary frontend developments or architectural
          consultations? Sync up with my matrix.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <MagneticButton
            onClick={() => (window.location.href = "mailto:matrix@dev.io")}
          >
            TRANSMIT SIGNAL <Send size={14} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
