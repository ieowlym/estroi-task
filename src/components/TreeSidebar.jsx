import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";

import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledTreeItem = styled((props) => <TreeItem {...props} />)(() => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    color: "#78909C",
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    padding: 0,
    margin: 0,
    paddingLeft: "22px",
  },

  [`& .${treeItemClasses.content}`]: {
    borderBottom: "1px solid #F1F3F4;",
    height: "40px",
    boxSizing: "border-box",
    color: "#5E6366",
    cursor: "default",
  },

  [`& .${treeItemClasses.selected}.Mui-focused`]: {
    backgroundColor: "#367BF5",
    "& span, svg": {
      color: "#fff",
    },
  },

  [`& .${treeItemClasses.content}.Mui-selected.Mui-focused`]: {
    backgroundColor: "#367BF5",
    "& span, svg": {
      color: "#fff",
    },
  },

  [`& .${treeItemClasses.content}.Mui-selected:hover`]: {
    backgroundColor: "#367BF5",
    "& span, svg": {
      color: "#fff",
    },
  },

  [`& .${treeItemClasses.focused}`]: {
    backgroundColor: "#367BF5",
    "& span, svg": {
      color: "#fff",
    },
  },

  [`& .${treeItemClasses.focused}:hover`]: {
    backgroundColor: "#367BF5",
    "& span, svg": {
      color: "#fff",
    },
  },

  [`& .${treeItemClasses.label}`]: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    paddingRight: "25px",
    "> *": {
      color: "#5E6366",
      "> span": {
        overflow: "hidden",
        fontSize: "14px",
      },
      "> div": {
        width: "24px",
        height: "24px",
        background: "#ABABAB",
        position: "absolute",
        right: 0,
        top: 0,
        textAlign: "center",
        alignItems: "center",
        borderRadius: "50%",
        fontSize: "12px",
        lineHeight: "24px",
        color: "#000",
      },
    },
  },
}));

export const TreeSidebar = ({ category }) => {
  const renderTree = (nodes) => (
    <StyledTreeItem
      key={nodes.id + ""}
      nodeId={nodes.id + ""}
      label={
        <Link
          to={"/?categoryId=" + nodes.id}
          style={{ textDecoration: "none" }}
        >
          <span>{nodes.name}</span>
          <div>{nodes.childCount}</div>
        </Link>
      }
    >
      {Array.isArray(nodes.childCategories)
        ? nodes.childCategories.map((node) => renderTree(node))
        : null}
    </StyledTreeItem>
  );

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        color: "#5E6366",
        width: "240px",
        maxHeight: "600px",
        overflowY: "scroll",
      }}
    >
      {category.childCategories.map((children) => renderTree(children))}
    </TreeView>
  );
};
