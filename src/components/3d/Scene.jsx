import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, MeshDistortMaterial, Sphere, Torus, Float, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { HeroCube } from './HeroCube';

// Floating ambient particles
function Particles({ count = 80 }) {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
      ],
      speed: Math.random() * 0.3 + 0.1,
      offset: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    particles.forEach((p, i) => {
      const t = clock.elapsedTime * p.speed + p.offset;
      dummy.position.set(
        p.position[0] + Math.sin(t) * 0.3,
        p.position[1] + Math.cos(t * 0.7) * 0.3,
        p.position[2]
      );
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.02]} />
      <meshBasicMaterial color="#4F6EF7" transparent opacity={0.5} />
    </instancedMesh>
  );
}

// Floating geometric accent shapes
function FloatingShapes() {
  const torusRef = useRef();
  const octaRef = useRef();
  const icoRef = useRef();
  const ringRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.4;
      torusRef.current.rotation.y = t * 0.3;
      torusRef.current.position.y = Math.sin(t * 0.6) * 0.3 - 0.5;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.5;
      octaRef.current.rotation.z = t * 0.3;
      octaRef.current.position.y = Math.cos(t * 0.5) * 0.2 + 0.3;
    }
    if (icoRef.current) {
      icoRef.current.rotation.y = t * 0.6;
      icoRef.current.rotation.x = t * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.2;
      ringRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <>
      {/* Torus bottom-right */}
      <mesh ref={torusRef} position={[4, -1, -1]}>
        <torusGeometry args={[0.8, 0.12, 16, 60]} />
        <meshStandardMaterial
          color="#4F6EF7"
          transparent
          opacity={0.25}
          wireframe={false}
          roughness={0.3}
          metalness={0.9}
          emissive="#4F6EF7"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Octahedron top-left */}
      <mesh ref={octaRef} position={[-5, 2.5, -1]}>
        <octahedronGeometry args={[0.5]} />
        <meshStandardMaterial
          color="#818CF8"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>

      {/* Icosahedron far left */}
      <mesh ref={icoRef} position={[-4.5, -2, -2]}>
        <icosahedronGeometry args={[0.4]} />
        <meshStandardMaterial
          color="#4F6EF7"
          transparent
          opacity={0.2}
          roughness={0.5}
          metalness={0.8}
          wireframe
        />
      </mesh>

      {/* Ring top-right */}
      <mesh ref={ringRef} position={[5, 2, -3]}>
        <torusGeometry args={[0.6, 0.05, 16, 60]} />
        <meshStandardMaterial
          color="#E2E8F0"
          transparent
          opacity={0.1}
          wireframe={false}
        />
      </mesh>
    </>
  );
}

export function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 4]} intensity={2} color="#4F6EF7" />
      <pointLight position={[-5, 5, -2]} intensity={0.8} color="#818CF8" />
      <pointLight position={[5, -5, -2]} intensity={0.5} color="#E2E8F0" />
      <directionalLight position={[0, 5, 5]} intensity={0.5} color="#ffffff" />

      {/* Background Stars */}
      <Stars
        radius={60}
        depth={60}
        count={2500}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Ambient particles */}
      <Particles count={60} />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Main interactive cube */}
      <Float
        speed={1.5}
        rotationIntensity={0.3}
        floatIntensity={0.5}
      >
        <HeroCube />
      </Float>
    </>
  );
}
