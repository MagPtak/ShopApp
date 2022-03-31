import React from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import Nav from './Nav/Nav';
import Main from './Main/Main'

const Home: React.FC<{}> = () => { 
 return (
    <div className='container'>
      <Header />
      <Search />
      <Nav />
      <Main />
    </div>
  )
}

export default Home;
