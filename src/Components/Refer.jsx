import React from 'react'
import { FaShareAlt } from 'react-icons/fa';
import './refer.css'

const Refer = () => {

  const referralLink = "https://dexVTU.com/Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero reiciendis";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };
  return (
    <div className="refer-container">
    <h2 className="refer-title">Refer & Earn</h2>
    <p className="refer-description">
      Invite your friends and earn rewards. Share your referral link and get a bonus for every successful referral.
    </p>
    <div className="refer-link-container">
      <input
        type="text"
        value={referralLink}
        readOnly
        className="refer-link-input"
      />
      <button onClick={copyToClipboard} className="refer-copy-button">
        <FaShareAlt className="copy-icon" />
        Copy Link
      </button>
    </div>
  </div>
  )
}

export default Refer