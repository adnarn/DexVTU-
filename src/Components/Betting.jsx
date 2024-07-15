import React, { useState } from 'react';
import './betting.css';

const Betting= () => {
  const [betAmount, setBetAmount] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');

  const handlePlaceBet = () => {
    if (selectedEvent === '' || betAmount === '') {
      alert('Please select an event and enter an amount to bet.');
    } else {
      alert(`You placed a bet of ${betAmount} on ${selectedEvent}.`);
      // Implement further betting logic here
    }
  };

  return (
    <div className="betting-container">
      <h2>Place Your Bet</h2>
      <form>
        <div className="form-group">
          <label htmlFor="eventSelect">Select Event:</label>
          <select
            id="eventSelect"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          >
            <option value="">--Choose an event--</option>
            <option value="Event 1">Football</option>
            <option value="Event 2">Basketball</option>
         
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="betAmount">Bet Amount:</label>
          <input
            type="text"
            id="betAmount"
            placeholder="Enter amount"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
          />
        </div>
        <button type="button" onClick={handlePlaceBet}>
          Place Bet
        </button>
      </form>
    </div>
  );
};

export default Betting;
