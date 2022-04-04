import React from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import Nav from './Nav/Nav';

const PageContainer: React.FC<{}> = () => { 
 return (
    <div className='container'>
      <Header />
      <Search />
      <Nav />
    </div>
  )
}

export default PageContainer;
