import React, { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";

// Canvas background
import Scene from "./components/canvas/Scene";

// UI
import DynamicCursor from "./components/UI/DynamicCursor";
import Navbar from "./components/UI/Navbar";
import InfiniteMarquee from "./components/UI/InfiniteMarquee";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Capabilities from "./components/sections/Capabilities";
import Work from "./components/sections/Work";
import Timeline from "./components/sections/Timeline";
import FinalConvergence from "./components/sections/FinalConvergence";

// Design system (single source of truth — no conflicting stylesheets)
import "./styles/architecture.css";

export default function App() {
  const [renderState, setRenderState] = useState("hero");
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: scrollRef });

  const monitorWaypoints = () => {
    if (!scrollRef.current) return;
    const scrollY = scrollRef.current.scrollTop;
    const vh = window.innerHeight;

    if (scrollY < vh * 0.8)               setRenderState("hero");
    else if (scrollY < vh * 1.8)          setRenderState("about");
    else if (scrollY < vh * 2.8)          setRenderState("capabilities");
    else if (scrollY < vh * 4.8)          setRenderState("work");
    else                                   setRenderState("convergence");
  };

  return (
    <div style={{ backgroundColor: "#000", width: "100vw", height: "100vh", position: "relative", overflow: "hidden" }}>

      {/* Custom cursor */}
      <DynamicCursor />

      {/* Mouse-reactive grid overlay */}
      <div className="grid-distortion-layer" />

      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0, left: 0, right: 0,
          height: "2px",
          background: "linear-gradient(to right, var(--brand-purple), var(--brand-cyan))",
          transformOrigin: "0%",
          zIndex: 1000,
        }}
      />

      {/* Fixed navigation */}
      <Navbar scrollRef={scrollRef} />

      {/* WebGL background canvas */}
      <Scene renderState={renderState} />

      {/* Scroll engine — snapped sections container */}
      <div
        ref={scrollRef}
        onScroll={monitorWaypoints}
        style={{
          position: "relative",
          overflowY: "scroll",
          overflowX: "hidden",
          height: "100vh",
          zIndex: 5,
          /* Snap only hero/about/capabilities, not the marquee strip */
          scrollSnapType: "none",
        }}
      >
        <Hero />
        <About />
        <Capabilities />

        {/* Marquee lives between sections — no snap required */}
        <InfiniteMarquee />

        <Work />
        <Timeline />
        <FinalConvergence />
      </div>
    </div>
  );
}
