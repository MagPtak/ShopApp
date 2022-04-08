import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Other.css";


const Other: React.FC<Record<string, unknown>> = () => {
  return (
    <div className='otherContainer'>
     <Header />
     <div className='otherContent'>
      Other
     </div>
     <Footer />
    </div>
  )
}

export default Other;
