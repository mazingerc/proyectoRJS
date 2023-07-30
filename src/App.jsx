import React from 'react';
import RegistroForm from "./components/Registro/RegistroForm";
import Navbar from "./components/Navbar/Navbar";
import Catalogo from "./components/Catalogo/Catalogo";
import Productos from "./components/Productos/Productos";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ItemListContainer mensaje="Empresa dedicada a la importación de gorras desde EEUU" />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/eastern" element={<Catalogo tipo="Eastern" />} />
          <Route path="/western" element={<Catalogo tipo="Western" />} />
          <Route path="/producto/:id" element={<Productos />} />
        </Routes>
      </div>
    </Router>
  );
}

function RegistroPage() {
  return (
    <div>
      <h1>Página de Registro</h1>
      <RegistroForm />
    </div>
  );
}

export default App;

