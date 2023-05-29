import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      const isTrue = item?.quantity
      if (isTrue) {
        item.quantity++
      } else {
        item.quantity++
      }

    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      const isTrue = item?.quantity
      if (isTrue) {
        if (item.quantity === 1) {
          item.quantity = 0
        } else {
          item.quantity--;
        }
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },

    clearCartItem: (state, action) => {
      state.cart = []
    }
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCartItem } = cartSlice.actions;
export default cartSlice.reducer;
