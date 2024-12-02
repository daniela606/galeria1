import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)({
  color: "inherit",
  "&:hover": {
    backgroundColor: "#f0f0f0", 
    color: "#000", 
  },
});

const NavbarComponent: React.FC = () => {
  return (
    <AppBar position="fixed"> {}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Sitio
        </Typography>
        <StyledButton component={RouterLink} to="/">
          Home
        </StyledButton>
        <StyledButton component={RouterLink} to="/galeria">
          Galería
        </StyledButton>
        <StyledButton component={RouterLink} to="/contacto">
          Contacto
        </StyledButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;

