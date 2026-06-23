import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Scene from "./components/canvas/Scene";
import DynamicCursor from "./components/UI/DynamicCursor";
import InfiniteMarquee from "./components/UI/InfiniteMarquee";
import Hero from "./components/sections/Hero";
import Capabilities from "./components/sections/Capabilities";
import Work from "./components/sections/Work";
import FinalConvergence from "./components/sections/FinalConvergence";
import "./styles/architecture.css";

export default function App() {
  const [renderState, setRenderState] = useState("hero");
  const scrollContainerRef = useRef(null);

  // Track continuous scroll progress for page tracker metrics
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });

  const monitorWaypoints = () => {
    if (!scrollContainerRef.current) return;
    const scrollY = scrollContainerRef.current.scrollTop;
    const vh = window.innerHeight;

    if (scrollY < vh * 0.8) {
      setRenderState("hero");
    } else if (scrollY >= vh * 0.8 && scrollY < vh * 1.8) {
      setRenderState("capabilities");
    } else if (scrollY >= vh * 1.8 && scrollY < vh * 2.8) {
      setRenderState("work");
    } else {
      setRenderState("convergence");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <DynamicCursor />

      {/* 🧪 Vector Grid Base Texture */}
      <div className="grid-distortion-layer" />

      {/* 🤖 Real-time Scroll Progress indicator bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          backgroundColor: "var(--brand-cyan)",
          transformOrigin: "0%",
          zIndex: 1000,
        }}
      />

      {/* 🌌 High Performance WebGL Canvas Core Layer */}
      <Scene renderState={renderState} />

      {/* 🎰 Content Container Layer using hardware-accelerated scroll snapping */}
      <div
        ref={scrollContainerRef}
        onScroll={monitorWaypoints}
        className="scroll-engine"
      >
        <Hero />
        <Capabilities />
        <InfiniteMarquee />
        <Work />
        <FinalConvergence />
      </div>
    </div>
  );
}
