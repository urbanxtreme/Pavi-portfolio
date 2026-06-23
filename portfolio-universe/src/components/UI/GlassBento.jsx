import React, { useState } from "react";
import { motion } from "framer-motion";

export default function GlassBento({ children, spanX = 1, spanY = 1 }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const executeTilt = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left - bounds.width / 2;
    const y = e.clientY - bounds.top - bounds.height / 2;
    setTilt({
      x: (-y / (bounds.height / 2)) * 8,
      y: (x / (bounds.width / 2)) * 8,
    });
  };

  return (
    <motion.div
      onMouseMove={executeTilt}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="elite-glass"
      style={{
        gridColumn: `span ${spanX}`,
        gridRow: `span ${spanY}`,
        borderRadius: "24px",
        padding: "2.5rem",
        position: "relative",
        transformStyle: "preserve-3d",
        overflow: "hidden",
      }}
    >
      <div style={{ transform: "translateZ(25px)", height: "100%" }}>
        {children}
      </div>
    </motion.div>
  );
}
