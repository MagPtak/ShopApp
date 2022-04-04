import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';


const Category: React.FC<Record<string, unknown>> = () => {
  let { name } = useParams();
  return (
    <div className='container'>
      <Header />
      Category {name ? name : null}
      </div>
  )
}

export default Category;

