"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

function Sphere() {
  return (
    <Float
      speed={4}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <mesh>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial
          color="#22d3ee"
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    setDesktop(window.innerWidth >= 1024);
  }, []);

  if (!desktop) return null;

  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} />
        <Sphere />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}