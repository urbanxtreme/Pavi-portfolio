import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function DynamicCursor() {
  const [interactiveState, setInteractiveState] = useState("default");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorAngle = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const springAngle = useSpring(cursorAngle, { damping: 20, stiffness: 200, mass: 0.2 });

  const prevPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Add global style to hide native cursor except for inputs
    const style = document.createElement("style");
    style.id = "hide-cursor-style";
    style.innerHTML = `
      * { cursor: none !important; }
      input, textarea { cursor: text !important; }
    `;
    document.head.appendChild(style);

    const processMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      const dx = x - prevPos.current.x;
      const dy = y - prevPos.current.y;
      
      // Calculate angle in degrees based on movement
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        // SVG Rocket points top-right natively, our wrapper rotates it -45 so it points straight up.
        // atan2 is 0 to the right, -90 straight up. Adding 90 makes 0 straight up.
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        let currentAngle = cursorAngle.get();
        // Prevent 360 spin wrap-around math
        const diff = ((angle - currentAngle + 180) % 360 + 360) % 360 - 180;
        cursorAngle.set(currentAngle + diff);
      }

      prevPos.current = { x, y };
      cursorX.set(x);
      cursorY.set(y);

      // Spotlight coordinates for the grid/background
      document.documentElement.style.setProperty("--mouse-x", `${(x / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty("--mouse-y", `${(y / window.innerHeight) * 100}%`);

      // Determine interaction state
      const target = e.target.closest("[data-interaction], input, textarea");
      if (target) {
        if (target.tagName.toLowerCase() === "input" || target.tagName.toLowerCase() === "textarea") {
          setInteractiveState("text");
        } else {
          setInteractiveState(target.getAttribute("data-interaction"));
        }
      } else {
        setInteractiveState("default");
      }
    };

    window.addEventListener("mousemove", processMove);
    return () => {
      window.removeEventListener("mousemove", processMove);
      const s = document.getElementById("hide-cursor-style");
      if (s) s.remove();
    };
  }, [cursorX, cursorY, cursorAngle]);

  return (
    <>
      {/* Spotlight Ambient Base Ring */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background: `radial-gradient(circle 350px at var(--mouse-x) var(--mouse-y), rgba(112, 0, 255, 0.06), transparent 80%)`,
        }}
      />

      {/* Main Cursor: Rocket Pointer */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: springX, y: springY,
          rotate: springAngle,
          translateX: "-50%", translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9999,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        animate={{
          scale: interactiveState === "default" ? 1 : interactiveState === "text" ? 0 : 0.6,
          opacity: interactiveState === "default" ? 1 : interactiveState === "text" ? 0 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div style={{ transform: "rotate(-45deg)" }}>
          <svg 
            width="32" height="32" viewBox="0 0 24 24" fill="none" 
            stroke="var(--brand-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 8px var(--brand-cyan))" }}
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
          </svg>
        </div>
      </motion.div>

      {/* Interactive State Ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: springX, y: springY,
          translateX: "-50%", translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9998,
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{
          width: interactiveState === "magnetic" ? 64 : interactiveState === "carousel" ? 90 : 0,
          height: interactiveState === "magnetic" ? 64 : interactiveState === "carousel" ? 90 : 0,
          opacity: (interactiveState !== "default" && interactiveState !== "text") ? 1 : 0,
          backgroundColor: interactiveState === "carousel" ? "rgba(112, 0, 255, 0.2)" : "rgba(255, 0, 127, 0.1)",
          borderWidth: 1, borderStyle: "solid",
          borderColor: interactiveState === "magnetic" ? "var(--brand-pink)" : interactiveState === "carousel" ? "var(--brand-purple)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {interactiveState === "carousel" && (
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{
              fontSize: "11px", color: "#fff", fontFamily: "monospace", letterSpacing: "2px",
            }}
          >
            DRAG
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
