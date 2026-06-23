import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SOCIALS = [
  {
    name: 'GitHub',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    href: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    href: 'https://linkedin.com',
  },
  {
    name: 'Dribbble',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-7.persists 6.671-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
      </svg>
    ),
    href: 'https://dribbble.com',
  },
];

export default function FinalConvergence() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:pavi@portfolio.dev?subject=Hello from ${formData.name}&body=${formData.message}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section id="contact" className="viewport-snap" ref={sectionRef}
      style={{ flexDirection: 'column', justifyContent: 'center', padding: '0 max(1.5rem, 6vw)', alignItems: 'center' }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400,
        background: 'radial-gradient(ellipse, rgba(112,0,255,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', borderRadius: '50%',
      }} />

      <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', zIndex: 10 }}>

        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ width: 40, height: 1, background: 'var(--brand-cyan)' }} />
            <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--brand-cyan)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              Get In Touch
            </span>
            <span style={{ width: 40, height: 1, background: 'var(--brand-cyan)' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.0,
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>
            Let's Build{' '}
            <br />
            <span className="text-gradient-neon">Something Great</span>
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: '36rem',
            margin: '0 auto',
          }}>
            Have a project in mind? I'd love to hear about it.
            Let's craft a digital experience together that stands out.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          {...fadeUp(0.2)}
          onSubmit={handleSubmit}
          className="elite-glass"
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>
                NAME
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                required
                style={{
                  width: '100%', padding: '0.9rem 1.25rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                  outline: 'none', transition: 'border-color 0.3s',
                  userSelect: 'text',
                }}
                onFocus={e => { e.target.style.borderColor = 'var(--brand-cyan)'; }}
                onBlur={e => { e.target.style.borderColor = 'var(--glass-border)'; }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>
                EMAIL
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                required
                style={{
                  width: '100%', padding: '0.9rem 1.25rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                  outline: 'none', transition: 'border-color 0.3s',
                  userSelect: 'text',
                }}
                onFocus={e => { e.target.style.borderColor = 'var(--brand-cyan)'; }}
                onBlur={e => { e.target.style.borderColor = 'var(--glass-border)'; }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>
              MESSAGE
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
              required
              style={{
                width: '100%', padding: '0.9rem 1.25rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--glass-border)',
                borderRadius: '12px',
                color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                outline: 'none', resize: 'vertical', transition: 'border-color 0.3s',
                userSelect: 'text',
              }}
              onFocus={e => { e.target.style.borderColor = 'var(--brand-cyan)'; }}
              onBlur={e => { e.target.style.borderColor = 'var(--glass-border)'; }}
            />
          </div>

          <motion.button
            type="submit"
            className="hero-btn-primary"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{ alignSelf: 'flex-start', cursor: 'pointer', border: 'none' }}
          >
            {sent ? '✓ Message Sent!' : 'Send Message'}
            {!sent && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            )}
          </motion.button>
        </motion.form>

        {/* Social links */}
        <motion.div
          {...fadeUp(0.35)}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
        >
          {SOCIALS.map(s => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {s.icon}
              {s.name}
            </motion.a>
          ))}

          {/* Footer line */}
        </motion.div>

        <motion.p
          {...fadeUp(0.5)}
          style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: '0.1em', marginTop: '2rem' }}
        >
          © 2024 PAVI · Built with React &amp; Framer Motion
        </motion.p>
      </div>
    </section>
  );
}
