import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GlassBento from '../UI/GlassBento';

const BENTO_CARDS = [
  {
    spanX: 2, spanY: 1,
    accent: 'var(--brand-cyan)',
    label: '01 / Design',
    title: 'User-Centered Design Systems',
    body: 'Building cohesive design languages with Figma, component libraries, and atomic design principles. Every interaction is purposeful.',
    icon: '◈',
  },
  {
    spanX: 1, spanY: 1,
    accent: 'var(--brand-pink)',
    label: '02 / Motion',
    title: 'Micro-Animation',
    body: 'Framer Motion, GSAP, and CSS transitions that breathe life into interfaces.',
    icon: '◎',
  },
  {
    spanX: 1, spanY: 1,
    accent: 'var(--neon-purple)',
    label: '03 / Code',
    title: '3D & WebGL',
    body: 'Three.js and React Three Fiber to craft immersive spatial experiences.',
    icon: '⬡',
  },
  {
    spanX: 2, spanY: 1,
    accent: 'var(--brand-cyan)',
    label: '04 / Stack',
    title: 'Full-Spectrum Engineering',
    body: 'React, Next.js, TypeScript, Node.js — end-to-end ownership from wireframe to deployment.',
    icon: '⬘',
  },
];

export default function Capabilities() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="capabilities" className="viewport-snap" ref={sectionRef}
      style={{ flexDirection: 'column', justifyContent: 'center', padding: '0 max(1.5rem, 6vw)' }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '3rem', zIndex: 10, width: '100%', maxWidth: '1400px', margin: '0 auto 3rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span style={{ width: 40, height: 1, background: 'var(--brand-cyan)' }} />
          <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--brand-cyan)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            What I Do
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
        }}>
          CAPABILITIES{' '}
          <span className="text-gradient-neon">MATRIX</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontWeight: 300, fontSize: '1rem' }}>
          Hover the cards to interact with 3D geometry planes.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          zIndex: 10,
        }}
      >
        {BENTO_CARDS.map((card, i) => (
          <GlassBento key={i} spanX={card.spanX} spanY={card.spanY}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <span style={{
                  fontSize: '0.7rem', fontFamily: 'monospace',
                  color: card.accent, letterSpacing: '0.2em', textTransform: 'uppercase',
                }}>
                  {card.label}
                </span>
                <span style={{ fontSize: '1.5rem', color: card.accent, opacity: 0.6 }}>
                  {card.icon}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.2,
              }}>
                {card.title}
              </h3>

              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.65,
                fontWeight: 300,
                flex: 1,
              }}>
                {card.body}
              </p>

              {/* Accent bottom bar */}
              <div style={{
                height: 2,
                borderRadius: 9999,
                background: `linear-gradient(to right, ${card.accent}, transparent)`,
                opacity: 0.4,
              }} />
            </div>
          </GlassBento>
        ))}
      </motion.div>
    </section>
  );
}
