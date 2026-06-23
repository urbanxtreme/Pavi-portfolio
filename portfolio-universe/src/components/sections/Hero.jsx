import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="viewport-snap">
      {/* Structural Ambient Background Blob Articulations */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], x: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', top: '15%', left: '20%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(112,0,255,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div style={{ padding: '0 max(1.5rem, 6rem)', width: '100%', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ width: '40px', height: '1px', backgroundColor: 'var(--brand-cyan)' }} />
            <span style={{ fontSize: '12px', fontFamily: 'monospace', color: 'var(--brand-cyan)', letterSpacing: '4px' }}>AVAILABLE FOR INTERACTIVE MISSIONS</span>
          </div>
          
          <h1 className="reveal-mask" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7.5vw, 7.5rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: '2.5rem' }}>
            NEXT GEN <br />Interactive System Architecture.
          </h1>
          
          <p style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)', color: 'var(--text-secondary)', maxWidth: '46rem', fontWeight: 300, lineHeight: 1.5 }}>
            Crafting deep interactive digital frameworks. Fusing core computing paradigms with modern immersive designs inspired by pioneers like Apple, Stripe, and Framer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}