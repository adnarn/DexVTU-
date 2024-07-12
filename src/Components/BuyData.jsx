import React from 'react';
import './buyData.css';

const BuyData = () => {
  return (
    <div>
            <header><h3>DexVTU.com</h3></header>

<section>
   <div class="myHeading">

       <p>Data for all network</p>
       <h3>Buy Data</h3>
    
    </div>

    <form action="">
        <fieldset>

            <legend>Network</legend>
            <select name="" id="">
                <option value="select">Select</option>
                <option value="mtn">MTN</option>
                <option value="airtel">Airtel</option>
                <option value="glo">GLO</option>
                <option value="9Mobile">9Mobile</option>
            </select>
        </fieldset>
            
            <fieldset>
            <legend>Data Type</legend>
            <select name="" id="">
                <option value="select">Select</option>
                <option value="mtn">SME</option>
                <option value="9Mobile">SME2</option>
                <option value="airtel">Gifting</option>
                <option value="glo">Cooporate</option>
            </select>
        </fieldset>

        <fieldset>
            <legend>Data Plan</legend>
            <select name="" id="">
                <option value="select">Select</option>
                <option value="mtn">1GB SME (30days &#8358;250)</option>
                <option value="9Mobile">2GB SME (30days &#8358;250)</option>
                <option value="airtel">3GB SME (30days &#8358;250)</option>
                  <option value="glo">5GB SME (30days &#8358;250)</option>
                <option value="glo"><a href="#">more data plans</a></option>
            </select>
        </fieldset>

        
        <fieldset>
            <legend>Phone Number</legend>
           <input type="number" placeholder="09072799446" />
        </fieldset>

        {/* <input type="checkbox" name="" id="checkbox" />
        Disable Number Validator */}
    </form>
    <button>Buy Data</button>
</section>
    </div>
  )
}

export default BuyData



