import React from 'react';
import Header from '../Header/Header';
import Main from './Main/Main'
import CategoryContainer from './Main/CategoryContainer/CategoryContainer';

const Home: React.FC<Record<string, unknown>> = () => { 
 return (
    <div className='container'>
      <Header />
      <Main />
      <CategoryContainer />
    </div>
  )
}

export default Home;

