import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import "./Search.css"
import { makeStyles } from "@mui/styles";


const Search: React.FC<{}> = () => {

  return (
    <div className='searchContainer'>
      <div className='searchContent'>
        <div className='logoContainer'>
          <p>LOGO</p>
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
