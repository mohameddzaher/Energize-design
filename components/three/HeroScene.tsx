'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color(0x283b4a);
    const color2 = new THREE.Color(0xe4ba8b);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 30;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 30;

      const color = Math.random() > 0.5 ? color1 : color2;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += Math.sin(clock.getElapsedTime() + i) * 0.001;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geom;
  }, [positions, colors]);

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.6} />
    </points>
  );
}

function GeometricShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      groupRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          child.position.y = Math.sin(clock.getElapsedTime() * 0.5 + index) * 0.3;
        }
      });
    }
  });

  const shapes = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (i / 6) * Math.PI * 2;
      const radius = 6;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return { x, z, index: i };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {shapes.map((shape, index) => (
        <mesh key={index} position={[shape.x, 0, shape.z]}>
          <boxGeometry args={[1, 2, 1]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? '#283b4a' : '#e4ba8b'}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function LightBeams() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} color="#e4ba8b" />
      <directionalLight position={[-10, 10, -5]} intensity={0.6} color="#283b4a" />
      <pointLight position={[0, 5, 0]} intensity={0.4} color="#fff9f2" />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 5, 12], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 5, 12]} fov={60} />
        <LightBeams />
        <FloatingParticles />
        <GeometricShapes />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}
