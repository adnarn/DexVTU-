import React, { useState } from 'react';
import './airtime.css';

const AirtimeDrop = () => {
  const [amount, setAmount] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handlePurchase = () => {
    if (amount === '') {
      alert('Please Enter Amount!');
    } else if (mobileNumber === '') {
      alert('Please Enter Mobile Number!');
    } else if (mobileNumber.length !== 11 || !/^\d{11}$/.test(mobileNumber)) {
      alert('Please Enter a Valid 11-digit Mobile Number!');
    }else {
      alert(`Purchasing ${amount} for ${mobileNumber}`);
      setTimeout(() => {
        alert('Please wait, you will be notified soon.');
      }, 1000);
    }
  };


  return (
    <div className="dropDown">
      <input
        type="text"
        placeholder="Amount"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      /><br />
      <input
        type="text"
        placeholder="Mobile Number"
        id="mobileNumber"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        required
      /><br />
      <button onClick={handlePurchase}>CONTINUE</button>
    </div>
  );
};

export default AirtimeDrop;
