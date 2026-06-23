import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition((prev) => ({
        ...prev,
        targetX: e.clientX,
        targetY: e.clientY,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Smooth Lerp loop for fluid, non-choppy custom cursor movement
    let animationFrameId;
    const updatePosition = () => {
      setMousePosition((prev) => {
        const dx = prev.targetX - prev.x;
        const dy = prev.targetY - prev.y;
        return {
          ...prev,
          // 0.15 acts as the easing factor. Lower = smoother/slower, Higher = snappier
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    updatePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return mousePosition;
};
