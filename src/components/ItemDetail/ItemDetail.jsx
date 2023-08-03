import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productos } from '../../components/Productos/Productos';
import { CarritoContext } from '../../context/CarritoContext';
import './ItemDetail.css';

const ItemDetail = () => {
  const { id } = useParams();
  const { agregarProducto } = useContext(CarritoContext);
  const producto = productos.find((prod) => prod.id === parseInt(id));

  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    agregarProducto(producto, cantidad);
  };

  return (
    <div className="contenedorItem">
      <h2>Nombre: {producto.nombre}</h2>
      <h3>Precio: $ {producto.precio}</h3>
      <h3>ID: {producto.id}</h3>
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="contenedorBotones">
        <button onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)} className="botonCantidad">-</button>
        <span className="cantidad">{cantidad}</span>
        <button onClick={() => setCantidad(cantidad + 1)} className="botonCantidad">+</button>
      </div>
      <button onClick={handleAgregar} className="miBtn"> Agregar al carrito </button>
      <a href="/checkout">{cantidad > 0 && (<button className="miBtn" to="/cart"> Finalizar Compra </button>)}</a>
      <a href="/"><button className="miBtn" to="/"> Volver al catálogo </button></a>
    </div>
  );
};

export default ItemDetail;
