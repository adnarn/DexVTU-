import React from 'react'
import Header from './Header';
import HeaderBtn from './HeaderBtn';
import './homePage.css'
import Wallet from './Wallet';
import GridContainer from './GridContainer';

const Home = () => {
  return (
    <div>
         <Header />
      <HeaderBtn />
      <Wallet />
      <GridContainer />
    </div>
  )
}

export default Home