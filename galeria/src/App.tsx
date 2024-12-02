
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Contacto from "./components/Contacto";

import './App.css'; // Importa tu archivo de CSS global

const App: React.FC = () => {
  return (
    <Router>
      <NavbarComponent />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


