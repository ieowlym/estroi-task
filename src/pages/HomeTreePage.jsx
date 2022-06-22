import styled from "@emotion/styled";
import { useCallback, useEffect, useMemo } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { Container } from "../components/Container";
import { ProductsGrid } from "../components/ProductsGrid";
import { TreeSidebar } from "../components/TreeSidebar";
// import { fetchCategories } from "../fetchers/fetchCategories";
import { loadCategories } from "../store/actions/loadCategories";

function findNode(id, category) {
  if (category?.id + "" === id + "") {
    return category;
  }
  if (category.childCategories) {
    for (let childCategory of category.childCategories) {
      const node = findNode(id, childCategory);
      if (node) {
        return node;
      }
    }
  }
}

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

export const HomeTreePage = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  //usestate
  // const [category, setCategory] = useState();
  // useEffect(() => {
  //   fetchCategories().then((categories) => {
  //     setCategory({
  //       name: "Главная",
  //       id: "main",
  //       childCategories: categories,
  //     });
  //   });
  // }, []);

  const load = useCallback(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  const currentCategory = useMemo(() => {
    if (!categoryId || !category) return category;
    return findNode(+categoryId, category);
  }, [category, categoryId]);

  return (
    <StyledContainer>
      <div style={{ width: "240px" }}>
        <div
          style={{
            margin: "20px 0 15px",
          }}
        >
          <Link
            to="/"
            style={{
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "23px",
              color: "#636363",
              textDecoration: "none",
            }}
          >
            Категории
          </Link>
        </div>
        {category && <TreeSidebar category={category} />}
      </div>
      {categoryId ? (
        currentCategory && (
          <div style={{ maxWidth: "939px", paddingLeft: "21px" }}>
            <p
              style={{
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "38px",
                color: "#636363",
                padding: 0,
                margin: 0,
                marginTop: "20px",
                marginBottom: "14px",
              }}
            >
              {currentCategory.name}
            </p>
            <ProductsGrid
              categoryId={currentCategory?.id}
              paginationVisible={true}
            />
          </div>
        )
      ) : (
        <p
          style={{
            fontWeight: 500,
            fontSize: "32px",
            lineHeight: "38px",
            color: "#636363",
            padding: 0,
            margin: 0,
            marginTop: "20px",
            marginBottom: "14px",
            width: "939px",
            paddingLeft: "21px",
          }}
        >
          Select category
        </p>
      )}
    </StyledContainer>
  );
};
