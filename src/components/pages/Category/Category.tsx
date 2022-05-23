import React from "react";
import { useParams } from "react-router-dom";
import "./Category.css";

const Category: React.FC<Record<string, unknown>> = () => {
  let { name } = useParams();
  let imageClassName;

  // if (name === "clothing") {
  //   image = "../../../assets/category/clothing.jpg";
  // } else if (name === "shoes") {
  //   image = "../../../assets/category/shoes.jpg";
  // } else if (name === "accessories") {
  //   image = "../../../assets/category/accessories.jpg";
  // } else {
  //   image = "../../../assets/category/gadgets.jpg";
  // }

  if (name === "clothing") {
    imageClassName = "clothingImage";
  } else if (name === "shoes") {
    imageClassName = "shoesImage";
  } else if (name === "accessories") {
    imageClassName = "accessoriesImage";
  } else {
    imageClassName = "gadgetsImage";
  }

  return (
    <article className="container">
      <div className="categoryContent">
        <div className={imageClassName}>
          <p>Category {name ? name : null}</p>
        </div>
      </div>
    </article>
  );
};

export default Category;
