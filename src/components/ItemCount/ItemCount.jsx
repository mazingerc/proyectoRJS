import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({inicial, stock, funcionAgregar}) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
			setContador(contador + 1);
    }
  }

  const disminuir = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  }


  return (
    <>
      <div>
        <button className="miBtn" onClick={disminuir}> - </button>
        <p> {contador}</p> 
        <button className="miBtn" onClick={incrementar}> + </button>
      </div>
      <button className="miBtn" onClick={() => funcionAgregar(contador)}>Agregar al Carrito</button></>
  );
}

export default ItemCount;
