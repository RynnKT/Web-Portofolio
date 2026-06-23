import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Edges, Text, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CODE_LINES = [
  '  const dev = () => {',
  "    return 'Erridho';",
  '  };',
  '  function build(',
  '    ideas: Dream[]',
  '  ): Reality {}',
];

// Glowing line connecting two points
function GlowLine({ start, end, color = '#4F6EF7' }) {
  const ref = useRef();
  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end),
  ], [start, end]);
  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.opacity = 0.3 + Math.sin(clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.4} />
    </line>
  );
}

export function HeroCube() {
  const groupRef = useRef();
  const innerCubeRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { mouse } = useThree();

  const targetRot = useRef({ x: 0, y: 0 });

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (groupRef.current) {
      // Lerp towards mouse-driven rotation
      const targetX = hovered ? mouse.y * -0.5 : Math.sin(t * 0.3) * 0.15;
      const targetY = hovered ? mouse.x * 0.8 : t * 0.25;

      targetRot.current.x += (targetX - targetRot.current.x) * 0.05;
      targetRot.current.y += (targetY - targetRot.current.y) * 0.05;

      groupRef.current.rotation.x = targetRot.current.x;
      groupRef.current.rotation.y = targetRot.current.y;

      // Pulse scale
      const pulse = hovered
        ? 1.1 + Math.sin(t * 4) * 0.02
        : 1.0 + Math.sin(t * 1.5) * 0.015;
      groupRef.current.scale.setScalar(pulse);
    }

    if (innerCubeRef.current) {
      innerCubeRef.current.rotation.x = -t * 0.5;
      innerCubeRef.current.rotation.y = -t * 0.7;
    }
  });

  return (
    <group ref={groupRef} position={[1.8, 0, 0]}>
      {/* Outer wireframe box */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshPhysicalMaterial
          color="#12121A"
          transparent
          opacity={0.15}
          roughness={0.05}
          metalness={1}
          reflectivity={1}
          transmission={0.8}
          thickness={0.5}
        />
        <Edges
          scale={1}
          threshold={15}
          color={hovered ? '#818CF8' : '#4F6EF7'}
          lineWidth={1.5}
        />
      </mesh>

      {/* Inner spinning cube */}
      <mesh ref={innerCubeRef} scale={0.5}>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        <meshStandardMaterial
          color="#4F6EF7"
          transparent
          opacity={0.08}
          wireframe={false}
          emissive="#4F6EF7"
          emissiveIntensity={0.3}
        />
        <Edges color={hovered ? '#E2E8F0' : '#818CF8'} lineWidth={1} />
      </mesh>

      {/* Code text on cube faces */}
      {CODE_LINES.map((line, i) => (
        <Text
          key={i}
          position={[0, 0.45 - i * 0.17, 1.12]}
          fontSize={0.09}
          color={i % 2 === 0 ? '#818CF8' : '#E2E8F0'}
          font={undefined}
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
          transparent
          opacity={0.85}
        >
          {line}
        </Text>
      ))}

      {/* Glowing core sphere */}
      <mesh scale={0.18}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#4F6EF7"
          emissive="#4F6EF7"
          emissiveIntensity={hovered ? 3 : 1.5}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Corner accent particles */}
      {[
        [1.1, 1.1, 1.1], [-1.1, 1.1, 1.1],
        [1.1, -1.1, 1.1], [-1.1, -1.1, 1.1],
        [1.1, 1.1, -1.1], [-1.1, 1.1, -1.1],
        [1.1, -1.1, -1.1], [-1.1, -1.1, -1.1],
      ].map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color="#4F6EF7"
            emissive="#4F6EF7"
            emissiveIntensity={2}
          />
        </mesh>
      ))}

      {/* Glow point light inside */}
      <pointLight
        color="#4F6EF7"
        intensity={hovered ? 3 : 1}
        distance={4}
      />
    </group>
  );
}
