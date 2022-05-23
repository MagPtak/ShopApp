import React from "react";
import { useParams } from "react-router-dom";
import "./Category.css";

const Category: React.FC<Record<string, unknown>> = () => {
  let { name } = useParams();
  let image;

  if (name === "clothing") {
    image = "../../../assets/category/clothing.jpg";
  } else if (name === "shoes") {
    image = "../../../assets/category/shoes.jpg";
  } else if (name === "accessories") {
    image = "../../../assets/category/accessories.jpg";
  } else {
    image = "../../../assets/category/gadgets.jpg";
  }

  return (
    <article className="container">
      <div className="categoryContent">
        <p>Category {name ? name : null}</p>
      </div>
    </article>
  );
};

export default Category;
