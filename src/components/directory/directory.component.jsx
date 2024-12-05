import React from "react";
import CategoryItem from "../category-item/categoryItem.component";
import "./directory.styles.scss";

function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </div>
  );
}

export default Directory;
