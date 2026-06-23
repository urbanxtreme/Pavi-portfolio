import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SOCIALS = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm7.369 5.424c1.343 1.629 2.167 3.694 2.21 5.94-2.403-.504-4.713-.56-6.915-.172-.275-.66-.56-1.316-.866-1.963 2.46-1.034 4.42-2.51 5.571-3.805zM12 2.252c2.26 0 4.33.81 5.944 2.143-1.057 1.202-2.897 2.562-5.23 3.498-1.143-2.12-2.4-3.906-3.65-5.26.91-.246 1.873-.381 2.936-.381zm-5.69.967c1.27 1.35 2.545 3.134 3.69 5.24-2.63.718-5.624 1.095-8.744 1.098C1.738 7.05 3.601 4.755 6.31 3.219zM1.76 11.33l.014-.29c3.26-.002 6.45-.44 9.38-1.353.245.486.48.974.702 1.463-3.443 1.06-6.33 3.254-8.505 6.57-1.007-1.84-1.591-3.97-1.591-6.39zm3.396 8.025c2.027-3.266 4.747-5.344 7.951-6.236.935 2.5 1.634 5.066 2.058 7.695-3.407 1.313-7.337.494-10.009-1.459zm11.53.87c-.439-2.452-1.1-4.839-1.942-7.114 1.994-.285 4.098-.228 6.286.163-.464 2.864-2.02 5.356-4.344 6.951z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

const INPUT_STYLE = {
  width: '100%',
  padding: '0.8rem 1.1rem',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '10px',
  color: '#fff',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.25s, box-shadow 0.25s',
  userSelect: 'text',
};

export default function FinalConvergence() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: '-60px' });
  const [form, setForm]  = useState({ name: '', email: '', message: '' });
  const [sent, setSent]  = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href =
      `mailto:pavi@portfolio.dev?subject=Hello from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 500,
        background: 'radial-gradient(ellipse, rgba(112,0,255,0.13) 0%, transparent 65%)',
        filter: 'blur(70px)', pointerEvents: 'none', borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: 400, height: 400,
        background: 'radial-gradient(ellipse, rgba(0,245,255,0.06) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none', borderRadius: '50%',
      }} />

      {/* ─── Main content ─── */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem max(1.5rem, 6vw) 3rem',
        zIndex: 10,
        width: '100%',
        maxWidth: '860px',
        margin: '0 auto',
      }}>

        {/* Section label */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '2rem', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <span style={{ width: 36, height: 1, background: 'var(--brand-cyan)' }} />
            <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--brand-cyan)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              Get In Touch
            </span>
            <span style={{ width: 36, height: 1, background: 'var(--brand-cyan)' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Let's Build{' '}
            <span className="text-gradient-neon">Something Great</span>
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: '34rem',
            margin: '0 auto',
          }}>
            Have a project in mind? I'd love to hear about it.
            Let's craft a digital experience together that stands out.
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.form
          {...fadeUp(0.15)}
          onSubmit={handleSubmit}
          className="elite-glass"
          style={{
            width: '100%',
            padding: '2rem',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '1.75rem',
          }}
        >
          <div className="contact-grid">
            {/* Name */}
            <div>
              <label style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--text-muted)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.4rem' }}>
                NAME
              </label>
              <input
                type="text" placeholder="Your name" value={form.name} required
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                style={INPUT_STYLE}
                onFocus={e => { e.target.style.borderColor = 'var(--brand-cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,245,255,0.08)'; }}
                onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
            {/* Email */}
            <div>
              <label style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--text-muted)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.4rem' }}>
                EMAIL
              </label>
              <input
                type="email" placeholder="your@email.com" value={form.email} required
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                style={INPUT_STYLE}
                onFocus={e => { e.target.style.borderColor = 'var(--brand-cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,245,255,0.08)'; }}
                onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--text-muted)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.4rem' }}>
              MESSAGE
            </label>
            <textarea
              rows={3} placeholder="Tell me about your project..." value={form.message} required
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              style={{ ...INPUT_STYLE, resize: 'vertical' }}
              onFocus={e => { e.target.style.borderColor = 'var(--brand-cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,245,255,0.08)'; }}
              onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          <motion.button
            type="submit"
            className="hero-btn-primary"
            data-interaction="magnetic"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{ alignSelf: 'flex-start', cursor: 'pointer', border: 'none' }}
          >
            {sent ? '✓ Sent! Check your mail app' : 'Send Message'}
            {!sent && (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            )}
          </motion.button>
        </motion.form>

        {/* Social links row */}
        <motion.div
          {...fadeUp(0.3)}
          style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}
        >
          {SOCIALS.map(s => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {s.icon}
              {s.name}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ─── Footer bar ─── */}
      <motion.footer
        {...fadeUp(0.45)}
        style={{
          width: '100%',
          zIndex: 10,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '1.25rem max(1.5rem, 6vw)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          background: 'rgba(3,0,20,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Logo / name */}
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: '#fff' }}>
          PAV<span style={{ color: 'var(--brand-cyan)' }}>I</span>
        </span>

        {/* Credit */}
        <span style={{
          fontFamily: 'monospace', fontSize: '0.72rem',
          color: 'var(--text-muted)', letterSpacing: '0.08em',
          textAlign: 'center',
        }}>
          © {new Date().getFullYear()} Pavi · Designed &amp; Built with ♥ using React &amp; Framer Motion
        </span>

        {/* Back to top */}
        <motion.button
          data-interaction="magnetic"
          whileHover={{ scale: 1.05, color: 'var(--brand-cyan)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            background: 'none', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 9999, padding: '0.35rem 0.9rem',
            color: 'var(--text-muted)', fontFamily: 'monospace',
            fontSize: '0.72rem', letterSpacing: '0.1em', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            transition: 'border-color 0.25s, color 0.25s',
          }}
        >
          ↑ BACK TO TOP
        </motion.button>
      </motion.footer>
    </section>
  );
}
