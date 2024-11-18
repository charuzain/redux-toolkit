import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        state.push({ ...action.payload, quantity: 1 });
      } else {
        state[index].quantity += 1;
      }
      console.log(
        'Current state as plain object:',
        JSON.parse(JSON.stringify(state))
      );
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);

      const index = state.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        if (state[index].quantity >= 1) {
          state[index].quantity -= 1;
        }
        
      }

      // return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
