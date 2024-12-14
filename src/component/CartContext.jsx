import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
  };

  function cartReducer(state, action) {
    console.log(action,state)
    switch (action.type) {
     
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  }

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
