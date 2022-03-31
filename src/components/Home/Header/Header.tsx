import React, { useState } from 'react';
import './Header.css';
import { FormControl, Select, MenuItem, IconButton, Badge } from '@mui/material';
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Favorite } from '@mui/icons-material';

const useStyles = makeStyles({
  selectFirst: {
    color: 'white',
    height: '50px',
    borderRight: '1px solid grey',
    borderLeft: '1px solid grey',
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
  selectSecond: {
    color: 'white',
    fontWeight: '400',
    height: '50px',
    borderRight: '1px solid grey',
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
  cartIcon: {
    height: '50px',
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  }
});

const Header: React.FC<{}> = () => {
  const [language, setLanguage] = useState('English')
  const [currency, setCurrency] = useState('USD')

  const classes = useStyles();

  return (
    <div className='container'>
      <div className='content'>
        <div className='leftSideContainer'>
          <div className='welcomeContainer'>
            <p>Welcome to our store</p>
          </div>  
          <div className='languageContainer'>
            <FormControl fullWidth>
              <Select
                labelId="select-demo"
                id="demo-simple-select"
                sx={{ color: 'white', borderRadius: 0, fontSize: '17px', fontWeight: '500',}}
                className={classes.selectFirst}
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"German"}>German</MenuItem>
                <MenuItem value={"Japanese"}>Japanese</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='currencyContainer'>
            <FormControl fullWidth>
              <Select
                labelId="select-demo"
                sx={{ color: 'white', borderRadius: 0, fontSize: '17px', fontWeight: '500'}}
                className={classes.selectSecond}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"YEN"}>YEN</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className='rightSideContainer'>
          <div className='cartButtonContainer'>
            <IconButton className={classes.cartIcon}>
              <Badge badgeContent={2} color='error'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
          <div className='favoriteButtonContainer'>
            <IconButton className={classes.cartIcon}>
              <Badge badgeContent={1} color='error'>
                <Favorite />
              </Badge>
            </IconButton>
          </div>
          <div className='userContainer'>
            <div className='photo'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
