import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartState, cartDispatch } = useCart();

  const removeFromCart = (item) => {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  // Calculate total price of items in the cart
  const totalPrice = cartState.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Cart</h2>

      {cartState.cartItems.length === 0 ? (
        <p className="text-center text-xl text-gray-600">Your cart is empty</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <ul>
            {cartState.cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-4 border-b pb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-400 transition-colors"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="text-right mt-6">
            <h3 className="text-2xl font-bold text-gray-900">Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
