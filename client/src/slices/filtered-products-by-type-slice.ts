import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { productType} from '../types/productType'


export interface ProductsState {
  products: productType[];
}

const initialState: ProductsState = {
  products: [],
};

export const filteredProductsByTypeSlice = createSlice({
  name: "filteredProductsByType",
  initialState,
  reducers: {
    setFilteredProductsByType: (state, action: PayloadAction<productType[]>) => {
      state.products = action.payload;
    },
    clearFilteredProductsByType: (state) => {
      state.products = [];
    },
  },
});

export const { setFilteredProductsByType, clearFilteredProductsByType } =
  filteredProductsByTypeSlice.actions;

export default filteredProductsByTypeSlice.reducer;
