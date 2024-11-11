import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Review {
  _id: string;
  id: number;
  content: string;
  product_id: string;
  user_id: number;
  user_name: string;
  rate: number;
}

export interface ReviewsState {
  reviews: Review[];
}

const initialState: ReviewsState = {
  reviews: [],
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<Review[]>) => {
      state.reviews = action.payload;
    },
    clearReviews: (state) => {
      state.reviews = [];
    },
  },
});

export const { setReviews, clearReviews } = reviewsSlice.actions;

export default reviewsSlice.reducer;
