import React from 'react';
import Topbar from './Topbar/Topbar';
import Search from './Search/Search';
import Nav from './Nav/Nav';


const Header: React.FC<Record<string, unknown>> = () => { 
 return (
    <div >
      <Topbar />
      <Search />
      <Nav />
    </div>
  )
}

export default Header;
