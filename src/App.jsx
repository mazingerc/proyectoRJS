import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import Catalogo from './components/Catalogo/Catalogo';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { CarritoProvider } from './context/CarritoContext';
import Checkout from "./components/Checkout/Checkout";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CarritoProvider>
    <Router>
      <div>
        <Navbar />
        <ItemListContainer mensaje="Empresa dedicada a la importación de gorras desde EEUU" />
        <Routes>
          <Route path="/" element={<Catalogo tipo="Todos" />} />
          <Route path="/catalogo/eastern" element={<Catalogo tipo="Eastern" />} />
          <Route path="/catalogo/western" element={<Catalogo tipo="Western" />} />
          {/* <Route path="/outlet" element={<Catalogo tipo="Outlet"/>} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/producto/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
    </CarritoProvider>
  );
}

export default App;
