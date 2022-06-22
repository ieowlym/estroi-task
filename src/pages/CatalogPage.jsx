import styled from "@emotion/styled";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../store/actions/loadCategories";

import { useSearchParams } from "react-router-dom";

import { Breadcrumbs } from "../components/BreadCrumbs";
import { Container } from "../components/Container";
import { ProductsGrid } from "../components/ProductsGrid";
import { SubcategoryGrid } from "../components/SubcategoryGrid";
import { Sidebar } from "../components/Sidebar";

import { PlaceholderImage } from "../general/NoCaseImages";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

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

function getCategoryPath(id, category) {
  const node = findNode(id, category);
  if (!id || !node) {
    return [category];
  }
  return [...getCategoryPath(node.parentId, category), node];
}

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

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

  const links = useMemo(() => {
    if (!category) return [];

    return getCategoryPath(categoryId, category).map((category) => ({
      label: category.name,
      to: category.id !== "main" ? "?categoryId=" + category.id : "",
    }));
  }, [categoryId, category]);

  return (
    <>
      <Container>
        <div style={{ margin: "20px 0" }}>
          <Breadcrumbs links={links} />
        </div>
      </Container>
      <StyledContainer>
        <div style={{ width: "240px" }}>
          {category && <Sidebar category={category} />}
        </div>
        {categoryId ? (
          currentCategory && (
            <div style={{ width: "939px", paddingLeft: "21px" }}>
              {currentCategory.parentId ? (
                <ProductsGrid
                  categoryId={currentCategory?.id}
                  paginationVisible={true}
                />
              ) : (
                <SubcategoryGrid currentCategory={currentCategory} />
              )}
            </div>
          )
        ) : (
          <div
            style={{
              width: "939px",
            }}
          >
            <PlaceholderImage />

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
                paddingLeft: "21px",
                textAlign: "center",
              }}
            >
              Выберите Категорию
            </p>
          </div>
        )}
      </StyledContainer>
    </>
  );
};
