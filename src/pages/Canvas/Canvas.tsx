
import { Canvas as ThreeCanvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { useRef, type JSX } from "react";
import * as THREE from "three";

function RotatingBox(props: JSX.IntrinsicElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}

export function CanvasPage() {
  return (
    <div className="w-screen h-screen">
      <ThreeCanvas camera={{ position: [3, 3, 3], fov: 75 }}>
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />

        {/* 3D Objects */}
        <RotatingBox position={[0, 0, 0]} />
        <RotatingBox position={[0, 0, 0]} />

        {/* Controls (orbit around) */}
        <OrbitControls />
      </ThreeCanvas>
    </div>
  );
}