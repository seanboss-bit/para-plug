"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.products[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.products.push(tempProduct);
      }
    },
    removeFromCart: (state, action) => {
      const newCartItems = state.products.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.products = newCartItems;
    },
    removeProductQuantity: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.products[itemIndex].cartQuantity > 1) {
        state.products[itemIndex].cartQuantity -= 1;
      }
    },
    addProductQuantity: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      state.products[itemIndex].cartQuantity += 1;
    },
    clear: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    getCartTotal: (state) => {
      let { total, quantity } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.total = total;
      state.quantity = quantity;
    },
  },
});

export const {
  addProduct,
  removeFromCart,
  removeProductQuantity,
  addProductQuantity,
  clear,
  getCartTotal
} = cartSlice.actions;

export default cartSlice.reducer;
