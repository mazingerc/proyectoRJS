import React from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../../components/Productos/Productos';


function Catalogo() {
  return (
    <div>
      <h1>Catálogo de Gorras</h1>
      <div>
        <h2>Eastern Conference</h2>
        {productos
          .filter((producto) => producto.tipo === 'Eastern')
          .map((producto) => (
            <div key={producto.id}>
              <h3>{producto.nombre}</h3>
              <img src={producto.imagen} alt={producto.nombre} />
              <p>Tipo: {producto.tipo}</p>
              <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
            </div>
          ))}
      </div>
      <div>
        <h2>Western Conference</h2>
        {productos
          .filter((producto) => producto.tipo === 'Western')
          .map((producto) => (
            <div key={producto.id}>
              <h3>{producto.nombre}</h3>
              <img src={producto.imagen} alt={producto.nombre} />
              <p>Tipo: {producto.tipo}</p>
              <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Catalogo;
