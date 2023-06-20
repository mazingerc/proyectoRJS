import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Catalogo from "./components/Catalogo/Catalogo";
import Productos from "./components/Productos/Productos";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <ItemListContainer mensaje="Empresa dedicada a la importación de gorras desde EEUU"/>
        <Routes>
          <Route path="/" component={Catalogo} />
          <Route path="/eastern" render={() => <Catalogo tipo="Eastern" />} />
          <Route path="/western" render={() => <Catalogo tipo="Western" />} />
          <Route path="/producto/:id" component={Productos} />
        </Routes>
      </div>
    </Router>
  )
}
  
export default App
