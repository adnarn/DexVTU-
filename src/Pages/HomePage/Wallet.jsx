import React from 'react'
import '../../App.css'
import { FaArrowUp, FaPlusCircle, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom'




const Wallet = () => {
  return (
    <>

    <div className='balance'>Balance: &#8358;100,000.00
    </div>
       
       <div className='wallet'>
        <Link to='/transfer'>
        <button><FaArrowUp />Transfer</button>
        </Link>
        <Link to='/add'>
        <button><FaPlusCircle/> Add Money</button>
        </Link>
    </div>
  
    </>
  )
}

export default Wallet


{/* <i class="fa-light fa-arrow-up-long"></i>  */}