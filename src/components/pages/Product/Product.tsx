import React from "react";
import { useParams } from "react-router-dom";

const Product: React.FC<Record<string, unknown>> = () => {
  const { name } = useParams();
  return <div>Product {name ? name : null}</div>;
};

export default Product;
