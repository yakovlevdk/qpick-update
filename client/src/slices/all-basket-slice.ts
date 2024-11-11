import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  product_id: string;
  quantity: number;
}

export interface Basket {
  user_id: string;
  products: Product[];
}
export interface BasketState {
  baskets: Basket[];
}
const initialState: BasketState = {
  baskets: [],
};

export const allBasketsSlice = createSlice({
  name: "allBaskets",
  initialState,
  reducers: {
    setBaskets: (state, action: PayloadAction<Basket[]>) => {
      state.baskets = action.payload;
    },
    clearBaskets: (state) => {
      state.baskets = [];
    },
  },
});

export const { setBaskets, clearBaskets } = allBasketsSlice.actions;

export default allBasketsSlice.reducer;
