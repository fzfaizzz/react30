import React from 'react';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Product data with images
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 49.99, image: 'https://via.placeholder.com/150' },
];

const AddCart = () => {
  const { cartDispatch } = useCart();

  const addToCart = (item) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } });

    // Trigger the toast notification
    toast.success(`${item.name} has been added to the cart!`);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Shop Our Products</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{product.name}</h3>
              <p className="text-lg text-gray-700 mb-5">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition-colors duration-300 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Cart button */}
      <div className="text-center mt-8">
        <button
          onClick={() => window.location.href = '/cart'}
          className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-500 transition-colors"
        >
          View Cart
        </button>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default AddCart;
