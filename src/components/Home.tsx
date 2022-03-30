import React from 'react';
import Header from './Header/Header';
import Search from './Search';
import Nav from './Nav';

const Home: React.FC<{}> = () => { 
 return (
    <div className='container'>
      <Header />
      <Search />
      <Nav />
    </div>
  )
}

export default Home;
