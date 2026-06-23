import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    name: 'Brand Identity Portal',
    category: 'UI/UX Design · Figma',
    year: '2024',
    color: 'rgba(0,245,255,0.08)',
    accent: '#00f5ff',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Motion Design System',
    category: 'Framer Motion · React',
    year: '2024',
    color: 'rgba(112,0,255,0.08)',
    accent: '#9d4edd',
    img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'E-Commerce Redesign',
    category: 'UX Research · Next.js',
    year: '2023',
    color: 'rgba(255,0,127,0.08)',
    accent: '#ff007f',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Dashboard Analytics UI',
    category: 'Data Visualisation · D3',
    year: '2023',
    color: 'rgba(0,245,255,0.08)',
    accent: '#00f5ff',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700&auto=format&fit=crop',
  },
];

const CARD_W   = 380;
const CARD_GAP = 24;

export default function Work() {
  const sectionRef    = useRef(null);
  const trackRef      = useRef(null);
  const constraintRef = useRef(null);
  const inView        = useInView(sectionRef, { once: true, margin: '-80px' });

  const x        = useMotionValue(0);
  const [leftBound, setLeftBound] = useState(0);

  /* Recalculate drag bounds whenever the window resizes */
  useEffect(() => {
    const calc = () => {
      if (!trackRef.current || !constraintRef.current) return;
      const trackW = trackRef.current.scrollWidth;
      const wrapW  = constraintRef.current.offsetWidth;
      setLeftBound(-(trackW - wrapW));
    };
    calc();
    const ro = new ResizeObserver(calc);
    if (constraintRef.current) ro.observe(constraintRef.current);
    window.addEventListener('resize', calc);
    return () => { ro.disconnect(); window.removeEventListener('resize', calc); };
  }, []);

  /* Momentum / inertia after drag ends (smooth coast-to-stop) */
  const handleDragEnd = (_, info) => {
    const vx      = info.velocity.x;
    const current = x.get();
    const target  = Math.min(0, Math.max(leftBound, current + vx * 0.25));
    animate(x, target, { type: 'spring', stiffness: 80, damping: 20, mass: 1 });
  };

  return (
    <section
      id="work"
      className="viewport-snap"
      ref={sectionRef}
      style={{ flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          padding: '0 max(1.5rem, 6vw)',
          marginBottom: '2rem',
          zIndex: 10,
          flexShrink: 0,
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <span style={{ width: 40, height: 1, background: 'var(--brand-cyan)' }} />
          <span style={{
            fontSize: '0.7rem', fontFamily: 'monospace',
            color: 'var(--brand-cyan)', letterSpacing: '0.3em', textTransform: 'uppercase',
          }}>
            Selected Work
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
          }}>
            PRODUCTION&nbsp;
            <span className="text-gradient-neon">WORK</span>
          </h2>
          <p style={{
            color: 'var(--text-muted)', fontSize: '0.8rem',
            fontFamily: 'monospace', letterSpacing: '0.12em',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
          }}>
            <span style={{ fontSize: '1rem' }}>←</span>
            DRAG TO EXPLORE
            <span style={{ fontSize: '1rem' }}>→</span>
          </p>
        </div>
      </motion.div>

      {/* ── Carousel ──
          The key fix: constraintRef wraps everything so Framer can measure
          the available width. trackRef is on the draggable strip.
          overflow is visible here so the card edges don't get clipped.    */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        ref={constraintRef}
        data-interaction="carousel"
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          /* overflow must be visible for drag to feel natural */
          overflow: 'visible',
          position: 'relative',
          zIndex: 10,
          /* clip only vertically so out-of-bounds cards don't show above/below */
          clipPath: 'inset(0 -200vw)',
        }}
      >
        <motion.div
          ref={trackRef}
          drag="x"
          style={{
            x,
            display: 'flex',
            gap: `${CARD_GAP}px`,
            paddingLeft: 'max(1.5rem, 6vw)',
            paddingRight: 'max(1.5rem, 6vw)',
            cursor: 'grab',
            touchAction: 'none',   /* lets touch drag work on mobile */
            userSelect: 'none',
          }}
          /* Let Framer handle velocity naturally without a hard wall */
          dragConstraints={{ left: leftBound, right: 0 }}
          dragElastic={0.12}
          dragMomentum={false}    /* we handle momentum ourselves above */
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: 'grabbing' }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
              /* Each card is a fixed-width, flex-shrink: 0 tile */
              className="project-card"
              style={{
                height: '460px',
                borderRadius: '20px',
                overflow: 'hidden',
                flexShrink: 0,
                position: 'relative',
                background: project.color,
                border: `1px solid ${project.accent}22`,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 0 0.5px ${project.accent}18`,
                transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
              }}
              whileHover={{
                scale: 1.018,
                boxShadow: `0 16px 60px rgba(0,0,0,0.5), 0 0 30px ${project.accent}28`,
                borderColor: `${project.accent}44`,
                transition: { duration: 0.25 },
              }}
            >
              {/* Image area — pointer-events none so drag isn't hijacked */}
              <div style={{
                width: '100%', height: '65%',
                overflow: 'hidden', position: 'relative',
                pointerEvents: 'none',
              }}>
                <img
                  src={project.img}
                  alt={project.name}
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Gradient scrim */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(3,0,20,0.98) 0%, rgba(3,0,20,0.35) 50%, transparent 100%)',
                }} />
              </div>

              {/* Meta info */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '1.5rem 1.75rem',
                transition: 'transform 0.35s ease',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                  <span style={{
                    fontSize: '0.68rem', color: project.accent,
                    fontFamily: 'monospace', letterSpacing: '0.15em', textTransform: 'uppercase',
                  }}>
                    {project.category}
                  </span>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    {project.year}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem', fontWeight: 700,
                  color: '#fff', lineHeight: 1.2, marginBottom: '0.85rem',
                }}>
                  {project.name}
                </h3>

                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.38rem 0.9rem', borderRadius: 9999,
                  border: `1px solid ${project.accent}44`,
                  fontSize: '0.72rem', color: project.accent,
                  fontFamily: 'monospace', letterSpacing: '0.1em',
                  background: `${project.accent}0d`,
                }}>
                  VIEW PROJECT
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dot indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        style={{
          display: 'flex', justifyContent: 'center', gap: '0.5rem',
          paddingBottom: '2rem', paddingTop: '1.25rem', flexShrink: 0,
        }}
      >
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.id}
            onClick={() => {
              // Calculate actual width so pagination works even when scaled down on mobile
              const cardEl = trackRef.current?.children[0];
              const actualWidth = cardEl ? cardEl.offsetWidth : CARD_W;
              const dest = -(i * (actualWidth + CARD_GAP));
              animate(x, Math.max(leftBound, dest), { type: 'spring', stiffness: 90, damping: 22 });
            }}
            style={{
              width: i === 0 ? 24 : 8,
              height: 8,
              borderRadius: 9999,
              background: p.accent,
              opacity: 0.5,
              cursor: 'pointer',
            }}
            whileHover={{ opacity: 1, scale: 1.2 }}
          />
        ))}
      </motion.div>
    </section>
  );
}
