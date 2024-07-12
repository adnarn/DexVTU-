import React from 'react';
import './scanQr.css';
import QrCode from '../assets/QrCode.png'

const Scan = () => {
  return (
    <div className="scan-qr-container">
      <h2>Scan QR Code</h2>
      <div>
        {/* You can replace this with an actual QR code image or component */}
     <img src={QrCode} alt=""  id='Qr'  className="qr-code-placeholder"/>
      </div>
      <button className="scan-button">Scan Now</button>
    </div>
  );
}

export default Scan;
