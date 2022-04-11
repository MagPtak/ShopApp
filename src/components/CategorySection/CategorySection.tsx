import React from 'react';
import { NavLink } from 'react-router-dom';
import "./CategorySection.css";

const CategoryContainer: React.FC<Record<string, unknown>> = () => { 
 return (
    <div className='categoryContainer'>
      <p className='categoryHeading'>Shop By Category</p>
      <div className='categoryContent'>
        <NavLink to="/category/: clothing" className='category'>
         <div className='clothing'>
          <p className='categoryName'>Clothing</p>
          <p className='amount'>9 products</p>
          </div>
        </NavLink>
        <NavLink to="/category/: shoes" className='category'>
          <div className='shoes'>
            <p className='categoryName'>Shoes</p>
            <p className='amount'>1 product</p>
          </div>
          </NavLink>
        <NavLink to="/category/: accessories" className='category'>
          <div className='accessories'>
            <p className='categoryName'>Accessories</p>
            <p className='amount'>4 products</p>
          </div>
          </NavLink>
        <NavLink to="/category/: gadgets" className='category'>
          <div className='gadgets'>
            <p className='categoryName'>Gadgets</p>
            <p className='amount'>5 products</p>
          </div>
        </NavLink>
      </div>
     
    </div>
  )
}

export default CategoryContainer;

