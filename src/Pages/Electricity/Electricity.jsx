import React from 'react'
import './electricity.css'
import {FaBolt} from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Electricity = () => {
 
  return (
    <div>

            <div className="header">
              <h3 id='buyElectricity'>Buy Electricity</h3>
            </div>
          
          <Link to='buyElectricity/kano'>
        <div className="card">
        <FaBolt className='icons'/> <h4 id='electricOpt' >Kano Electric </h4>
        </div>
        </Link>


        <Link to='buyElectricity/ikedc'>
        <div className="card">
        <FaBolt className='icons'/> <h4 id='electricOpt'>IKEDC </h4>
        </div>
        </Link>

        <Link to='buyElectricity/ekedc'>
        <div className="card">
        <FaBolt className='icons'/> <h4 id='electricOpt'>EKEDC ELECTRIC </h4>
        </div>
        </Link>

  <Link to='buyElectricity/phed'>
        <div className="card">
        <FaBolt className='icons'/> <h4 id='electricOpt'>PHED</h4>
        </div>
        </Link>

        <Link to='buyElectricity/jed'>
        <div className="card">
        <FaBolt className='icons'/> <h4 id='electricOpt'>JED</h4>
        </div>
        </Link>

        <Link to='buyElectricity/ibedc'>
        <div className="card">
        <FaBolt className='icons'/> <h4 id='electricOpt'>IBEDC</h4>
        </div>
        </Link>

        <Link to='buyElectricity/kaedco'>
        <div className="card">
        <FaBolt className='icons'/> <h4 id='electricOpt'>KAEDCO</h4>
        </div>
        </Link>


      </div>

  )
}

export default Electricity