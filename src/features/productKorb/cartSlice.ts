

import { createSlice } from '@reduxjs/toolkit';
import Product from '../products/types/Product';

interface CartState {
  items: Product[]; 
}

const initialCartState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items.push(product);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
