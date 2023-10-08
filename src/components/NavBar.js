import React from 'react';
import './NavBar.css'; 
import logo from '../images/logo.png'; 
import CartWidget from './CartWidget/CartWidget'; 

function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div>
        <ul className="nav-menu">
          <li className="nav-list"><a href="/remeras">Remeras</a></li>
          <li className="nav-list"><a href="/buzos">Buzos</a></li>
          <li className="nav-list"><a href="/gorras">Gorras</a></li>
          <li className="nav-list"><a href="/zapatillas">Zapatillas</a></li>
        </ul>
      </div>
      <CartWidget/>
    </nav>
  );
}

export default NavBar;