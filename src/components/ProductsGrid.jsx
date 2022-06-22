import styled from "@emotion/styled";
import { useCallback, useEffect } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../fetchers/fetchProducts";
import { LoadingComponent } from "../general/LoadingComponent";
import { NoProducts } from "../general/NoCaseImages";
import { loadProducts } from "../store/actions/loadProducts";
import { ProductsPagination } from "./ProductsPagination";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 15px;
`;

export const ProductItem = styled.div`
  position: relative;
  min-height: 88px;
  background: #eaeaea;
  display: flex;
  padding: 10px;
  & span {
    margin-left: 10px;
    font-weight: 400;
    font-size: 20px;
    overflow: hidden;
    padding-right:44px;
`;

export function ProductsGrid({ categoryId, paginationVisible }) {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.products);

  const load = useCallback(() => {
    dispatch(loadProducts(categoryId));
  }, [dispatch, categoryId]);

  useEffect(() => {
    load();
  }, [load]);

  // usestate
  // const [products, setProducts] = useState();
  // useEffect(() => {
  //   dispatch(loadProducts(categoryId));
  // }, [categoryId]);

  // useEffect(() => {
  //   fetchProducts(categoryId).then((products) => {
  //     setProducts(products);
  //   });
  // }, [categoryId]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      {products?.content.length === 0 ? (
        <NoProducts />
      ) : (
        <div>
          <Grid>
            {products?.content?.map((product) => (
              <ProductItem key={product.id}>
                <span>{product.name}</span>
              </ProductItem>
            ))}
          </Grid>
          {paginationVisible && (
            <div
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                marginTop: "23px",
              }}
            >
              <ProductsPagination />
            </div>
          )}
        </div>
      )}
    </>
  );
}
