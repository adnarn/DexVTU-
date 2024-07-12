import React, { useState } from 'react';
import './giftCard.css';

const GiftCard = () => {
  const [amount, setAmount] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePurchase = () => {
    // Implement the purchase logic here
    alert('Gift card purchased successfully!');
  };

  return (
    <div className="gift-card-container">
      <h2 className="gift-card-title">Buy a Gift Card</h2>
      <form className="gift-card-form">
        <label className="gift-card-label">
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="gift-card-input"
            placeholder="Enter amount"
          />
        </label>
        <label className="gift-card-label">
          Recipient's Email:
          <input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            className="gift-card-input"
            placeholder="Enter recipient's email"
          />
        </label>
        <label className="gift-card-label">
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="gift-card-textarea"
            placeholder="Enter a message"
          />
        </label>
        <button
          type="button"
          onClick={handlePurchase}
          className="gift-card-button"
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default GiftCard;
