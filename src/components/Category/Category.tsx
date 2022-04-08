import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Category.css";



const Category: React.FC<Record<string, unknown>> = () => {
  let { name } = useParams();
  return (
    <div className='container'>
      <Header />
      <div className='categoryContent'>
       Category {name ? name : null}
      </div> 
      <Footer />
      </div>
  )
}

export default Category;

