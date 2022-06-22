import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./slice/category";
import { productReducer } from "./slice/product";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productReducer,
  },
});

export default store;
