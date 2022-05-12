import React from "react";
import { NavLink } from "react-router-dom";
import "./CategorySection.css";

const CategorySection: React.FC<Record<string, unknown>> = () => {
  return (
    <div className="categoryContainer">
      <p className="categoryHeading">Shop By Category</p>
      <div className="categorySectionContent">
        <NavLink to="/category/clothing" className="category">
          <article className="clothing">
            <p className="categoryName">Clothing</p>
            <p className="amount">9 products</p>
          </article>
        </NavLink>
        <NavLink to="/category/shoes" className="category">
          <article className="shoes">
            <p className="categoryName">Shoes</p>
            <p className="amount">1 product</p>
          </article>
        </NavLink>
        <NavLink to="/category/accessories" className="category">
          <article className="accessories">
            <p className="categoryName">Accessories</p>
            <p className="amount">4 products</p>
          </article>
        </NavLink>
        <NavLink to="/category/gadgets" className="category">
          <article className="gadgets">
            <p className="categoryName">Gadgets</p>
            <p className="amount">5 products</p>
          </article>
        </NavLink>
      </div>
    </div>
  );
};

export default CategorySection;
