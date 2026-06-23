import React from "react";
import ProjectCarousel from "../UI/ProjectCarousel";

export default function Work() {
  return (
    <section
      className="viewport-snap"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          paddingLeft: "max(1.5rem, 6rem)",
          marginBottom: "3.5rem",
          zIndex: 10,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "3rem",
            fontWeight: 800,
            tracking: "-0.02em",
          }}
        >
          PRODUCTION DEPLOYMENTS
        </h2>
        <p style={{ color: "var(--text-secondary)", marginTop: "0.25rem" }}>
          Hold and drag horizontal axis trajectory tracks
        </p>
      </div>

      <ProjectCarousel />
    </section>
  );
}
