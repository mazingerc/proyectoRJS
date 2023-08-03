import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const centerTextStyle = {textAlign: 'center',};

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>  
            <div style={centerTextStyle}>
                <h2>No seleccionaste ninguna gorra</h2>
                    <a href="/">
                        <button > Ver gorras </button>
                    </a>
            </div>
            </>
        )
    }

    return (
        <div>
            {carrito.map (producto => <CartItem key = {producto.id} {...producto} />)}
            <h3>Total: $ {total}</h3>
            <h3>Cantidad total: {cantidadTotal} </h3>
            <button className="miBtn" onClick={() => vaciarCarrito ()}> Vaciar Carrito </button>
            <div>
                <a href="/checkout">
                    <button  className="miBtn">Finalizar Compra</button>
                </a>
            </div>
        </div>
    )
}

export default Cart
