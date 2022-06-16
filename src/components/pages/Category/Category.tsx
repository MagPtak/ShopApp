import axios from "axios";
import { Card, CardContent, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./Category.css";

const Categories: React.FC<Record<string, unknown>> = () => {
  const [mensClothing, setMensClothing] = useState<any>([]);
  const [womensClothing, setWomensClothing] = useState<any>([]);
  const [jewelry, setJewelry] = useState<any>([]);
  const [electronics, setElectronics] = useState<any>([]);

  const { name } = useParams();
  let imageClassName;

  if (name === "mens-clothing") {
    imageClassName = "mensImage";
  } else if (name === "womens-clothing") {
    imageClassName = "clothingImage";
  } else if (name === "jewelery") {
    imageClassName = "accessoriesImage";
  } else if (name === "electronics") {
    imageClassName = "gadgetsImage";
  }

  useEffect(() => {
    axios
      .get("http://localhost:9595/products")
      .then((response: any) => {
        const arr = Object.values(response.data);
        arr.filter(function (el: any) {
          if (el.category === "men's clothing") {
            setMensClothing((mensClothing: any) => [...mensClothing, el]);
          } else if (el.category === "women's clothing") {
            setWomensClothing((womensClothing: any) => [...womensClothing, el]);
          } else if (el.category === "jewelery") {
            setJewelry((jewelry: any) => [...jewelry, el]);
          } else if (el.category === "electronics") {
            setElectronics((electronics: any) => [...electronics, el]);
          }
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  return (
    <article>
      <div className="categoryContent">
        <div className={imageClassName}>
          <p className="nameLarge">{name ? name : null}</p>
          <p className="nameDescription">
            Choose The Wide Range Of Best {name}
          </p>
        </div>
        <div className="productContent">
          <aside>
            <Card className="searchProduct">
              <input placeholder="Search Products"></input>
            </Card>
            <Card className="categoryFilter"></Card>
            <Card className="priceFilter"></Card>
          </aside>
          <div className="productListContainer">
            <select>
              <option value="featured">Featured</option>
              <option value="lowestPrice">Lowest Price</option>
              <option value="highestPrice">Highest Price</option>
            </select>
            <div className="dupa">
              {name === "mens-clothing" &&
                mensClothing.map((el: any) => (
                  <ProductCard key={el.id} data={el} />
                ))}
              {name === "womens-clothing" &&
                womensClothing.map((el: any) => (
                  <li key={el.id}>{el.title}</li>
                ))}
              {name === "jewelery" &&
                jewelry.map((el: any) => <li key={el.id}>{el.title}</li>)}
              {name === "electronics" &&
                electronics.map((el: any) => <li key={el.id}>{el.title}</li>)}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Categories;
