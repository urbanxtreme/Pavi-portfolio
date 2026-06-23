import React from 'react';

const ROW_1 = [
  'UI/UX Design', 'React', 'Figma', 'Framer Motion',
  'Three.js', 'Next.js', 'TypeScript', 'Design Systems',
];

const ROW_2 = [
  'Prototyping', 'GSAP', 'CSS Animation', 'WebGL',
  'User Research', 'Node.js', 'Interaction Design', 'Motion',
];

function MarqueeRow({ items, reverse = false }) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className={`marquee-track${reverse ? ' marquee-track-reverse' : ''}`}
        style={{ display: 'flex' }}
      >
        {doubled.map((text, i) => (
          <span key={i} className="marquee-item">
            {text}
            <span className="marquee-separator">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function InfiniteMarquee() {
  return (
    <div className="marquee-strip section-container" style={{ padding: '2rem 0' }}>
      <MarqueeRow items={ROW_1} />
      <div style={{ height: '0.75rem' }} />
      <MarqueeRow items={ROW_2} reverse />
    </div>
  );
}
