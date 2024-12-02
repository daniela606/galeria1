
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";

interface ArtObjectProps {
  art: {
    id: number;
    name: string;
    description: string;
    image: string; 
  };
}

const ArtObject: React.FC<ArtObjectProps> = ({ art }) => {
  const meshRef = useRef<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const texture = useTexture(art.image);

  // Rotación interactiva
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh
        ref={meshRef}
        position={[Math.random() * 2 - 1, 0, 0]} 
        onClick={() => setIsModalOpen(true)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        {}
        <meshStandardMaterial map={texture} />
        <Html distanceFactor={10}>
          <div
            style={{
              color: "white",
              fontSize: "18px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {art.name}
          </div>
        </Html>
      </mesh>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            maxWidth: "300px",
            zIndex: 100,
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h3 style={{ color: "#333" }}>{art.name}</h3>
          <p style={{ color: "#555", fontSize: "14px" }}>{art.description}</p>
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
};

export default ArtObject;






