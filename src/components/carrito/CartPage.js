import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Tu Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No tienes artículos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.title} - {item.quantity} x {item.price}$
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </>
      )}
    </div>
  );
}

export default CartPage;