import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    name: 'Brand Identity Portal',
    category: 'UI/UX Design · Figma',
    year: '2024',
    color: 'rgba(0,245,255,0.12)',
    accent: '#00f5ff',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Motion Design System',
    category: 'Framer Motion · React',
    year: '2024',
    color: 'rgba(112,0,255,0.12)',
    accent: '#9d4edd',
    img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'E-Commerce Redesign',
    category: 'UX Research · Next.js',
    year: '2023',
    color: 'rgba(255,0,127,0.12)',
    accent: '#ff007f',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Dashboard Analytics UI',
    category: 'Data Visualisation · D3',
    year: '2023',
    color: 'rgba(0,245,255,0.12)',
    accent: '#00f5ff',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700&auto=format&fit=crop',
  },
];

export default function Work() {
  const sectionRef  = useRef(null);
  const carouselRef = useRef(null);
  const inView      = useInView(sectionRef, { once: true, margin: '-80px' });
  const [constraint, setConstraint] = useState(0);

  useEffect(() => {
    const update = () => {
      if (carouselRef.current) {
        setConstraint(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section id="work" className="viewport-snap" ref={sectionRef}
      style={{ flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          padding: '0 max(1.5rem, 6vw)',
          marginBottom: '2.5rem',
          zIndex: 10,
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span style={{ width: 40, height: 1, background: 'var(--brand-cyan)' }} />
          <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--brand-cyan)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
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
            PRODUCTION{' '}
            <span className="text-gradient-neon">WORK</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
            ← DRAG TO EXPLORE →
          </p>
        </div>
      </motion.div>

      {/* Draggable Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ overflow: 'hidden', width: '100%', zIndex: 10, flex: 1, display: 'flex', alignItems: 'center' }}
        data-interaction="carousel"
      >
        <motion.div
          ref={carouselRef}
          drag="x"
          dragConstraints={{ right: 0, left: -constraint }}
          dragElastic={0.08}
          style={{
            display: 'flex',
            gap: '1.5rem',
            paddingLeft: 'max(1.5rem, 6vw)',
            paddingRight: '6vw',
            cursor: 'grab',
            width: 'max-content',
          }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              className="project-card elite-glass"
              style={{
                background: project.color,
                border: `1px solid ${project.accent}22`,
              }}
            >
              {/* Image */}
              <div style={{ width: '100%', height: '65%', overflow: 'hidden', position: 'relative', pointerEvents: 'none' }}>
                <img
                  src={project.img}
                  alt={project.name}
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="project-card-overlay" />
              </div>

              {/* Meta */}
              <div className="project-card-meta">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    color: project.accent,
                    fontFamily: 'monospace',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}>
                    {project.category}
                  </span>
                  <span style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'monospace',
                  }}>
                    {project.year}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.2,
                  marginBottom: '0.75rem',
                }}>
                  {project.name}
                </h3>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.9rem',
                  borderRadius: 9999,
                  border: `1px solid ${project.accent}44`,
                  fontSize: '0.75rem',
                  color: project.accent,
                  fontFamily: 'monospace',
                  letterSpacing: '0.1em',
                  background: `${project.accent}0d`,
                }}>
                  VIEW PROJECT
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
