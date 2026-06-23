import React, { useState } from "react";
import { motion } from "framer-motion";

export default function GlassBento({ children, spanX = 1, spanY = 1 }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const executeTilt = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left - bounds.width / 2;
    const y = e.clientY - bounds.top - bounds.height / 2;
    setTilt({
      x: (-y / (bounds.height / 2)) * 7,
      y:  (x / (bounds.width  / 2)) * 7,
    });
  };

  return (
    <motion.div
      onMouseMove={executeTilt}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="elite-glass"
      style={{
        gridColumn: `span ${spanX}`,
        gridRow: `span ${spanY}`,
        borderRadius: "20px",
        padding: "2rem",
        position: "relative",
        transformStyle: "preserve-3d",
        perspective: "1200px",
        overflow: "hidden",
        cursor: "default",
        borderColor: hovered ? "rgba(0, 245, 255, 0.2)" : undefined,
      }}
    >
      {/* Inner glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 245, 255, 0.04) 0%, transparent 60%)",
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />

      <div style={{ transform: "translateZ(20px)", height: "100%", position: "relative" }}>
        {children}
      </div>
    </motion.div>
  );
}
