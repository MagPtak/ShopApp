import React from 'react';
import { useParams } from 'react-router-dom';
import "./Category.css";



const Category: React.FC<Record<string, unknown>> = () => {
  let { name } = useParams();
  return (
    <div className='container'>
      <div className='categoryContent'>
       Category {name ? name : null}
      </div> 
    </div>
  )
}

export default Category;

