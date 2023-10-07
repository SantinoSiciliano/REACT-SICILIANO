import React from 'react';
import './NavBar.css'; 
import logo from '../images/logo.png'; 
import carritoImg from '../images/carrito.png'; 

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
      <div>
        <a href="/carrito"><img src={carritoImg} alt="Carrito" className="carrito-image"/></a>
      </div>
    </nav>
  );
}

export default NavBar;