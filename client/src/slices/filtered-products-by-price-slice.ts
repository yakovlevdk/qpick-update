import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { productType} from '../types/productType'


export interface ProductsState {
  products: productType[];
}

const initialState: ProductsState = {
  products: [],
};

export const filteredProductsByPriceSlice = createSlice({
  name: "filteredProducts",
  initialState,
  reducers: {
    setFilteredProductsByPrice: (state, action: PayloadAction<productType[]>) => {
      state.products = action.payload;
    },
    clearFilteredProducts: (state) => {
      state.products = [];
    },
  },
});

export const { setFilteredProductsByPrice, clearFilteredProducts } =
  filteredProductsByPriceSlice.actions;

export default filteredProductsByPriceSlice.reducer;
