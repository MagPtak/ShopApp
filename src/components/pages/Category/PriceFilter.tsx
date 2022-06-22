import { Card } from "@mui/material";
import React from "react";

const PriceFilter: React.FC<Record<string, unknown>> = () => {
  return (
    <Card className="priceFilter">
      <div className="priceCheckboxContainer">
        <p>Price</p>
        <div>
          <input type="radio" id="price-0" name="price" />
          <label htmlFor="price-0">Below $10</label>
        </div>
        <div>
          <input type="radio" id="price-10" name="price" />
          <label htmlFor="price-10">$10 - $100</label>
        </div>
        <div>
          <input type="radio" id="price-100" name="price" />
          <label htmlFor="price-100">$100 - $500</label>
        </div>
        <div>
          <input type="radio" id="price-500" name="price" />
          <label htmlFor="price-500">Abowe $500</label>
        </div>
      </div>
    </Card>
  );
};

export default PriceFilter;
