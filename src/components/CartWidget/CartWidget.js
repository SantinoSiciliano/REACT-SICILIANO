import './/CartWidget.css'
import { useContext } from 'react'
import carrito from './assets/carrito.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget'> 
            <img className='CartImg' src={carrito} alt="cart-widget" />
            {totalQuantity}
        </Link>
        
    )
}

export default CartWidget