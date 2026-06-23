import React from "react";
import { useMousePosition } from "../../hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();

  const dotStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "12px",
    height: "12px",
    backgroundColor: "var(--neon-cyan)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9999,
    mixBlendMode: "difference",
    transform: `translate3d(${x - 6}px, ${y - 6}px, 0)`,
  };

  const ringStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "32px",
    height: "32px",
    border: "1px solid var(--neon-purple)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9998,
    transform: `translate3d(${x - 16}px, ${y - 16}px, 0)`,
  };

  return (
    <>
      <div style={dotStyle} />
      <div style={ringStyle} />
    </>
  );
}
