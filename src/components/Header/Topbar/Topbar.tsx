import React, { useState } from 'react';
import './Topbar.css';
import { FormControl, Select, MenuItem, IconButton, Badge, Menu, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Favorite } from '@mui/icons-material';
import { useStyles } from './Topbar.styles';
import { currencies } from './currencies';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 140,
      border: 'none',
    },
  },
};

const Header: React.FC<Record<string, unknown>> = () => {
  const [language, setLanguage] = useState('English')
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElFav, setAnchorElFav] = useState(null)
  const [currency, setCurrency] = useState('USD');

  const classes = useStyles();

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
    <header className='HeaderContainer'>
      <div className='HeaderContent'>
        <div className='leftSideContainer'>
          <div className='welcomeContainer'>
            <p>Welcome to our store</p>
          </div>  
          <div className='languageContainer'>
            <FormControl fullWidth>
              <Select
                labelId="select-demo"
                id="demo-simple-select"
                sx={{ color: 'white', borderRadius: 0, fontSize: '17px', fontWeight: '500'}}
                className={classes.selectFirst}
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"French"}>French</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='currencyContainer'>
           
            <FormControl sx={{color: 'white', border: 'none', }}  >
              <Select
                sx={{borderRadius: 0, color: 'white'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                className={classes.selectSecond}
                onChange={handleChange}
                input={<OutlinedInput />}
                MenuProps={MenuProps}
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency.id} value={currency.name} sx={{ padding: 0}}>
                    <div className='flagContainer'>
                      <img src={currency.url}/>
                      <ListItemText primary={currency.name} />
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className='rightSideContainer'>
          <div className='cartButtonContainer'>
            <IconButton 
            className={classes.cartIcon}
            aria-controls='menu'
            onClick={(e: any) => setAnchorEl(e.currentTarget)}
            >
              <Badge badgeContent={2} color='error'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Menu
            id='menu'
            keepMounted
            open={Boolean(anchorEl)} 
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
            >
              <MenuItem onClick={() => setAnchorEl(null)}>
                <div className='productContainer'>
                  <div className='productImage' />
                  <div className='productDescription'>
                    <p className='productName'>Denim Pullover</p>
                    <p className='productPrice'>$ 37.03</p>
                  </div>
                </div>
              </MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>
              <div className='productContainer'>
                <div className='productImage' />
                <div className='productDescription'>
                  <p className='productName'>Super Jacket</p>
                  <p className='productPrice'>$ 90</p>
                </div>
              </div>
              </MenuItem>
              <MenuItem>
                <Button 
                sx={{backgroundColor: "rgb(255, 85, 0)", color: 'white', width: '300px'}}
                className={classes.menuButton}
                >
                  Checkout</Button>
              </MenuItem>
            </Menu>
          </div>
          <div className='favoriteButtonContainer'>
            <IconButton 
            className={classes.cartIcon}
            aria-controls='menu'
            onClick={(e: any) => setAnchorElFav(e.currentTarget)}
            >
              <Badge badgeContent={1} color='error'>
                <Favorite />
              </Badge>
            </IconButton>
            <Menu
            id='menu'
            keepMounted
            open={Boolean(anchorElFav)} 
            onClose={() => setAnchorElFav(null)}
            anchorEl={anchorElFav}
            >
              <MenuItem onClick={() => setAnchorElFav(null)}>
              <div className='productContainer'>
                <div className='productImage' />
                  <div className='productDescription'>
                    <p className='productName'>Long Dress</p>
                    <p className='productPrice'>$ 60</p>
                  </div>
              </div>
              </MenuItem>
              <MenuItem>
                <Button 
                  sx={{backgroundColor: "rgb(255, 85, 0)", color: 'white', width: '300px'}}
                  className={classes.menuButton}
                  >
                    Add All To Cart</Button>
              </MenuItem>
             </Menu>
          </div>
          <div className='userContainer'>
            <div className='photo'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
