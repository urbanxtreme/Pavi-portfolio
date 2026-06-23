import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

// Unique design tokens for our skill planets
const SKILLS = [
  { name: 'React / Vite', color: '#00f5ff', radius: 1.6, speed: 0.5 },
  { name: 'Three.js / WebGL', color: '#ff007f', radius: 2.3, speed: 0.35 },
  { name: 'Vanilla CSS 3', color: '#9d4edd', radius: 3.1, speed: 0.25 },
  { name: 'Node.js Engine', color: '#10b981', radius: 3.8, speed: 0.18 },
  { name: 'Framer Motion', color: '#f59e0b', radius: 4.6, speed: 0.12 },
];

function SkillPlanet({ name, color, radius, speed }) {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (meshRef.current) {
      // Calculate continuous geometric orbital paths
      meshRef.current.position.x = Math.cos(t) * radius;
      meshRef.current.position.z = Math.sin(t) * radius;
      
      // Make the text label always face directly toward the active viewport camera
      meshRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group ref={meshRef}>
      {/* Planetary Node Core */}
      <mesh>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>
      
      {/* Dynamic Aura Glow Layer */}
      <mesh scale={[1.4, 1.4, 1.4]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.2} />
      </mesh>

      {/* Premium Typography Label */}
      <Text
        position={[0, 0.35, 0]}
        fontSize={0.16}
        color="#ffffff"
        font="https://fonts.gstatic.com/s/plusjakartasans/v8/L0x8DFMGlS35bXxqLGHbKy9gcaD648Y.woff"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}

export default function SkillsGalaxy() {
  const coreRef = useRef();

  useFrame((state) => {
    if (coreRef.current) {
      // Slowly spin the central core architecture
      coreRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Matrix Anchor Star */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.3, 24, 24]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.15} />
      </mesh>

      {/* Map out independent planetary skill nodes */}
      {SKILLS.map((skill, index) => (
        <SkillPlanet key={index} {...skill} />
      ))}
    </group>
  );
}