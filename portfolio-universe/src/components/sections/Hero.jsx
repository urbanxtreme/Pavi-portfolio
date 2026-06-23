import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="viewport-snap" style={{ alignItems: 'center' }}>

      {/* ── Ambient Blobs ── */}
      <div className="hero-blob" style={{
        top: '10%', left: '5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(112,0,255,0.18) 0%, transparent 70%)',
        animationDuration: '20s',
      }} />
      <div className="hero-blob" style={{
        bottom: '5%', right: '5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)',
        animationDuration: '25s',
        animationDelay: '-8s',
      }} />
      <div className="hero-blob" style={{
        top: '40%', right: '25%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(255,0,127,0.08) 0%, transparent 70%)',
        animationDuration: '30s',
        animationDelay: '-15s',
      }} />

      {/* ── Main Content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          padding: '0 max(1.5rem, 6vw)',
          width: '100%',
          zIndex: 10,
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span className="hero-badge">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="reveal-mask"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 10vw, 9rem)',
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            marginBottom: '1.5rem',
            maxWidth: '900px',
          }}
        >
          PAVI
          <br />
          <span style={{ color: 'var(--brand-cyan)', WebkitTextFillColor: 'var(--brand-cyan)' }}>
            .CREATES
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            fontWeight: 700,
            color: 'var(--text-secondary)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          UI / UX Designer &amp; Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '42rem',
            fontWeight: 300,
            lineHeight: 1.7,
            marginBottom: '3rem',
          }}
        >
          Crafting immersive digital experiences where design and code collide.
          Inspired by Apple, Stripe, and Framer — built to leave a mark.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <motion.a
            className="hero-btn-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>

          <motion.a
            className="hero-btn-ghost"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Floating stat chips */}
        <motion.div
          variants={item}
          className="hero-stats"
        >
          {[
            { val: '30+', label: 'Projects' },
            { val: '3+',  label: 'Years Exp.' },
            { val: '15+', label: 'Happy Clients' },
          ].map(s => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--brand-cyan)',
              }}>
                {s.val}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}