import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Starfield() {
  const meshRef = useRef();
  const particleCount = 2000;

  const positions = useMemo(() => {
    const coords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      coords[i] = (Math.random() - 0.5) * 15;
    }
    return coords;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate system over time
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
      meshRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
