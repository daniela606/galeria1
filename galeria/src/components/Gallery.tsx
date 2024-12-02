import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Modal, Button, Typography, TextField, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as THREE from 'three';

const artData = [
  {
    id: 1,
    name: "Obra 1",
    description: "Flores de colores suaves flotando en el aire, creando una sensación de ligereza y serenidad en un fondo tenue,",
    image: "/public/flor.jpg",
  },
  {
    id: 2,
    name: "Obra 2",
    description: "Conjunto de flores en tonos suaves, destacando por su simplicidad y belleza natural. ",
    image: "/public/flor 2.jpg",
  },
  {
    id: 3,
    name: "Obra 3",
    description: "Un campo de flores coloridas bajo un cielo claro, con una mariposa volando entre los pétalos, añadiendo un toque de movimiento y vida a la escena.",
    image: "/public/flor3.jpg",
  },
 
];

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalContent = styled("div")({
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "500px",
  width: "100%",
  color: "black", 
});

const Gallery: React.FC = () => {
  const [selectedArt, setSelectedArt] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments") || "{}")
  );

  const handleBoxClick = (art) => {
    setSelectedArt(art);
  };

  const handleClose = () => {
    setSelectedArt(null);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    const newComments = { ...comments, [selectedArt.id]: comment };
    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
    setComment("");
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Container style={{ height: "100%", width: "100%", paddingTop: "80px" }}>
        <Typography variant="h2" align="center" gutterBottom style={{ color: "black" }}>
          Galería de Arte 3D
        </Typography>
        <Canvas style={{ height: "calc(100% - 80px)", width: "100%" }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          {artData.map((art, index) => (
            <mesh
              key={art.id}
              position={[index * 2 - 2, 0, 0]}
              onClick={() => handleBoxClick(art)}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial attach="material-0" map={new THREE.TextureLoader().load(art.image)} />
              <meshStandardMaterial attach="material-1" map={new THREE.TextureLoader().load(art.image)} />
              <meshStandardMaterial attach="material-2" map={new THREE.TextureLoader().load(art.image)} />
              <meshStandardMaterial attach="material-3" map={new THREE.TextureLoader().load(art.image)} />
              <meshStandardMaterial attach="material-4" map={new THREE.TextureLoader().load(art.image)} />
              <meshStandardMaterial attach="material-5" map={new THREE.TextureLoader().load(art.image)} />
            </mesh>
          ))}
        </Canvas>
      </Container>
      {selectedArt && (
        <StyledModal open={!!selectedArt} onClose={handleClose}>
          <ModalContent>
            <Typography variant="h6">{selectedArt.name}</Typography>
            <Typography variant="body1">{selectedArt.description}</Typography>
            <TextField
              label="Deja un comentario"
              fullWidth
              value={comment}
              onChange={handleCommentChange}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleCommentSubmit}
            >
              Enviar
            </Button>
            <Typography variant="body2" style={{ marginTop: "20px" }}>
              Comentarios:
            </Typography>
            <Typography variant="body2">
              {comments[selectedArt.id] || "No hay comentarios aún."}
            </Typography>
          </ModalContent>
        </StyledModal>
      )}
    </div>
  );
};

export default Gallery;