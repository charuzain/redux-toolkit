import { createSlice } from '@reduxjs/toolkit';

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

      const index = state.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          return state.filter((item) => item.id !== action.payload);
        }
      }
    },

    emptyCart: (state , action) => {
      return state.filter(product => product.id !== action.payload)
    }
  },
});

export const { addToCart, removeFromCart,emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
