
import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children })=> {
    const [cart, setCart] = useState ([])

    const calculateTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return total;
      };

    const addItem = (item, quantity)=> {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpDated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpDated)
    }

        const clearCart = () => {
            setCart([])
        }

        const isInCart = (itemId) => {
            return cart.some(prod => prod.id === itemId)
        }

        return (
            <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total: calculateTotal() }}>
              {children}
            </CartContext.Provider>
          );
        };

export default CartContext  