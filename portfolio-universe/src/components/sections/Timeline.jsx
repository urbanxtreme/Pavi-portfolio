import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MILESTONES = [
  {
    year: '2026 - Present',
    title: 'Community Member',
    company: 'Rewriting the Code (RTC)',
    desc: 'Active member of a global community supporting women in tech, engaging in professional development, mentorship, and peer networking.',
    color: 'var(--brand-cyan)',
  },
  {
    year: '2025 - 2026',
    title: 'Campus Lead & Vice Chair',
    company: 'TinkerHub CEAL | IEEE WIE | FOSS CEAL',
    desc: 'Led campus tech communities, ran coding workshops, organized hackathons, and mentored students in frontend engineering and open-source contributions.',
    color: 'var(--neon-purple)',
  },
  {
    year: '2023 - 2027',
    title: 'B.Tech in Computer Science',
    company: 'College of Engineering, Attingal',
    desc: 'Specializing in Computer Science & Engineering (CSE). Studying Frontend Web Technologies, Data Analytics, Algorithms, and Machine Learning.',
    color: 'var(--brand-pink)',
  },
  {
    year: '2023',
    title: 'Senior Secondary (Class XII)',
    company: 'St. Joseph Public School, Pattanakad',
    desc: 'Completed secondary education with a strong scientific and mathematical focus, transitioning into B.Tech CSE.',
    color: 'var(--brand-cyan)',
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="timeline" className="viewport-snap" ref={sectionRef}
      style={{ flexDirection: 'column', justifyContent: 'center', padding: '0 max(1.5rem, 6vw)' }}
    >
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', zIndex: 10 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ width: 40, height: 1, background: 'var(--brand-cyan)' }} />
            <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--brand-cyan)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              My Journey
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
          }}>
            EXPEDITION{' '}
            <span className="text-gradient-neon">TIMELINE</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {MILESTONES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="elite-glass"
              style={{
                padding: '2rem',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent top bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px',
                background: `linear-gradient(to right, ${item.color}, transparent)`,
              }} />

              {/* Year badge */}
              <span style={{
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                fontWeight: 700,
                color: item.color,
                letterSpacing: '0.25em',
                display: 'block',
                marginBottom: '0.75rem',
              }}>
                {item.year}
              </span>

              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#fff',
                fontFamily: 'var(--font-display)',
                marginBottom: '0.25rem',
                lineHeight: 1.3,
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '0.8rem',
                color: item.color,
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                opacity: 0.8,
              }}>
                {item.company}
              </p>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
                lineHeight: 1.65,
                fontWeight: 300,
              }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
