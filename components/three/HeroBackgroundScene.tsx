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
  const count = 180;
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
    ref.current.rotation.y = clock.getElapsedTime() * 0.06;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.28}
        transparent
        opacity={0.55}
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
    ref.current.rotation.x = clock.getElapsedTime() * 0.15;
    ref.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh ref={ref} position={[4, 0, -2]}>
      <torusGeometry args={[2.5, 0.08, 16, 48]} />
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
    ref.current.rotation.x = clock.getElapsedTime() * -0.18;
    ref.current.rotation.y = clock.getElapsedTime() * 0.25;
    ref.current.rotation.z = clock.getElapsedTime() * 0.1;
  });

  return (
    <mesh ref={ref} position={[-4, 1.5, -1.5]}>
      <torusGeometry args={[2, 0.06, 12, 36]} />
      <meshBasicMaterial
        color={BRAND_RED_LIGHT}
        transparent
        opacity={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function SecondRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * -0.12;
    ref.current.rotation.z = clock.getElapsedTime() * 0.18;
  });

  return (
    <mesh ref={ref} position={[-3, 1, -1]}>
      <torusGeometry args={[1.8, 0.06, 12, 36]} />
      <meshBasicMaterial
        color={BRAND_GOLD}
        transparent
        opacity={0.25}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function SoftSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.5;
  });

  return (
    <mesh ref={ref} position={[5, -0.5, -3]}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshBasicMaterial color={BRAND_GOLD} transparent opacity={0.12} />
    </mesh>
  );
}

function RedSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.4;
    ref.current.position.y = Math.cos(clock.getElapsedTime() * 0.35) * 0.3;
  });

  return (
    <mesh ref={ref} position={[-5, 0, -2.5]}>
      <sphereGeometry args={[0.9, 32, 32]} />
      <meshBasicMaterial color={BRAND_RED_LIGHT} transparent opacity={0.15} />
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
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 5, 5]} intensity={0.3} color={BRAND_GOLD} />
      <pointLight position={[-8, -3, 3]} intensity={0.2} color={BRAND_GOLD} />
      {/* Red accent lights */}
      <pointLight
        position={[-6, 4, 2]}
        intensity={0.25}
        color={BRAND_RED_LIGHT}
      />
      <pointLight position={[8, -2, -1]} intensity={0.15} color={BRAND_RED} />
      <FloatingParticles />
      <FloatingRing />
      <SecondRing />
      <RedRing />
      <SoftSphere />
      <RedSphere />
    </>
  );
}

export default function HeroBackgroundScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <AmbientScene />
      </Canvas>
    </div>
  );
}
