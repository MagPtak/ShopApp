import React from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '../PageContainer/PageContainer';


const Category: React.FC<{}> = () => {
  let { name } = useParams();
  return (
    <div className='container'>
      <PageContainer />
      Category {name ? name : null}
      </div>
  )
}

export default Category;
