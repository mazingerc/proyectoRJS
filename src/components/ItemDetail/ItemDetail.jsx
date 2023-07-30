import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react";
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

	const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio};
		agregarProducto(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: $ {precio}</h3>
      <h3>ID: {id}</h3>
      <p>Producto solo para perros</p>
      <img src={img} alt={nombre} />
      {agregarCantidad > 0 ? (<Link className="miBtn" to="/cart"> Finalizar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  );
};

export default ItemDetail;
