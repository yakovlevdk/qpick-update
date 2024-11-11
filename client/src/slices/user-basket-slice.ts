import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  product_id: string;
  quantity: number;
}

export interface userBasket {
  user_id: string;
  products: Product[];
}

export interface UserBasketState {
  basket: userBasket[];
  counter: number;
}

const initialState: UserBasketState = {
  basket: [],
  counter: 0,
};

export const userBasketSlice = createSlice({
  name: "userBasket",
  initialState,
  reducers: {
    setUserBasket: (state, action: PayloadAction<userBasket[]>) => {
      state.basket = action.payload;
    },
    clearUserBasket: (state) => {
      state.basket = [];
    },
    setCounterUserBasket: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
    addCounterUserBasket: (state) => {
      state.counter = state.counter + 1;
    },
    deleteCounterUserBasket: (state) => {
      state.counter = state.counter - 1;
    },
  },
});

export const {
  setUserBasket,
  clearUserBasket,
  setCounterUserBasket,
  addCounterUserBasket,
  deleteCounterUserBasket,
} = userBasketSlice.actions;

export default userBasketSlice.reducer;
