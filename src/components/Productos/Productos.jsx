import React from 'react';
import { useParams } from 'react-router-dom';
import imagenBulls from './Imagenes/bulls.webp';
import imagenCeltics from './Imagenes/celtics.webp';
import imagenKnicks from './Imagenes/knicks.webp';
import imagenLakers from './Imagenes/lakers.webp';
import imagenMemphis from './Imagenes/memphis.webp';
import imagenSpurs from './Imagenes/spurs.webp';
import './Productos.css'

export const productos = [
  {
    id: 1,
    nombre: "Gorra Bulls",
    tipo: "Eastern",
    imagen: imagenBulls,
    precio: 15500,
  },
  {
    id: 2,
    nombre: "Gorra Celtics",
    tipo: "Eastern",
    imagen: imagenCeltics,
    precio: 16000,
  },
  {
    id: 3,
    nombre: "Gorra Knicks",
    tipo: "Eastern",
    imagen: imagenKnicks,
    precio: 15500,
  },
  {
    id: 4,
    nombre: "Gorra Lakers",
    tipo: "Western",
    imagen: imagenLakers,
    precio: 16200,
  },
  {
    id: 5,
    nombre: "Gorra Memphis",
    tipo: "Western",
    imagen: imagenMemphis,
    precio: 15500,
  },
  {
    id: 6,
    nombre: "Gorra Spurs",
    tipo: "Western",
    imagen: imagenSpurs,
    precio: 15500,
  }
];

function Producto() {
  const { id } = useParams();

  const imagenesProductos = {
    1: imagenBulls,
    2: imagenCeltics,
    3: imagenKnicks,
    4: imagenLakers,
    5: imagenMemphis,
    6: imagenSpurs,
  };

  const imagenProducto = imagenesProductos[id];

  return (
    <div className="gorras-nba">
      <img src={imagenProducto} alt={`Producto ${id}`} />
    </div>
  );
}

export default Producto;
