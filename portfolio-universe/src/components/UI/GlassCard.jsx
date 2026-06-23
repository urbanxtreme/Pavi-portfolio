import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, style = {}, className = "" }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Calculate 3D tilt angles (capped at maximum 10 degrees)
    setRotateX(-y / (box.height / 2) * 10);
    setRotateY(x / (box.width / 2) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const cardStyle = {
    position: 'relative',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    overflow: 'hidden',
    transformStyle: 'preserve-3d',
    ...style
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`glass-panel ${className}`}
      style={cardStyle}
    >
      {/* Dynamic inner glow highlighting card depth */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
        pointerEvents: 'none'
      }} />
      
      <div style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  );
}