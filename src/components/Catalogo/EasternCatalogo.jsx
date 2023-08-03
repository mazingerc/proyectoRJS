import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { db } from "../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";

const EasternCatalogo = () => {
  const [productos, setProductos] = React.useState([]);
  const { idCategoria } = useParams();

  React.useEffect(() => {
    const misProductos = query(collection(db, "productos"), where("idCat", "==", "Eastern"));

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2>Gorras Eastern Conference</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default EasternCatalogo;
