// import './ItemListContainer.css'

// const ItemListContainer = ( {mensaje} ) => {

//     return (
//         <div className="list_container">
//             <h2>NBA Caps import</h2>
//             <hr/>

//             <p>{mensaje}</p>
//         </div>
//     )
// }

// export default ItemListContainer

import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../services/firebase"
import { collection, getDocs, where, query } from "firebase/firestore"

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect ( () => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where ("idCat", "==", idCategoria)) : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map( doc => {
          const data = doc.data ()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch (error => console.log(error))
  }, [idCategoria])


	return (
    <>
    <h2> {props.greeting} </h2>
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer