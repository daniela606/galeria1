import React, { useState } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography, Container, Box, TextField, Button, Paper, AppBar, Toolbar } from '@mui/material';


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1; /* Asegura que este contenedor ocupe el espacio disponible */
  width: 100vw; /* Ocupa toda la anchura de la ventana */
  background-color: #f8f9fa;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 80px; /* Ajusta este valor según la altura de tu navbar */
`;

const FormContainer = styled(Paper)`
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px; /* Limita el ancho máximo del formulario */
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
  height: 40px; /* Ajusta la altura del pie de página */
  width: 100%;
  margin-top: auto; /* Empuja el pie de página al final del contenedor */
`;

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name === "",
      email: !validateEmail(formData.email),
      message: formData.message === ""
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      alert("Formulario enviado");
      setFormData({ name: "", email: "", message: "" }); 
    }
  };

  return (
    <PageContainer>
      <ContactContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxWidth="md">
          <Box
            component={motion.div}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            mb={4}
          >
            <Typography
              variant="h2"
              component={motion.h1}
              align="center"
              gutterBottom
              style={{ color: 'black' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Contacto
            </Typography>
          </Box>
          <FormContainer
            component={motion.div}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Box mb={4} textAlign="center">
              <Typography variant="body1" color="textSecondary">
                Bienvenido. Nos dedicamos a ofrecer soluciones innovadoras y de alta calidad para satisfacer las necesidades de nuestros clientes. Nuestro equipo está comprometido con la excelencia y la satisfacción del cliente.
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Dirección: Calle Falsa 123, Ciudad, País
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Teléfono: +123 456 7890
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Email: contacto@empresa.com
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                error={errors.name}
                helperText={errors.name ? "Este campo es obligatorio" : ""}
              />
              <TextField
                label="Correo Electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                error={errors.email}
                helperText={errors.email ? "Introduce un correo electrónico válido" : ""}
              />
              <TextField
                label="Mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
                error={errors.message}
                helperText={errors.message ? "Este campo es obligatorio" : ""}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar
              </Button>
            </form>
          </FormContainer>
        </Container>
      </ContactContainer>
      <Footer>
        <Container maxWidth="md">
          <Toolbar style={{ justifyContent: 'center', minHeight: '40px' }}>
            <Typography variant="body2" color="inherit">
              © 2024 Galería. Todos los derechos reservados.
            </Typography>
          </Toolbar>
        </Container>
      </Footer>
    </PageContainer>
  );
};

export default Contacto;