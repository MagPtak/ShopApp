import React from 'react';
import Main from './Main/Main'
import CategorySection from '../../CategorySection/CategorySection';

const Home: React.FC<Record<string, unknown>> = () => { 
 return (
    <div className='container'>
      <Main />
      <CategorySection />
    </div>
  )
}

export default Home;

