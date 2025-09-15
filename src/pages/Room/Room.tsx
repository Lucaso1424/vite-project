import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { type JSX } from "react";

// Habitación
function Room() {
  return (
    <group>
      {/* Suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Pared trasera */}
      <mesh position={[0, 10, -25]}>
        <planeGeometry args={[50, 20]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Pared delantera */}
      <mesh rotation={[0, Math.PI, 0]} position={[0, 10, 25]}>
        <planeGeometry args={[50, 20]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Pared izquierda */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-25, 10, 0]}>
        <planeGeometry args={[50, 20]} />
        <meshStandardMaterial color="#d9d9d9" />
      </mesh>

      {/* Pared derecha */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[25, 10, 0]}>
        <planeGeometry args={[50, 20]} />
        <meshStandardMaterial color="#d9d9d9" />
      </mesh>

      {/* Techo */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 20, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#f2f2f2" />
      </mesh>
    </group>
  );
}

// Escritorio
function Desk(props: JSX.IntrinsicElements["group"]) {
  return (
    <group {...props}>
      {/* Tablero */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[6, 0.3, 2.5]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Patas */}
      <mesh position={[-2.8, 0.5, -1.0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#5C3317" />
      </mesh>
      <mesh position={[2.8, 0.5, -1.0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#5C3317" />
      </mesh>
      <mesh position={[-2.8, 0.5, 1.0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#5C3317" />
      </mesh>
      <mesh position={[2.8, 0.5, 1.0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#5C3317" />
      </mesh>
    </group>
  );
}

// Ordenador
function Computer(props: JSX.IntrinsicElements["group"]) {
  return (
    <group {...props}>
      {/* Monitor */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Pantalla */}
      <mesh position={[0, 2, 0.06]}>
        <planeGeometry args={[1.8, 1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      {/* Base */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[0.2, 0.5, 0.2]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Teclado */}
      <mesh position={[0, 1.1, 1]}>
        <boxGeometry args={[1.6, 0.15, 0.5]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}

function Person(props: JSX.IntrinsicElements["group"]) {
  return (
    <group {...props}>
      {/* Cuerpo */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.8, 1.2, 0.5]} />
        <meshStandardMaterial color="#f5c298" />
      </mesh>

      {/* Cabeza */}
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#f5c298" />
      </mesh>

      {/* Piernas */}
      <mesh position={[-0.2, 0.5, 0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[0.2, 0.5, 0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Brazos */}
      <mesh position={[-0.55, 1.6, 0.1]}>
        <boxGeometry args={[0.25, 0.8, 0.25]} />
        <meshStandardMaterial color="#f5c298" />
      </mesh>
      <mesh position={[0.55, 1.6, 0.1]}>
        <boxGeometry args={[0.25, 0.8, 0.25]} />
        <meshStandardMaterial color="#f5c298" />
      </mesh>
    </group>
  );
}

// Página principal
export function RoomPage() {
  return (
     <div id="root" className="w-screen h-screen overflow-hidden">
      <ThreeCanvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [10, 8, 15], fov: 60 }}>

        {/* Luces */}
        <ambientLight intensity={3} />
        <pointLight position={[10, 15, 10]} intensity={1.2} />

        {/* Escena */}
        <Room />
        <Desk position={[0, 0, 0]} />
        <Computer position={[0, 0, 0]} />
        <Person position={[0, 0, 2]} />

        {/* Controles */}
        <OrbitControls 
            enableZoom={true}
            minDistance={10}
            maxDistance={20} />
      </ThreeCanvas>
    </div>
  );
}