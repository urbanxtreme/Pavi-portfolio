import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function DynamicCursor() {
  const [interactiveState, setInteractiveState] = useState("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const processMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Map global tracking coordinates to CSS root variable for real-time grid spotlighting
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${(e.clientX / window.innerWidth) * 100}%`,
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${(e.clientY / window.innerHeight) * 100}%`,
      );

      const target = e.target.closest("[data-interaction]");
      if (target) {
        setInteractiveState(target.getAttribute("data-interaction"));
      } else {
        setInteractiveState("default");
      }
    };

    window.addEventListener("mousemove", processMove);
    return () => window.removeEventListener("mousemove", processMove);
  }, [cursorX, cursorY]);

  const variants = {
    default: { width: 8, height: 8, backgroundColor: "#00f5ff" },
    magnetic: {
      width: 64,
      height: 64,
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "#ff007f",
    },
    carousel: {
      width: 90,
      height: 90,
      backgroundColor: "rgba(112, 0, 255, 0.2)",
      borderWidth: 1,
      borderColor: "#7000ff",
    },
  };

  return (
    <>
      {/* Spotlight Ambient Base Ring */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), rgba(112, 0, 255, 0.08), transparent 80%)`,
        }}
      />

      {/* Fluid Dynamic Hardware Accelerated Cursor Mesh */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode:
            interactiveState === "default" ? "difference" : "normal",
        }}
        variants={variants}
        animate={interactiveState}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {interactiveState === "carousel" && (
          <span
            style={{
              fontSize: "10px",
              color: "#fff",
              fontFamily: "monospace",
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: "2px",
            }}
          >
            DRAG
          </span>
        )}
      </motion.div>
    </>
  );
}
