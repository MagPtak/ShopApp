import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import Main from './Main/Main'

const Home: React.FC<{}> = () => { 
 return (
    <div className='container'>
      <PageContainer />
      <Main />
    </div>
  )
}

export default Home;
