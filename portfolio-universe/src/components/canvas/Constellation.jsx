import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const ARTIFACTS = [
  { text: "TypeScript", coord: [1.5, 1.2, 0] },
  { text: "React 19", coord: [-2, 0.8, -1] },
  { text: "WebGL Engine", coord: [0, -1.5, 1] },
  { text: "Next.js Architecture", coord: [-1.8, -1.2, 0] },
  { text: "GLSL Shaders", coord: [2.2, -0.5, -2] },
  { text: "Framer Motion", coord: [0.5, 2, -1] },
];

export default function Constellation() {
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const points = ARTIFACTS.map((a) => new THREE.Vector3(...a.coord));
    // Connect sequential points together via spatial interpolation matrix mapping
    geo.setFromPoints([...points, points[0]]);
    return geo;
  }, []);

  return (
    <group>
      <line geometry={lineGeometry}>
        <lineBasicMaterial
          color="#7000ff"
          transparent
          opacity={0.3}
          linewidth={1}
        />
      </line>

      {ARTIFACTS.map((node, i) => (
        <group key={i} position={node.coord}>
          <mesh>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial color="#00f5ff" />
          </mesh>
          <Text
            position={[0, 0.25, 0]}
            fontSize={0.15}
            color="#8a8f98"
            font="https://fonts.gstatic.com/s/plusjakartasans/v8/L0x8DFMGlS35bXxqLGHbKy9gcaD648Y.woff"
          >
            {node.text}
          </Text>
        </group>
      ))}
    </group>
  );
}
