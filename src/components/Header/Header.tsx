import React from 'react';
import Topbar from './Topbar/Topbar';
import Search from './Search/Search';
import Nav from './Nav/Nav';

const PageContainer: React.FC<Record<string, unknown>> = () => { 
 return (
    <div className='container'>
      <Topbar />
      <Search />
      <Nav />
    </div>
  )
}

export default PageContainer;
