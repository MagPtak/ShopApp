import React from 'react';
import Main from './Main/Main'
import CategoryContainer from './Main/CategoryContainer/CategoryContainer';

const Home: React.FC<Record<string, unknown>> = () => { 
 return (
    <div className='container'>
      <Main />
      <CategoryContainer />
    </div>
  )
}

export default Home;

