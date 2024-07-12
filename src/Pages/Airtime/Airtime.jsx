import React from 'react'
import './airtime.css'
import mtn from '../../assets/mtn.jpg'
import glo from '../../assets/glo.jpg'
import nineMobile from '../../assets/9mobile.jpg'
import airtel from '../../assets/airtel.jpg'
import { Link, NavLink } from 'react-router-dom'

const Airtime = () => {

const mtnClick= ()=>{
  document.getElementById('networkHeader').innerHTML='MTN Airtime Vtu';
}
const airtelClick= ()=>{
  document.getElementById('networkHeader').innerHTML='Airtel Airtime Vtu';
}
const gloClick= ()=>{
  document.getElementById('networkHeader').innerHTML='GLO Airtime Vtu';
}
const nineMobileClick= ()=>{
  document.getElementById('networkHeader').innerHTML='9Mobile Airtime Vtu';
}


  return (
    <div>
  
      <div className="topHeader">
        <div className="img" >
          <NavLink to="drop" >
            <img src={mtn} alt="mtn" onClick={mtnClick} id='img'/>
          </NavLink>
          <NavLink to="drop" >
            <img src={airtel} alt="airtel" onClick={airtelClick} id='img'/>
          </NavLink>
          <NavLink to="drop" >
            <img src={glo} alt="glo" onClick={gloClick} id='img'/>
          </NavLink>
          <NavLink to="drop" >
            <img src={nineMobile} alt="nineMobile" onClick={nineMobileClick} id='img'/>
          </NavLink>
        </div>
    
    </div>
    <div className="content">
      <h3 id='networkHeader'>Select a Network Provider</h3>
    </div>
  </div>
  )
}

export default Airtime