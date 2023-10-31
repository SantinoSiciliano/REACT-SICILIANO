import './NavBar.css'; 
import logo from '../components/images/logo.png'; 
import CartWidget from './CartWidget/CartWidget'; 
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar" >
      <Link to='/'>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div>
        <ul className="nav-menu">
        <NavLink to={'/category/remeras'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
        <NavLink to={'/category/buzos'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Buzos</NavLink>
        <NavLink to={'/category/zapatillas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
        </ul>
      </div>
      <CartWidget/>
    </nav>
  )
}

export default NavBar