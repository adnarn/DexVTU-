import React from 'react'
import {  FaCommentDollar, FaGraduationCap, FaPhoneAlt, FaWifi, FaBolt, FaRegFutbol, FaGift, FaCreditCard, FaPeopleCarry, FaQrcode, FaBuromobelexperte, FaTv } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const GridContainer = () => {
  return (
    <div className='gridContainer'>
  
  <Link to='/buyAirtimes'>
        <button classsName="btn"><FaPhoneAlt className='icons'/> <br />Airtime</button>
</Link>

     <Link to="/buyData" > <button classsName="btnData"><FaWifi className='icons'/> <br />Data</button> </Link>

       <Link to='/payBills'>
        <button classsName="btn"><FaBolt className='icons'/><br /> Electricity</button>
        </Link>
        <Link to='/atm'>
        <button classsName="btn"> <FaCreditCard className='icons'/> <br />ATM</button>
        </Link>
       
    <Link to='/tvSubscription'>
        <button classsName="btn"><FaTv  className='icons'/> <br />Subscription</button>
     </Link>

        <Link to='/p2p'>
        <button classsName="btn"><FaPeopleCarry className='icons'/> <br />P2P</button>
        </Link>

        <Link to='/giftCard'>
               <button classsName="btn"><FaGift className='icons'/> <br />Gift Card</button>
           </Link>
 
        <Link to='/buyTokens'>
        <button classsName="btn"><FaGraduationCap className='icons'/> <br />Education</button>
        </Link>

        <Link to='/bettings'>
        <button classsName="btn"><FaRegFutbol className='icons'/><br /> Bettting</button>
        </Link>

        <Link to='/refer'>
        <button classsName="btn"><FaCommentDollar className='icons'/> <br />Refer & Earn</button>
        </Link>
        
        <Link to='/scanQr'>
        <button ><FaQrcode className='icons'/> <br />Scan Qr</button>
       </Link>

       <Link to='/more'>
       <button classsName="btn"><FaBuromobelexperte  className='icons'/> <br /> More</button>
      </Link>
    </div>
  )
}

export default GridContainer