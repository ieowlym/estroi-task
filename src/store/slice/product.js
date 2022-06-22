import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "category",
  initialState: {
    products: null,
    loading: false,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setLoading } = productSlice.actions;

export const productReducer = productSlice.reducer;
