import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
      <div>
        <Navbar />
        <ItemListContainer mensaje="Empresa dedicada a la importación de gorras desde EEUU"/>
      </div>
  )
}
export default App
