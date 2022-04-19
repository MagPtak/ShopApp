import Search from "../../elements/Search/Search"
import React from 'react';
import { Link } from 'react-router-dom';
import "./MainSearch.css";

const MainSearch: React.FC<Record<string, unknown>> = () => {

  return (
    <div className='searchContainer'>
      <div className='searchContent'>
        <div className='logoContainer'>
          <Link to="/" className='logo'>LOGO</Link>
        </div>
       <Search />
      </div>
    </div>
  )
}

export default MainSearch;
