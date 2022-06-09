import React from "react";
import { NavLink } from "react-router-dom";
import "./CategorySection.css";

const CategorySection: React.FC<Record<string, unknown>> = () => {
  return (
    <div className="categoryContainer">
      <p className="categoryHeading">Shop By Category</p>
      <div className="categorySectionContent">
        <NavLink to="/category/mens-clothing" className="category">
          <article className="mensClothing">
            <p className="categoryName">Men's Clothing</p>
            <p className="amount">9 products</p>
          </article>
        </NavLink>
        <NavLink to="/category/womens-clothing" className="category">
          <article className="womensClothing">
            <p className="categoryName">Women's Clothing</p>
            <p className="amount">1 product</p>
          </article>
        </NavLink>
        <NavLink to="/category/jewelery" className="category">
          <article className="jewelery">
            <p className="categoryName">Jewlery</p>
            <p className="amount">4 products</p>
          </article>
        </NavLink>
        <NavLink to="/category/electronics" className="category">
          <article className="electronics">
            <p className="categoryName">Electronics</p>
            <p className="amount">5 products</p>
          </article>
        </NavLink>
      </div>
    </div>
  );
};

export default CategorySection;
