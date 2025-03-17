import React from "react";
import SearchForm from "./slidebar/SearchForm";
import CategoryList from "./slidebar/CategoryList";
import ProductTags from "./slidebar/ProductTags";

const Sidebar: React.FC = () => {
  return (
    <aside id="sidebar">
      <SearchForm />
      <CategoryList />
      <ProductTags />
    </aside>
  );
};

export default Sidebar;
