import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MILESTONES = [
  {
    year: '2024',
    title: 'Senior UI/UX Designer',
    company: 'Freelance — Global Clients',
    desc: 'Delivered end-to-end product design for SaaS startups and digital agencies across US, UK, and Asia. Specialising in design systems and motion-rich interfaces.',
    color: 'var(--brand-cyan)',
  },
  {
    year: '2023',
    title: 'Product Designer',
    company: 'Creative Digital Agency',
    desc: 'Led UX research, wireframing, and high-fidelity prototyping for e-commerce and fintech clients. Collaborated with dev teams on React implementation.',
    color: 'var(--neon-purple)',
  },
  {
    year: '2022',
    title: 'UI Developer',
    company: 'Tech Startup',
    desc: 'Built component libraries and implemented animated interfaces with React and Framer Motion. Improved user engagement by 40% through interaction redesign.',
    color: 'var(--brand-pink)',
  },
  {
    year: '2021',
    title: 'Design Journey Begins',
    company: 'Self-Directed',
    desc: 'Started exploring the intersection of design and code. Completed intensive courses in UI design, front-end development, and interaction design principles.',
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
