import React from 'react';
import { useParams } from 'react-router-dom';

const Product: React.FC<Record<string, unknown>> = () => {
  let { name } = useParams();
  return (
    <div>Product {name ? name : null}</div>
  )
}

export default Product;
