import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../services/config";
import { collection, addDoc } from "firebase/firestore";
import { Modal, Button } from "react-bootstrap";
import "./Checkout.css";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  const manejadorForm = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConf) {
      setError("Debe completar todos los datos para continuar su compra");
      return;
    }

    if (email !== emailConf) {
      setError("Los campos de email no coinciden, por favor verifique");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden");
      });
  };

  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <h2> Checkout </h2>
      <form onSubmit={manejadorForm}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p> $ {producto.item.precio} </p>
            <hr />
          </div>
        ))}
        <strong>Cantidad Total: {cantidadTotal} </strong>
        <hr />

        <div className="form-group">
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Teléfono</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Confirmación de Email</label>
          <input
            type="email"
            value={emailConf}
            onChange={(e) => setEmailConf(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "#c11077" }}>{error}</p>}
  
        <button className="miBtn" type="submit">Finalizar Compra</button>
      </form>

      {ordenId && (
        <div className="fixed-bottom w-100 d-flex justify-content-center">
          <Button variant="primary" onClick={handleShowModal}>Ver número de pedido</Button>
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Gracias por tu compra!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Tu número de pedido es: {ordenId}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};



export default Checkout;
