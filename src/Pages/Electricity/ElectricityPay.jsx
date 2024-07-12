import React from 'react'
import {FaBolt} from 'react-icons/fa'


const ElectricityPay = (props) => {

    return (
    <div>
      <div className="myDiv">
      <div className="Bolt">
      <FaBolt  className='icon'/>
      <div className="header">
        <br /><br />
        <h6 id='stateHeading'>{props.name}</h6>    

      </div>
      </div>
      <div className="content">
        <form action="">
        <select id='select'>
          <option value="">Select Meter Type</option>
          <option value="">Prepaid</option>
          <option value="">Postpaid</option>
        </select> <br /><br />

          <input type="text" placeholder='Meter Number' id='input' />
          <input type="text" placeholder='Amount' id='input'/>
          <input type="text" placeholder='Mobile Number' id='input' />

          <button>CONTINUE</button>

        </form>
      </div>
      </div>
    </div>
  )
}

export default ElectricityPay