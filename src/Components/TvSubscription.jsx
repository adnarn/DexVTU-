import React from 'react'
import { Link } from 'react-router-dom'
import gotv from '../assets/gotv.jpg'
import dsTv from '../assets/dsTv.jpg'
import canal from '../assets/canal.jpg'
import startimes from '../assets/startimes.jpg'

const TvSubscription = () => {
  return (
    <>
    
    <div className="header">
              <h3 id='buyElectricity'>Television Subscription</h3>
            </div>
          
            <Link to='/gotvSubscribe'>
        <div className="card">
           <img src={gotv} alt="" /><h4 id='electricOpt' >GOTV</h4>
        </div>
        </Link>


        <Link to='/canalSubscribe'>
        <div className="card">
       <img src={canal} alt="" />
        <h4 id='electricOpt'>CANAL +</h4>
        </div>
        </Link>

        <Link to='/dstvSubscribe'>
        <div className="card">
        <img src={dsTv} alt="" />
        <h4 id='electricOpt'>DSTV</h4>
        </div>
        </Link>

  <Link to='/startimesSubscribe'>
        <div className="card">
        <img src={startimes} alt="" />
         <h4 id='electricOpt'>STARTIMES</h4>
        </div>
        </Link>

 


    </>
  )
}

export default TvSubscription