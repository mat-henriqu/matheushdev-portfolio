import { CartContext } from './useCart';

import React, { useReducer, useEffect } from 'react';
import { ServiceItem, CartState } from '../types/cart';

type CartAction = 
  | { type: 'ADD_ITEM'; payload: ServiceItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_COMMENTS'; payload: { id: string; comments: string } }
  | { type: 'CLEAR_CART' };



const initialState: CartState = {
  items: []
};

const isServiceItem = (value: unknown): value is ServiceItem => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const item = value as Record<string, unknown>;
  return typeof item.id === 'string'
    && typeof item.title === 'string'
    && typeof item.description === 'string'
    && typeof item.image === 'string'
    && (item.price === undefined || typeof item.price === 'string')
    && (item.comments === undefined || typeof item.comments === 'string');
};

const getInitialCart = (): CartState => {
  if (typeof window === 'undefined') {
    return initialState;
  }

  try {
    const storedCart = window.localStorage.getItem('mathdev-cart');
    if (!storedCart) {
      return initialState;
    }

    const parsedCart: unknown = JSON.parse(storedCart);
    if (typeof parsedCart === 'object'
      && parsedCart !== null
      && Array.isArray((parsedCart as CartState).items)
      && (parsedCart as CartState).items.every(isServiceItem)) {
      return { items: (parsedCart as CartState).items };
    }
  } catch {
    // Dados antigos ou inválidos não devem impedir o carregamento do site.
  }

  try {
    window.localStorage.removeItem('mathdev-cart');
  } catch {
    // Algumas políticas do navegador bloqueiam o acesso ao armazenamento local.
  }
  return initialState;
};


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
  const [cart, dispatch] = useReducer(cartReducer, initialState, getInitialCart);

  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      window.localStorage.setItem('mathdev-cart', JSON.stringify(cart));
    } catch {
      // O carrinho continua disponível durante a sessão, mesmo sem persistência.
    }
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

