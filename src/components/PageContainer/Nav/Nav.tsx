import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav: React.FC<{}> = () => {

  return (
    <div className='navContainer'>
      <div className='navContent'>
        <NavLink to="/" style={({isActive}) => ({
        backgroundColor: isActive ? "rgb(255, 85, 0)" : "rgb(48, 44, 136)"})}>
        HOME
        </NavLink>
        <NavLink to="/category" style={({isActive}) => ({
        backgroundColor: isActive ? "rgb(255, 85, 0)" : "rgb(48, 44, 136)"})}>
        CATEGORY
        </NavLink>
        <NavLink to="/cart" style={({isActive}) => ({
        backgroundColor: isActive ? "rgb(255, 85, 0)" : "rgb(48, 44, 136)"})}>
        CART
        </NavLink>
      </div>
    </div>
  )
}

export default Nav;
