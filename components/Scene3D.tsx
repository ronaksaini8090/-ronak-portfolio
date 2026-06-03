"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Sphere() {
  return (
    <Float speed={4} rotationIntensity={1.4} floatIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[2.8, 1]} />
        <meshStandardMaterial color="#22d3ee" wireframe />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-25 sm:opacity-30 md:opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} />
        <Sphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}
