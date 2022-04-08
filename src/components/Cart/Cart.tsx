import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Cart.css";


const Cart: React.FC<Record<string, unknown>> = () => {
  return (
    <div className='cartContainer'>
      <Header />
      <div className='cartContent'>
        Cart
      </div>
      <Footer />
    </div>
  )
}

export default Cart;
