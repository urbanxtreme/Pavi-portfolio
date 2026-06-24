import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILLS = [
  'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5 & CSS3',
  'Tailwind CSS', 'Redux UI', 'Python', 'Pandas & NumPy', 'Scikit-Learn',
  'Three.js', 'Figma (UI/UX)', 'Git & GitHub', 'SQL', 'Java / C',
];

const BIOS = [
  "Hi, I'm Pavithra — a B.Tech Computer Science Engineering student specializing in Frontend Development, Data Analytics, and AI/ML.",
  "I love building interactive web interfaces and data visualization applications. Combining strong engineering principles with modern UI/UX design, I create clean, performance-optimized, and impactful solutions.",
  "From building 3D WebGL solar system simulations to crafting machine learning pipelines for disease forecasting, I approach every project with curiosity and analytical rigor.",
];

function Counter({ from = 0, to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref} style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2rem, 10vw, 3.5rem)',
      fontWeight: 800,
      background: 'linear-gradient(135deg, var(--brand-cyan), var(--neon-purple))',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      {inView ? to : from}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section id="about" className="viewport-snap" ref={sectionRef}>
      {/* Ambient blob */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(112,0,255,0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{
        padding: '0 max(1.5rem, 6vw)',
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 10,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* Left — Bio */}
        <div>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ width: '40px', height: '1px', background: 'var(--brand-cyan)' }} />
              <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--brand-cyan)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                About Me
              </span>
            </div>
          </motion.div>

          <motion.h2 {...fadeUp(0.1)} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '2rem',
          }}>
            Designing the{' '}
            <span className="text-gradient-neon">future of</span>{' '}
            the web.
          </motion.h2>

          {BIOS.map((text, i) => (
            <motion.p
              key={i}
              {...fadeUp(0.15 + i * 0.08)}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: '1rem',
              }}
            >
              {text}
            </motion.p>
          ))}

          {/* Skills pills */}
          <motion.div {...fadeUp(0.45)} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2rem' }}>
            {SKILLS.map(skill => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </motion.div>
        </div>

        {/* Right — Stats + Avatar card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Avatar placeholder card */}
          <motion.div
            {...fadeUp(0.2)}
            className="elite-glass"
            style={{
              borderRadius: '24px',
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            {/* Avatar circle */}
            <div style={{
              width: 80, height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              fontSize: '2rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              color: '#fff',
            }}>
              P
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                Pavithra
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
                Frontend Developer,UI/UX Designer &amp; Data Analyst
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                {['React', 'Python', 'Figma'].map(tag => (
                  <span key={tag} style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    background: 'rgba(0,245,255,0.08)',
                    border: '1px solid rgba(0,245,255,0.2)',
                    fontSize: '0.7rem',
                    color: 'var(--brand-cyan)',
                    fontFamily: 'monospace',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            {...fadeUp(0.3)}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
          >
            {[
              { value: '5', suffix: '+', label: 'Projects Completed' },
              { value: '3', suffix: '', label: 'Hackathon Awards' },
              { value: '3', suffix: '+', label: 'Tech Communities Led' },
              { value: '2027', suffix: '', label: 'B.Tech CSE Graduating' },
            ].map(stat => (
              <div key={stat.label} className="elite-glass about-stat-card">
                <div className="about-stat-number">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
