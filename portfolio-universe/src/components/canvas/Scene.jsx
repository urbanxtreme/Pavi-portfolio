import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Starfield from './Starfield';
import Constellation from './Constellation';

export default function Scene({ renderState }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundColor: '#000', pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Starfield />
          {renderState === 'capabilities' && <Constellation />}
        </Suspense>
      </Canvas>
    </div>
  );
}