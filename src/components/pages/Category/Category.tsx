import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./Category.css";
import { ProductsService } from "../../../services/ProductsService";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const Categories: React.FC<Record<string, unknown>> = () => {
  const [mensClothing, setMensClothing] = useState<string | number | null>([]);
  const [womensClothing, setWomensClothing] = useState<any>([]);
  const [jewelry, setJewelry] = useState<any>([]);
  const [electronics, setElectronics] = useState<any>([]);
  const productsService = new ProductsService();

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
    productsService.getData().then((response: any) => {
      const arr = Object.values(response.data);
      arr.filter(function (el: string | number) {
        if (el.category === "men's clothing") {
          setMensClothing((mensClothing): string | number => [
            ...mensClothing,
            el,
          ]);
        } else if (el.category === "women's clothing") {
          setWomensClothing((womensClothing: any) => [...womensClothing, el]);
        } else if (el.category === "jewelery") {
          setJewelry((jewelry: any) => [...jewelry, el]);
        } else if (el.category === "electronics") {
          setElectronics((electronics: any) => [...electronics, el]);
        }
      });
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
            <CategoryFilter name={name} />
            <PriceFilter />
          </aside>
          <div className="productListContainer">
            <select>
              <option value="featured">Featured</option>
              <option value="lowestPrice">Lowest Price</option>
              <option value="highestPrice">Highest Price</option>
            </select>
            <div className="productCategoryContainer">
              {name === "mens-clothing" &&
                mensClothing!.map((el: any) => (
                  <ProductCard key={el.id} data={el} />
                ))}
              {name === "womens-clothing" &&
                womensClothing.map((el: any) => (
                  <ProductCard key={el.id} data={el} />
                ))}
              {name === "jewelery" &&
                jewelry.map((el: any) => <ProductCard key={el.id} data={el} />)}
              {name === "electronics" &&
                electronics.map((el: any) => (
                  <ProductCard key={el.id} data={el} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Categories;
