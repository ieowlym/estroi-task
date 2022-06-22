import styled from "@emotion/styled";
import { Subcategory } from "./Subcategory";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 10px;
`;

export const SubcategoryGrid = ({ currentCategory }) => {
  return (
    <Grid>
      {currentCategory.childCategories &&
        currentCategory.childCategories.map((item) => (
          <Subcategory limit={4} category={item} key={item.id} />
        ))}
    </Grid>
  );
};
