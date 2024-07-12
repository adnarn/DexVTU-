import React, { useState } from 'react';
import './p2p.css';

const P2P = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the P2P transfer logic here
    alert(`Transferred ${amount} to ${recipient} with message: ${message}`);
    setAmount('');
    setRecipient('');
    setMessage('');
  };

  return (
    <div className="p2p-container">
      <h2 className="p2p-title">P2P Transfer</h2>
      <form onSubmit={handleSubmit} className="p2p-form">
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="p2p-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
            className="p2p-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message (optional):</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p2p-textarea"
          />
        </div>
        <button type="submit" className="p2p-button">Send</button>
      </form>
    </div>
  );
};

export default P2P;
