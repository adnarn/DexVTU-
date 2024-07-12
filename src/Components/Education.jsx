import React from 'react'
import './education.css'
import neco from '../assets/OIP.jpg'
import waec from '../assets/waec.jpg'

const Education = () => {
  const handleWaecClick = () => {

      document.getElementById('type').innerText="WAEC"
  }

  const handleNecoClick =() =>{
    document.getElementById('type').innerHTML="NECO"
  }

  const handlePurchase = () => {
    // Implement the purchase logic here
    alert('Tokens purchased successfully!');
  };

  return (
    <div className='container'>
        <h1>Buy Exam Pin</h1>
      <div className="header">

        <div className="neco" onClick={handleNecoClick }>
        <img src={neco} alt="neco" />

        </div>
        <div className="waec" onClick={handleWaecClick}>
            <img src={waec} alt="waec" />
        </div>
      </div>

      <div className="content">
        <h3 id='type'>Type</h3>

        <select name="Quantity" id="">
          <option value="">Quantity</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>
      </div>
      <button onClick={handlePurchase }>CONTINUE</button>
    </div>
  )
}

export default Education