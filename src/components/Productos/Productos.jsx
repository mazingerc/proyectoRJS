import React from 'react';
import { useParams } from 'react-router-dom';

export const productos = [
  {
    id: 1,
    nombre: "Gorra Bulls",
    tipo: "Eastern",
    imagen: "src/Productos/Imagenes/bulls.webp",
  },
  {
    id: 2,
    nombre: "Gorra Celtics",
    tipo: "Eastern",
    imagen: "src/Productos/Imagenes/celtics.webp",
  },
  {
    id: 3,
    nombre: "Gorra Knicks",
    tipo: "Eastern",
    imagen: "src/Productos/Imagenes/knicks.webp",
  },
  {
    id: 4,
    nombre: "Gorra Lakers",
    tipo: "Western",
    imagen: "src/Productos/Imagenes/lakers.webp",
  },
  {
    id: 5,
    nombre: "Gorra Memphis",
    tipo: "Western",
    imagen: "src/Productos/Imagenes/memphis.webp",
  },
  {
    id: 6,
    nombre: "Gorra Spurs",
    tipo: "Western",
    imagen: "src/Productos/Imagenes/spurs.webp",
  }
];

function Producto() {
  const { id } = useParams();

  const imagenesProductos = {
    1: 'src/Productos/Imagenes/bulls.webp',
    2: 'src/Productos/Imagenes/celtics.webp',
    3: 'src/Productos/Imagenes/knicks.webp',
    4: 'src/Productos/Imagenes/lakers.webp',
    5: 'src/Productos/Imagenes/memphis.webp',
    6: 'src/Productos/Imagenes/spurs.webp',
    
  };

  const imagenProducto = imagenesProductos[id];

  return (
    <div>
      <img src={imagenProducto} alt={`Producto ${id}`} />
    </div>
  );
}

export default Producto;
