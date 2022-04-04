import React, { useState, MouseEvent } from 'react';
import './Topbar.css';
import { FormControl, Select, MenuItem, IconButton, Badge, Menu, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Favorite } from '@mui/icons-material';
import { useStyles } from './Topbar.styles';


const Header: React.FC<Record<string, unknown>> = () => {
  const [language, setLanguage] = useState('English')
  const [currency, setCurrency] = useState('USD')
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElFav, setAnchorElFav] = useState(null)

  const classes = useStyles();

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
                sx={{ color: 'white', borderRadius: 0, fontSize: '17px', fontWeight: '500',}}
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
            <FormControl fullWidth>
              <Select
                labelId="select-demo"
                sx={{ color: 'white', borderRadius: 0, fontSize: '17px', fontWeight: '500'}}
                className={classes.selectSecond}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"INR"}>
                  <div className='flagContainer'>
                    <div className='inr' />
                    <p>INR</p>
                  </div>
                </MenuItem>
                <MenuItem value={"USD"}>
                <div className='flagContainer'>
                    <div className='usd' />
                    <p>USD</p>
                </div>
                </MenuItem>
                <MenuItem value={"NZD"}>
                <div className='flagContainer'>
                    <div className='nzd' />
                    <p>NZD</p>
                </div>
                </MenuItem>
                <MenuItem value={"GMD"}>
                <div className='flagContainer'>
                    <div className='gmd' />
                    <p>GMD</p>
                </div>
                </MenuItem>
                <MenuItem value={"ILR"}>
                <div className='flagContainer'>
                    <div className='ilr' />
                    <p>ILR</p>
                </div>
                </MenuItem>
                <MenuItem value={"EUR"}>
                <div className='flagContainer'>
                    <div className='eur' />
                    <p>EUR</p>
                </div>
                </MenuItem>
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
