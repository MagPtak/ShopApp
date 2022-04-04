import React from 'react';
import Header from '../Header/Header';
import Main from './Main/Main'

const Home: React.FC<Record<string, unknown>> = () => { 
 return (
    <div className='container'>
      <Header />
      <Main />
    </div>
  )
}

export default Home;

