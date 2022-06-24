import { Card } from "@mui/material";
import React from "react";

const CategoryFilter: React.FC<Record<string, unknown>> = ({ name }) => {
  return (
    <Card className="categoryFilter">
      <p>Types</p>
      <div className="categoryFilterSearch">
        <input placeholder="Search Here..."></input>
      </div>
      <div className="typesContainer">
        {name === "mens-clothing" && (
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
        )}
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
  );
};

export default CategoryFilter;
