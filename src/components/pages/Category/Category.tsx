import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Categories: React.FC<Record<string, unknown>> = () => {
  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState();
  const [jewlery, setJewlery] = useState();
  const [electronics, setElectronics] = useState();

  const { name } = useParams();
  let imageClassName;

  if (name === "Mens Clothing") {
    imageClassName = "mensImage";
  } else if (name === "Womens Clothing") {
    imageClassName = "clothingImage";
  } else if (name === "Jewlery") {
    imageClassName = "accessoriesImage";
  } else {
    imageClassName = "gadgetsImage";
  }

  useEffect(() => {
    axios
      .get("http://localhost:9595/products")
      .then((response: any) => {
        const arr = Object.values(response.data);
        arr.filter(function (el: any) {
          if (el.category === "men's clothing") {
            setMensClothing(el);
            console.log(mensClothing);
            console.log(el);
          } else if (el.category === "women's clothing") {
            setWomensClothing(el);
          } else if (el.category === "jewlery") {
            setJewlery(el);
          } else if (el.category === "electronics") {
            setElectronics(el);
            console.log(el);
          }
        });
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
        <ul>
          {mensClothing.map((el) => {
            <li>{el}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default Categories;
