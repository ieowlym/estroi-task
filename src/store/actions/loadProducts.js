import { fetchProducts } from "../../fetchers/fetchProducts";
import { setLoading, setProducts } from "../slice/product";

export const loadProducts = (categoryId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const products = await fetchProducts(categoryId);
    dispatch(setProducts(products));
  } catch (e) {
    console.error(e);
  }
  dispatch(setLoading(false));
};
