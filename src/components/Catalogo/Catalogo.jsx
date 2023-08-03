import React from 'react';
import { productos } from '../../components/Productos/Productos';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Catalogo.css';
import { Link } from 'react-router-dom';

function Catalogo({ tipo }) {
  let filteredProductos = productos;
  let titulo = 'Catálogo de Gorras';

  if (tipo !== 'Todos') {
    filteredProductos = productos.filter((producto) => producto.tipo === tipo);
    titulo = `Gorras ${tipo} Conference`;
  }
  const centerTextStyle = {
    textAlign: 'center',
  };
  return (
    <div style={centerTextStyle}>
      <h1>{titulo}</h1>
      <div className="card-container">
        {filteredProductos.map((producto) => (
          <Card key={producto.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
            <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text style={{ fontSize: '14px' }}>Tipo: {producto.tipo}</Card.Text>
              <Link to={`/producto/${producto.id}`}>
                <Button variant="primary" className="btn-sm">Ver detalle</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
