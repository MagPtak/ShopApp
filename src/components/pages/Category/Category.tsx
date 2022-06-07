import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Categories: React.FC<Record<string, unknown>> = () => {
  const { name } = useParams();
  let imageClassName;

  if (name === "clothing") {
    imageClassName = "clothingImage";
  } else if (name === "shoes") {
    imageClassName = "shoesImage";
  } else if (name === "accessories") {
    imageClassName = "accessoriesImage";
  } else {
    imageClassName = "gadgetsImage";
  }

  useEffect(() => {
    axios
      .get("http://localhost:9595/products")
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <article className="container">
      <div className="categoryContent">
        <div className={imageClassName}>
          <p className="nameLarge">{name ? name : null}</p>
          <p className="nameDescription">
            Choose The Wide Range Of Best {name}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Categories;
