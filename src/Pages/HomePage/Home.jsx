import React from 'react'
import Header from './Header';
import HeaderBtn from './HeaderBtn';
import './homePage.css'
import Wallet from './Wallet';
import GridContainer from './GridContainer';
import Access from './Access';
// import Footer from './Footer';

const Home = () => {
  return (
    <div>
         <Header />
      <div className="myBorder">
      <Wallet />
      <HeaderBtn />
      </div>
      <Access />
      <GridContainer />
      {/* <Footer /> */}
    </div>
  )
}

export default Home