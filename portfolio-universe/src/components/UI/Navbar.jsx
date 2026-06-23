import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'About',        id: 'about' },
  { label: 'Skills',       id: 'capabilities' },
  { label: 'Work',         id: 'work' },
  { label: 'Timeline',     id: 'timeline' },
  { label: 'Contact',      id: 'contact' },
];

export default function Navbar({ scrollRef }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const el = scrollRef?.current;
    if (!el) return;

    const onScroll = () => {
      setScrolled(el.scrollTop > 60);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, [scrollRef]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      {/* Logo */}
      <a className="nav-logo" onClick={() => scrollTo('hero')} style={{ cursor: 'pointer' }}>
        PAV<span>I</span>
      </a>

      {/* Links */}
      <ul className="nav-links">
        {NAV_ITEMS.map(item => (
          <li key={item.id}>
            <a
              className={active === item.id ? 'active' : ''}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a className="nav-cta" onClick={() => scrollTo('contact')}>
        Hire Me
      </a>
    </nav>
  );
}
