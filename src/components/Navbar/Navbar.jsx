import './Navbar.scss'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <navbar className="navbar">
            <div className="navbar_container">
                <img src={logo} alt='logo'/>

                <nav className="navbar_nav">
                    <a className="navbar_link" href="#">eastern</a>
                    <a className="navbar_link" href="#">western</a>
                    <a className="navbar_link" href="#">outlet</a>
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <span class="material-symbols-outlined">counter_4</span>
                </nav>
            </div>
        </navbar>
    )
}

export default Navbar