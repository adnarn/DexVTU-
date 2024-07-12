import React from 'react'
import './transfer.css'

const Transfer = () => {
  return (
    <div>
  
        <div className="header">
          <h2>Wallet Transfer</h2>
        </div>
        <div className="content">
          <h4>Wallet Transfer</h4>
       
         <br />
          <input type="number" placeholder='Amount' />
          <input type="number" placeholder='Reciever Phone Number' />

          <button>CONTINUE</button>
        </div>
      </div>

  )
}

export default Transfer