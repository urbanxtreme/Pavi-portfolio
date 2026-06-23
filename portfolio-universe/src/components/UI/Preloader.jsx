import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 2.2 seconds of loading animation before triggering the portal opening
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for the exit animation to finish before unmounting
      setTimeout(onComplete, 1200); 
    }, 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Framer Motion variants for the 3 orbital rings
  const ringVariants = {
    animate: (custom) => ({
      rotateX: [custom.rx, custom.rx + 360],
      rotateY: [custom.ry, custom.ry + 360],
      rotateZ: [custom.rz, custom.rz + 360],
      transition: { duration: custom.speed, ease: "linear", repeat: Infinity }
    }),
    exit: {
      scale: 20, // Portal expands outwards to cover screen
      opacity: 0,
      boxShadow: "0 0 0px rgba(0,0,0,0) inset", // Collapse the heavy blur effect immediately
      transition: { 
        duration: 1.2, 
        ease: [0.7, 0, 0.3, 1],
        boxShadow: { duration: 0.1 } // Remove the box shadow instantly so the GPU doesn't struggle to scale it
      }
    }
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#030014',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        perspective: '1000px',
      }}
    >
      {/* ── Orbital Portal Rings ── */}
      <div style={{ position: 'relative', width: 240, height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Ring 1 - Cyan */}
        <motion.div
          custom={{ rx: 60, ry: 45, rz: 0, speed: 4 }}
          variants={ringVariants}
          animate={isExiting ? "exit" : "animate"}
          style={{
            position: 'absolute', inset: 0,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderTopColor: 'var(--brand-cyan)',
            borderRightColor: 'rgba(0, 245, 255, 0.2)',
            boxShadow: '0 0 20px rgba(0, 245, 255, 0.2) inset',
            willChange: 'transform, opacity',
          }}
        />

        {/* Ring 2 - Pink */}
        <motion.div
          custom={{ rx: 30, ry: 120, rz: 45, speed: 5 }}
          variants={ringVariants}
          animate={isExiting ? "exit" : "animate"}
          style={{
            position: 'absolute', inset: -20,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderBottomColor: 'var(--brand-pink)',
            borderLeftColor: 'rgba(255, 0, 127, 0.2)',
            boxShadow: '0 0 20px rgba(255, 0, 127, 0.2) inset',
            willChange: 'transform, opacity',
          }}
        />

        {/* Ring 3 - Purple */}
        <motion.div
          custom={{ rx: 120, ry: 30, rz: 90, speed: 6 }}
          variants={ringVariants}
          animate={isExiting ? "exit" : "animate"}
          style={{
            position: 'absolute', inset: -40,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderRightColor: 'var(--brand-purple)',
            borderTopColor: 'rgba(112, 0, 255, 0.2)',
            boxShadow: '0 0 20px rgba(112, 0, 255, 0.2) inset',
            willChange: 'transform, opacity',
          }}
        />

        {/* Inner Core / Logo */}
        <motion.div
          animate={isExiting ? { scale: 0, opacity: 0 } : { scale: [0.95, 1.05, 0.95], opacity: [0.7, 1, 0.7] }}
          transition={isExiting ? { duration: 0.6, ease: "easeInOut" } : { duration: 2, ease: "easeInOut", repeat: Infinity }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '0.1em',
            zIndex: 10,
          }}
        >
          PAVI<span style={{ color: 'var(--brand-cyan)' }}>.</span>
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.div
        animate={isExiting ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '15%',
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span>Initializing Universe</span>
        <motion.div
          animate={{ width: ['0%', '100%'] }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--brand-cyan), transparent)',
            width: '100px',
          }}
        />
      </motion.div>

    </motion.div>
  );
}
