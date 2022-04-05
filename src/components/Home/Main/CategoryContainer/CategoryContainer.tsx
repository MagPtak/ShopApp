import React from 'react';
import "./CategoryContainer.css";



const CategoryContainer: React.FC<Record<string, unknown>> = () => { 
 return (
    <div className='categoryContainer'>
      <p className='categoryHeading'>Shop By Category</p>
      <div className='categoryContent'>
        <div className='category'>
         <div className='clothing'>
          <p className='categoryName'>Clothing</p>
          <p className='amount'>9 products</p>
          </div>
        </div>
        <div className='category'>
          <div className='shoes'>
            <p className='categoryName'>Shoes</p>
            <p className='amount'>1 product</p>
          </div>
        </div>
        <div className='category'>
          <div className='accessories'>
            <p className='categoryName'>Accessories</p>
            <p className='amount'>4 products</p>
          </div>
        </div>
        <div className='category'>
          <div className='gadgets'>
            <p className='categoryName'>Gadgets</p>
            <p className='amount'>5 products</p>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default CategoryContainer;

