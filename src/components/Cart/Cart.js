
import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p>Total: ${total}</p>
          <button onClick={() => clearCart()} className="Button">
            Limpiar carrito
          </button>
          <Link to="/checkout" className="Option">
            Checkout
          </Link>
        </div>
      );
    };

export default Cart