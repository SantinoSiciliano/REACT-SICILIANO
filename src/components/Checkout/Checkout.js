


import React, { useState, useContext } from "react"; 
import { Timestamp } from "firebase/firestore";
import CartContext from "../../context/CartContext";
import { createOrder } from "../Cart/services/firebaseServices"; // Ajusta la ruta según sea necesario
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, clearCart } = useContext(CartContext);

    const handleCreateOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const orderData = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const id = await createOrder(orderData);

            setOrderId(id);
            clearCart();
        } catch (error) {
            console.error('Error al procesar la orden:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Generando la orden...</h1>;
    }

    if (orderId) {
        return <h1>El ID de su orden es {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={handleCreateOrder} />
        </div>
    );
};

export default Checkout;