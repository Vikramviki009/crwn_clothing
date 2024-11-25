import React from "react";
import styles from "./categoryItem.module.scss";

function CategoryItem({ category: item }) {
  return (
    <div className={styles.categoryContainer}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className={styles.categoryBodyContainer}>
        <h2>{item.name}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
