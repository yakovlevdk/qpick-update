import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";
import filteredProductsByPriceSlice from "./slices/filtered-products-by-price-slice";
import filteredProductsByTypeSlice from "./slices/filtered-products-by-type-slice";
import allBasketSlice from "./slices/all-basket-slice";
import userBasketSlice from "./slices/user-basket-slice";
import reviewsSlice from "./slices/reviews-slice";
export const store = configureStore({
  reducer: {
    products: productsSlice,
    filteredProducts: filteredProductsByPriceSlice,
    filteredProductsByType: filteredProductsByTypeSlice,
    allBaskets: allBasketSlice,
    userBasket: userBasketSlice,
    reviews: reviewsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
