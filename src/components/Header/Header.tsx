import React from 'react';
import Topbar from './Topbar/Topbar';
import Search from './Search/Search';
import Nav from './Nav/Nav';

const Header: React.FC<Record<string, unknown>> = () => { 
 return (
    <div className='headerContainer'>
      <Topbar />
      <Search />
      <Nav />
    </div>
  )
}

export default Header;
