import './ItemListContainer.css'

const ItemListContainer = ( {mensaje} ) => {

    return (
        <div className="list_container">
            <h2>NBA Caps import</h2>
            <hr/>

            <p>{mensaje}</p>
        </div>
    )
}

export default ItemListContainer