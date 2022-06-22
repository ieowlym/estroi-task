import { fetchCategories } from "../../fetchers/fetchCategories";
import { setCategories } from "../slice/category";

export const loadCategories = () => async (dispatch) => {
  try {
    const categories = await fetchCategories();
    dispatch(
      setCategories({
        name: "Главная",
        id: "main",
        childCategories: categories,
      })
    );
  } catch (e) {
    console.error(e);
  }
};
