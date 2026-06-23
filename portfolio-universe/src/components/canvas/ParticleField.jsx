import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField() {
  const points = useRef();
  const count = 1500; // Number of floating particles

  // Generate random positions once using useMemo to maintain peak performance
  const [positions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;     // Random X position coordinate
      positions[i + 1] = (Math.random() - 0.5) * 12; // Random Y position coordinate
      positions[i + 2] = (Math.random() - 0.5) * 12; // Random Z position coordinate
    }
    return [positions];
  }, []);

  // Frame loop execution hook running at native monitor refresh rates (60hz-144hz+)
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.03;
    // Slowly rotate the entire system array over time
    if (points.current) {
      points.current.rotation.y = time;
      points.current.rotation.x = time * 0.4;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00f5ff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}