import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CategoryCounter } from "./CategoryItem";

const SubLinks = styled(Link)`
  box-sizing: border-box;
  min-height: 28px;
  background: #ffffff;
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding: 6px 10px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 44px;
  }
`;

const Item = styled.div`
  padding: 10px;
  max-width: 314px;
  background: #eaeaea;
  border-radius: 4px;
  & a {
    color: #000;
    text-decoration: none;
    margin-bottom: 10px;
  }
`;

const HeaderLink = styled(Link)`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: block;
`;

const StyledCounter = styled(CategoryCounter)`
  width: 18px;
  height: 18px;
  line-height: 18px;
  font-size: 10px;
`;

const StyledButton = styled(Button)`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #196793;
  text-transform: lowercase;
`;

export const Subcategory = ({ category, limit }) => {
  const [expanded, setExpanded] = useState(false);

  const children =
    category.childCategories &&
    category.childCategories.slice(0, expanded ? undefined : limit);

  //   console.log(children);

  const show =
    category.childCategories && category.childCategories.length - limit;

  return (
    <Item>
      <HeaderLink to={"?categoryId=" + category.id}>{category.name}</HeaderLink>
      {category.childCategories &&
        children.map((subitem, index) => (
          <SubLinks to={"?categoryId=" + subitem.id} key={index}>
            <span>{subitem.name}</span>
            <StyledCounter>{subitem.childCount}</StyledCounter>
          </SubLinks>
        ))}
      {show > 0 && (
        <StyledButton variant="text" onClick={() => setExpanded(!expanded)}>
          {expanded ? `-скрыть` : `+${show} категории`}
        </StyledButton>
      )}
    </Item>
  );
};
