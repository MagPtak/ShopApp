import React from 'react';
import { useParams } from 'react-router-dom';

const Category: React.FC<{}> = () => {
  let { name } = useParams();
  return (
    <div>Category {name ? name : null}</div>
  )
}

export default Category;
