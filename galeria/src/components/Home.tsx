import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  background-image: url("public/galeria.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0 20px;
`;

const AnimatedTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
  letter-spacing: 4px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 20px auto;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.6;
  font-weight: 300;
  font-family: 'Arial', sans-serif;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ExploreButton = styled(motion.button)`
  background-color: #ff6f61;
  color: white;
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #e65c4f;
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(1);
  }
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/galeria");
  };

  return (
    <HomeContainer>
      <AnimatedTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenido a la Galería Virtual
      </AnimatedTitle>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Explora nuestra galería 3D interactiva y descubre obras de arte únicas y vibrantes.
      </Description>
      <ExploreButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleExploreClick}
      >
        Explorar Galería
      </ExploreButton>
    </HomeContainer>
  );
};

export default Home;


