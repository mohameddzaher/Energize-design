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
  const count = 80; // Increased for better visibility
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const goldColor = new THREE.Color(BRAND_GOLD);
    const redColor = new THREE.Color(BRAND_RED_LIGHT);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      // Mix gold and red particles (60% gold, 40% red for more red visibility)
      const color = Math.random() > 0.4 ? goldColor : redColor;
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
    ref.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.5}
        transparent
        opacity={0.85}
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
    ref.current.rotation.x = clock.getElapsedTime() * 0.12;
    ref.current.rotation.y = clock.getElapsedTime() * 0.15;
  });

  return (
    <mesh ref={ref} position={[4, 0, -2]}>
      <torusGeometry args={[3, 0.1, 16, 40]} />
      <meshBasicMaterial
        color={BRAND_GOLD}
        transparent
        opacity={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function RedRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * -0.15;
    ref.current.rotation.y = clock.getElapsedTime() * 0.18;
  });

  return (
    <mesh ref={ref} position={[-4, 1.5, -1.5]}>
      <torusGeometry args={[2.5, 0.08, 14, 32]} />
      <meshBasicMaterial
        color={BRAND_RED_LIGHT}
        transparent
        opacity={0.45}
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
    ref.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh ref={ref} position={[5, -0.5, -3]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color={BRAND_GOLD} transparent opacity={0.2} />
    </mesh>
  );
}

// Floating geometric cubes - architectural elements
function FloatingCubes() {
  const cubes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10 - 2,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      size: 0.3 + Math.random() * 0.5,
      speed: 0.01 + Math.random() * 0.02,
      rotSpeed: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
      ] as [number, number, number],
      color: Math.random() > 0.5 ? BRAND_GOLD : BRAND_RED_LIGHT,
    }));
  }, []);

  return (
    <>
      {cubes.map((cube, i) => (
        <FloatingCube key={i} {...cube} />
      ))}
    </>
  );
}

function FloatingCube({
  position,
  rotation,
  size,
  speed,
  rotSpeed,
  color,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  size: number;
  speed: number;
  rotSpeed: [number, number, number];
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = initialY + Math.sin(clock.getElapsedTime() * speed * 10) * 1.5;
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.rotation.z += rotSpeed[2];
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.25}
        wireframe={Math.random() > 0.5}
      />
    </mesh>
  );
}

// Architectural grid lines - design planning
function ArchitecturalGrid() {
  const ref = useRef<THREE.LineSegments>(null);
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    // Horizontal lines
    for (let i = -8; i <= 8; i += 1.5) {
      pts.push(new THREE.Vector3(-10, i, -4), new THREE.Vector3(10, i, -4));
    }
    // Vertical lines
    for (let i = -10; i <= 10; i += 1.5) {
      pts.push(new THREE.Vector3(i, -8, -4), new THREE.Vector3(i, 8, -4));
    }
    return pts;
  }, []);

  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points],
  );

  useFrame(({ clock }) => {
    if (!ref.current?.material) return;
    const material = ref.current.material as THREE.LineBasicMaterial;
    material.opacity = 0.1 + Math.sin(clock.getElapsedTime() * 0.3) * 0.08;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color={BRAND_GOLD} transparent opacity={0.12} />
    </lineSegments>
  );
}

// Orbiting spheres - planets/design elements
function OrbitingSpheres() {
  const spheres = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      radius: 0.4 + Math.random() * 0.6,
      orbitRadius: 6 + Math.random() * 4,
      orbitSpeed: 0.05 + Math.random() * 0.1,
      angle: Math.random() * Math.PI * 2,
      color: Math.random() > 0.6 ? BRAND_GOLD : BRAND_RED_LIGHT,
      opacity: 0.2 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <>
      {spheres.map((sphere, i) => (
        <OrbitingSphere key={i} {...sphere} />
      ))}
    </>
  );
}

function OrbitingSphere({
  radius,
  orbitRadius,
  orbitSpeed,
  angle,
  color,
  opacity,
}: {
  radius: number;
  orbitRadius: number;
  orbitSpeed: number;
  angle: number;
  color: string;
  opacity: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const time = clock.getElapsedTime();
    ref.current.position.x = Math.cos(time * orbitSpeed + angle) * orbitRadius;
    ref.current.position.z = Math.sin(time * orbitSpeed + angle) * orbitRadius;
    ref.current.position.y = Math.sin(time * 0.5 + angle) * 2;
    ref.current.rotation.y = time * 0.3;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// Architectural pyramid - design element
function ArchitecturalPyramid() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.1;
    ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.6;
  });

  const geometry = useMemo(() => {
    const shape = new THREE.ConeGeometry(1.5, 2.5, 4);
    return shape;
  }, []);

  return (
    <mesh ref={ref} position={[-6, -2, -3]}>
      <primitive object={geometry} />
      <meshBasicMaterial
        color={BRAND_GOLD}
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

// Flowing lines - design flow
function FlowingLines() {
  const lines = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8 - 2
        ),
        new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8 - 2
        ),
        new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8 - 2
        ),
      ]);
      return curve;
    });
  }, []);

  return (
    <>
      {lines.map((curve, i) => (
        <FlowingLine key={i} curve={curve} index={i} />
      ))}
    </>
  );
}

function FlowingLine({
  curve,
  index,
}: {
  curve: THREE.CatmullRomCurve3;
  index: number;
}) {
  const ref = useRef<THREE.Line>(null);
  const points = useMemo(() => curve.getPoints(50), [curve]);
  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points],
  );

  useFrame(({ clock }) => {
    if (!ref.current?.material) return;
    const material = ref.current.material as THREE.LineBasicMaterial;
    material.opacity = 0.15 + Math.sin(clock.getElapsedTime() * 0.5 + index) * 0.1;
  });

  return (
    <primitive ref={ref} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({
      color: index % 2 === 0 ? BRAND_GOLD : BRAND_RED_LIGHT,
      transparent: true,
      opacity: 0.2,
    }))} />
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
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 5, 5]} intensity={0.4} color={BRAND_GOLD} />
      <pointLight position={[-6, 4, 2]} intensity={0.35} color={BRAND_RED_LIGHT} />
      <pointLight position={[0, -5, 3]} intensity={0.25} color={BRAND_RED_LIGHT} />
      <FloatingParticles />
      <FloatingRing />
      <RedRing />
      <SoftSphere />
      <FloatingCubes />
      <ArchitecturalGrid />
      <OrbitingSpheres />
      <ArchitecturalPyramid />
      <FlowingLines />
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
