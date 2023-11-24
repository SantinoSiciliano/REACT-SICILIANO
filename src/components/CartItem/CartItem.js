import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';  // Asegúrate de que esta ruta sea correcta

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(item.id);
  };

  return (
    <div>
      <p>Producto: {item.name}</p>
      <p>Precio: ${item.price}</p>
      <p>Cantidad: {item.quantity}</p>
      <button onClick={handleRemoveItem}>X</button>
    </div>
  );
}