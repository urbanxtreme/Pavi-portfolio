import React from "react";
import GlassBento from "../UI/GlassBento";

export default function Capabilities() {
  return (
    <section
      className="viewport-snap"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyCenter: "center",
        padding: "0 max(1.5rem, 6rem)",
      }}
    >
      <div style={{ width: "100%", zIndex: 10 }}>
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "3rem",
              fontWeight: 800,
            }}
          >
            CAPABILITIES MATRIX
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Interact with panels to distort geometric planes.
          </p>
        </div>

        {/* 🍱 Structural Bento Grid System */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            width: "100%",
            maxWidth: "1400px",
          }}
        >
          <GlassBento spanX={2} spanY={1}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                marginBottom: "1rem",
              }}
            >
              Frontend Core System Optimization
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              Creating lightweight, component-driven engines featuring
              declarative animation tracks, ultra-fast bundle processing, and
              clean memory handling.
            </p>
          </GlassBento>

          <GlassBento spanX={1} spanY={1}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                marginBottom: "1rem",
                color: "var(--brand-pink)",
              }}
            >
              01 / Awwwards
            </h3>
            <p style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
              Engineered and styled to surpass top-tier web standards across
              performance, innovation, and interaction metrics.
            </p>
          </GlassBento>
        </div>
      </div>
    </section>
  );
}
