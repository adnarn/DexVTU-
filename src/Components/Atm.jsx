import React, { useState } from 'react';
import './atm.css';

const Atm = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('withdrawal');

  const handleTransaction = () => {
    // Implement the transaction logic here
    alert(`${transactionType} of ${amount} was successful!`);
  };

  return (
    <div className="atm-container">
      <h2 className="atm-title">ATM Transaction</h2>
      <form className="atm-form">
        <label className="atm-label">
          Account Number:
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="atm-input"
            placeholder="Enter account number"
          />
        </label>
        <label className="atm-label">
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="atm-input"
            placeholder="Enter amount"
          />
        </label>
        <label className="atm-label">
          Transaction Type:
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            className="atm-select"
          >
            <option value="withdrawal">Withdrawal</option>
            <option value="deposit">Deposit</option>
          </select>
        </label>
        <button
          type="button"
          onClick={handleTransaction}
          className="atm-button"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default Atm;
