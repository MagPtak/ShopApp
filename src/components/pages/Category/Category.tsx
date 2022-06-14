import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
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
    <article className="container">
      <div className="categoryContent">
        <div className={imageClassName}>
          <p className="nameLarge">{name ? name : null}</p>
          <p className="nameDescription">
            Choose The Wide Range Of Best {name}
          </p>
        </div>
        {/* <Product
          props={
            name === "mens-clothing"
              ? mensClothing
              : name === "womens-clothing"
                ? womensClothing
                : name === "jewelery"
                  ? jewelry
                  : electronics
          }
          key={
            name === "mens-clothing"
              ? mensClothing.id
              : name === "womens-clothing"
                ? womensClothing.id
                : name === "jewelery"
                  ? jewelry.id
                  : electronics.id
          } */}
        {/* /> */}
        <ul>
          {name === "mens-clothing" &&
            mensClothing.map((el: any) => (
              // <Product key={el.id} props={el}/>
              <li  key={el.id}>
                <Card className="product">
                  <CardContent>
                    <img className="productImg" src={el.image}></img>
                    <Typography>
                      {el.title}
                    </Typography>
                  </CardContent>
                </Card>
              </li>
            ))}
          {name === "womens-clothing" &&
            womensClothing.map((el: any) => <li key={el.id}>{el.title}</li>)}
          {name === "jewelery" &&
            jewelry.map((el: any) => <li key={el.id}>{el.title}</li>)}
          {name === "electronics" &&
            electronics.map((el: any) => <li key={el.id}>{el.title}</li>)}
        </ul>
      </div>
    </article>
  );
};

export default Categories;
