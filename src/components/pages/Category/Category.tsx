import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./Category.css";
import { ProductsService } from "../../../services/ProductsService";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import { Products, SortOptions } from "../../../components/model/interfaces";

const Categories = () => {
  const [mensClothing, setMensClothing] = useState<Products[]>([]);
  const [womensClothing, setWomensClothing] = useState<Products[]>([]);
  const [jewelry, setJewelry] = useState<Products[]>([]);
  const [electronics, setElectronics] = useState<Products[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [pierceSortBy, setPierceSortBy] = useState<SortOptions>();
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


  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchValue((event.target as HTMLInputElement).value);
    }
  };

  const getFiltredProducts = (collection: Products[]) => {
    return collection.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  };

  const sortPierceBy = (a: Products, b: Products) => {
    switch (pierceSortBy) {
    case SortOptions.Lowest:
      return a.price - b.price;
    case SortOptions.Highest:
      return b.price - a.price;
    default:
      return 0;
    }
  };

  const handlePierceSortByChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPierceSortBy(e.target.value as SortOptions);
  };

  useEffect(() => {
    productsService.getData().then((response: any) => {
      const arr: Products[] = Object.values(response.data);
      arr.filter(function (el: Products) {
        if (el.category === "men's clothing") {
          setMensClothing((mensClothing): Products[] => [...mensClothing, el]);
        } else if (el.category === "women's clothing") {
          setWomensClothing((womensClothing): Products[] => [
            ...womensClothing,
            el,
          ]);
        } else if (el.category === "jewelery") {
          setJewelry((jewelry): Products[] => [...jewelry, el]);
        } else if (el.category === "electronics") {
          setElectronics((electronics): Products[] => [...electronics, el]);
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
              <input
                type="search"
                placeholder="Search Products"
                onKeyDown={handleSearch}
              ></input>
            </Card>
            <CategoryFilter name={name} />
            <PriceFilter />
          </aside>
          <div className="productListContainer">
            <select onChange={handlePierceSortByChange} value={pierceSortBy}>
              <option value={SortOptions.Featured}>Featured</option>
              <option value={SortOptions.Lowest}>Lowest Price</option>
              <option value={SortOptions.Highest}>Highest Price</option>
            </select>
            <div className="productCategoryContainer">
              {name === "mens-clothing" &&
                getFiltredProducts(mensClothing)
                  .sort(sortPierceBy)
                  .map((el: Products) => <ProductCard key={el.id} data={el} />)}
              {name === "womens-clothing" &&
                getFiltredProducts(womensClothing)
                  .sort(sortPierceBy)
                  .map((el: Products) => <ProductCard key={el.id} data={el} />)}
              {name === "jewelery" &&
                getFiltredProducts(jewelry)
                  .sort(sortPierceBy)
                  .map((el: Products) => <ProductCard key={el.id} data={el} />)}
              {name === "electronics" &&
                getFiltredProducts(electronics)
                  .sort(sortPierceBy)
                  .map((el: Products) => <ProductCard key={el.id} data={el} />)}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Categories;
