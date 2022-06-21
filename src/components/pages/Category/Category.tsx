import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./Category.css";
import { ProductsService } from "../../../services/ProductsService";

const Categories: React.FC<Record<string, unknown>> = () => {
  const [mensClothing, setMensClothing] = useState<any>([]);
  const [womensClothing, setWomensClothing] = useState<any>([]);
  const [jewelry, setJewelry] = useState<any>([]);
  const [electronics, setElectronics] = useState<any>([]);
  const productsService = new ProductsService();

  const { name } = useParams();
  // const mensArr = ["Backpacks", "T-shirts", "Jackets"];
  // const womensArr = ["T-shirts", "Jackets"];
  // const jewelryArr = ["Bracelets", "Rings"];
  // const electronicsArr = ["External Hard Drives", "Televisions"];

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
            <Card className="categoryFilter">
              <p>Types</p>
              <div className="categoryFilterSearch">
                <input placeholder="Search Here..."></input>
              </div>
              <div className="typesContainer">
                {
                  name === "mens-clothing" && (
                    <>
                      <div className="inputContainer">
                        <input type="checkbox" id="backpack" />
                        <label>Backpacks</label>
                      </div>
                      <div className="inputContainer">
                        <input type="checkbox" id="t-shirts" />
                        <label>T-shirts</label>
                      </div>
                      <div className="inputContainer">
                        <input type="checkbox" id="jackets" />
                        <label>Jackets</label>
                      </div>
                    </>
                  )
                  // mensArr.map((el) => {
                  // <div className="typesContainer">
                  //   <input type="checkbox" id={el} key={el} />
                  //   <label>{el}</label>
                  // </div>;
                  // })
                }
                {name === "womens-clothing" && (
                  <>
                    <div className="inputContainer">
                      <input type="checkbox" id="t-shirts" />
                      <label>T-shirts</label>
                    </div>
                    <div className="inputContainer">
                      <input type="checkbox" id="jackets" />
                      <label>Jackets</label>
                    </div>
                  </>
                )}
                {name === "jewelery" && (
                  <>
                    <div className="inputContainer">
                      <input type="checkbox" id="bracelets" />
                      <label>Bracelets</label>
                    </div>
                    <div className="inputContainer">
                      <input type="checkbox" id="rings" />
                      <label>Rings</label>
                    </div>
                  </>
                )}
                {name === "electronics" && (
                  <>
                    <div className="inputContainer">
                      <input type="checkbox" id="televisions" />
                      <label>Televisions</label>
                    </div>
                    <div className="inputContainer">
                      <input type="checkbox" id="hardDrives" />
                      <label>External Hard Drives</label>
                    </div>
                  </>
                )}
              </div>
            </Card>
            <Card className="priceFilter">
              <div className="priceCheckboxContainer">
                <p>Price</p>
                <div>
                  <input type="radio" id="0" name="price" />
                  <label>Below $10</label>
                </div>
                <div>
                  <input type="radio" id="10" name="price" />
                  <label>$10 - $100</label>
                </div>
                <div>
                  <input type="radio" id="100" name="price" />
                  <label>$100 - $500</label>
                </div>
                <div>
                  <input type="radio" id="500" name="price" />
                  <label>Abowe $500</label>
                </div>
              </div>
            </Card>
          </aside>
          <div className="productListContainer">
            <select>
              <option value="featured">Featured</option>
              <option value="lowestPrice">Lowest Price</option>
              <option value="highestPrice">Highest Price</option>
            </select>
            <div className="productCategoryContainer">
              {name === "mens-clothing" &&
                mensClothing.map((el: any) => (
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
