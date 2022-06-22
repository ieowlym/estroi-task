import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: null,
  },
  reducers: {
    setCategories(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
