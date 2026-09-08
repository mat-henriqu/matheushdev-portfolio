import { createContext, useContext } from 'react';
import type { ServiceItem, CartState } from '../types/cart';

interface CartContextType {
  cart: CartState;
  addToCart: (item: ServiceItem) => void;
  removeFromCart: (id: string) => void;
  updateComments: (id: string, comments: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
