import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <Link to="/">
          <img src={logo} alt="logo" style={{ width: "100px", height: "100px" }} />
        </Link>

        <nav className="navbar_nav">
          <Link to="/catalogo/eastern" className="navbar_link">Eastern</Link>
          <Link to="/catalogo/western" className="navbar_link">Western</Link>
          {/* <Link to="/outlet" className="navbar_link">Outlet</Link> */}
          <div className="cart-container">
            <CartWidget />
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
