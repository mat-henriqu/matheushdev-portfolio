
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { ServiceItem, CartState } from '../types/cart';

type CartAction = 
  | { type: 'ADD_ITEM'; payload: ServiceItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_COMMENTS'; payload: { id: string; comments: string } }
  | { type: 'CLEAR_CART' };

interface CartContextType {
  cart: CartState;
  addToCart: (item: ServiceItem) => void;
  removeFromCart: (id: string) => void;
  updateComments: (id: string, comments: string) => void;
  clearCart: () => void;
}

const initialState: CartState = {
  items: []
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Check if item already exists
      if (state.items.some(item => item.id === action.payload.id)) {
        return state; // Item already exists, don't add it again
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case 'UPDATE_COMMENTS':
      return {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload.id 
            ? { ...item, comments: action.payload.comments } 
            : item
        )
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load cart from localStorage if available
  const storedCart = typeof window !== 'undefined' 
    ? localStorage.getItem('mathdev-cart') 
    : null;
  
  const [cart, dispatch] = useReducer(
    cartReducer, 
    storedCart ? JSON.parse(storedCart) : initialState
  );

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('mathdev-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: ServiceItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateComments = (id: string, comments: string) => {
    dispatch({ type: 'UPDATE_COMMENTS', payload: { id, comments } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateComments, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
