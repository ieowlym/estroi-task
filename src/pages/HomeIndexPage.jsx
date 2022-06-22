import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesGrid } from "../components/CategoriesGrid";
import { Container } from "../components/Container";
import { ImagesSlider } from "../components/ImagesSlider";
import { loadCategories } from "../store/actions/loadCategories";

export const HomeIndexPage = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  const load = useCallback(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      {category && (
        <Container>
          <div>
            <ImagesSlider categories={category.childCategories} />
          </div>
          <CategoriesGrid
            categories={category.childCategories}
            destinationPath={"/catalog"}
          />
        </Container>
      )}
    </>
  );
};
