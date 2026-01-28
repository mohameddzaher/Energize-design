"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BRAND_DARK = "#283b4a";
const BRAND_GOLD = "#e4ba8b";
const BRAND_RED = "#dc2626"; // Red/Sika color
const BRAND_RED_LIGHT = "#ef4444"; // Lighter red

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 60; // Reduced from 180 for better performance
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const goldColor = new THREE.Color(BRAND_GOLD);
    const redColor = new THREE.Color(BRAND_RED_LIGHT);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

      // Mix gold and red particles (70% gold, 30% red)
      const color = Math.random() > 0.3 ? goldColor : redColor;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geom;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.04; // Slower rotation
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.35}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
    </points>
  );
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.1; // Slower
    ref.current.rotation.y = clock.getElapsedTime() * 0.12;
  });

  return (
    <mesh ref={ref} position={[4, 0, -2]}>
      <torusGeometry args={[2.5, 0.08, 12, 32]} /> {/* Reduced segments */}
      <meshBasicMaterial
        color={BRAND_GOLD}
        transparent
        opacity={0.35}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function RedRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * -0.12; // Slower
    ref.current.rotation.y = clock.getElapsedTime() * 0.15;
  });

  return (
    <mesh ref={ref} position={[-4, 1.5, -1.5]}>
      <torusGeometry args={[2, 0.06, 10, 24]} /> {/* Reduced segments */}
      <meshBasicMaterial
        color={BRAND_RED_LIGHT}
        transparent
        opacity={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function SoftSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.4; // Slower
  });

  return (
    <mesh ref={ref} position={[5, -0.5, -3]}>
      <sphereGeometry args={[1.2, 24, 24]} /> {/* Reduced segments */}
      <meshBasicMaterial color={BRAND_GOLD} transparent opacity={0.12} />
    </mesh>
  );
}

function GridLinesSimple() {
  const ref = useRef<THREE.LineSegments>(null);
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = -6; i <= 6; i += 1.2) {
      pts.push(new THREE.Vector3(i, -4, -3), new THREE.Vector3(i, 4, -3));
      pts.push(new THREE.Vector3(-6, i, -3), new THREE.Vector3(6, i, -3));
    }
    return pts;
  }, []);

  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points],
  );

  useFrame(({ clock }) => {
    if (!ref.current?.material) return;
    (ref.current.material as THREE.LineBasicMaterial).opacity =
      0.06 + Math.sin(clock.getElapsedTime() * 0.5) * 0.04;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color={BRAND_GOLD} transparent opacity={0.08} />
    </lineSegments>
  );
}

function AmbientScene() {
  return (
    <>
      <color attach="background" args={[BRAND_DARK]} />
      <ambientLight intensity={0.5} /> {/* Increased ambient, reduce point lights */}
      <pointLight position={[10, 5, 5]} intensity={0.25} color={BRAND_GOLD} />
      <pointLight position={[-6, 4, 2]} intensity={0.2} color={BRAND_RED_LIGHT} />
      <FloatingParticles />
      <FloatingRing />
      <RedRing />
      <SoftSphere />
    </>
  );
}

export default function HeroBackgroundScene() {
  return (
    <div className="absolute inset-0 w-full h-full will-change-transform">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{
          antialias: false, // Disable for performance
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: false,
        }}
        dpr={[1, 1.5]} // Reduced from [1, 2]
        performance={{ min: 0.5 }} // Lower performance threshold
      >
        <AmbientScene />
      </Canvas>
    </div>
  );
}
