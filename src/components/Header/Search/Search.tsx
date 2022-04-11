import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Search.css";

const Search: React.FC<Record<string, unknown>> = () => {

  return (
    <div className='searchContainer'>
      <div className='searchContent'>
        <div className='logoContainer'>
          <Link to="/" className='logo'>LOGO</Link>

        </div>
        <div className='inputContainer'>
          <div className='box'>
            <input  className='input' type='text' placeholder='Search' required />
            <button className='button'>
              <SearchIcon sx={{color: 'black'}} />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search;
