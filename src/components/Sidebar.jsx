import styled from "@emotion/styled";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import * as React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CategoryCounter } from "./CategoryItem";

const StyledCounter = styled(CategoryCounter)`
  width: 24px;
  height: 24px;
  line-height: 24px;
  right: 6px;
  font-size: 12px;
  color: #000;
`;

const StyledList = styled(List)({
  ".css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root:hover": {
    backgroundColor: "#367BF5 !important",
    color: "#fff",
  },
  ".css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root.Mui-selected": {
    backgroundColor: "#367BF5",
    color: "#fff",
  },
});

export const Sidebar = ({ category }) => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const sidebarSelect = categoryId ? categoryId.substring(0, 2) : 0;
  const [selectedIndex, setSelectedIndex] = React.useState(sidebarSelect);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <StyledList>
        {category.childCategories.map((child) => (
          <Link
            key={child.id}
            to={"?categoryId=" + child.id}
            style={{
              textDecoration: "none",
              color: "#5E6366",
            }}
          >
            <ListItemButton
              selected={selectedIndex === child.id}
              onClick={(event) => handleListItemClick(event, child.id)}
            >
              <ListItemText
                primary={
                  <div style={{ display: "flex" }}>
                    <span>{child.name}</span>
                    <StyledCounter> {child.childCount}</StyledCounter>
                  </div>
                }
              />
            </ListItemButton>
            <Divider />
          </Link>
        ))}
      </StyledList>

      {/* <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List> */}
    </Box>
  );
};
