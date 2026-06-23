import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, onClick }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const btnStyle = {
    position: 'relative', padding: '1rem 2rem', borderRadius: '9999px',
    overflow: 'hidden', textTransform: 'uppercase', fontWeight: 600,
    fontSize: '0.875rem', letterSpacing: '0.05em', color: '#fff',
    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    outline: 'none', transition: 'border-color 0.3s'
  };

  const gradientOverlay = {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to right, var(--neon-purple), var(--neon-pink))',
    opacity: hovered ? 0.2 : 0, transition: 'opacity 0.5s', pointerEvents: 'none'
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setPosition({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="glass-panel"
      style={btnStyle}
    >
      <div style={gradientOverlay} />
      <span style={{ relative: 10, display: 'flex', alignItems: 'center', gap: '0.5rem', color: hovered ? 'var(--neon-cyan)' : '#fff', transition: 'color 0.3s' }}>
        {children}
      </span>
    </motion.button>
  );
}