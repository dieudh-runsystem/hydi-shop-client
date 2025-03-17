import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";
import { CartState } from "../types/cart";
import { log } from "console";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        const newItem = { ...action.payload, quantity: 1, total: action.payload.price };
        state.items.push(newItem);
        console.log("Đã thêm sản phẩm mới vào giỏ hàng:", newItem); // Log để kiểm tra
      }
      console.log("Giỏ hàng hiện tại:", state.items); // Log để kiểm tra state sau khi thêm
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.total = item.quantity * item.price; 
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
