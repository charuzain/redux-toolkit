import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slice/cartSlice.js'

export default configureStore({
  reducer: {
    cart:cartReducer
  }
})