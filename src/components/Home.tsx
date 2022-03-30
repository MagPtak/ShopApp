import React from 'react';
import Header from './Header';
import Search from './Search';
import Nav from './Nav';

const Home: React.FC<{}> = () => { 
 return (
    <>
      <Header />
      <Search />
      <Nav />
    </>
  )
}

export default Home;
