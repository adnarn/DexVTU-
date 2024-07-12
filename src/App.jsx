import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home, Electricity, ElectricityPay, Airtime, AirtimeDrop, EntryPage, } from './Pages'
import {Add, Atm, Betting, BuyData, Education, GiftCard, More, P2P, Scan, Spend, Subscribe, Transfer, TvSubscription, Withdraw} from './Components'




const App = () => {
  return (

  
    <Router>
      <div className='border'>
        <div className="routes">
          <Routes>
            <Route path='/' element={<EntryPage />} />
            <Route path='/homePage' element={<Home />} />
            <Route path='/withdraw' element={<Withdraw />} />
            <Route path='/transfer' element={<Transfer />} />
            <Route path='/add' element={<Add />} />
            <Route path='/buyAirtimes/*' element={<AirtimeLayout />} />
            <Route path='/buyData' element={<BuyData />} />
            <Route path='/subscribe' element={<Subscribe />} />
            <Route path='/payBills' element={<Electricity/>} />
            <Route path='/atm' element={<Atm />} />
            <Route path='/p2p' element={<P2P/>} />
            <Route path='/giftCard' element={<GiftCard/>} />
            <Route path='/buyTokens' element={<Education />} />
            <Route path='/bettings' element={<Betting />} />
            <Route path='/refer' element={<TvSubscription />} />
            <Route path='/scanQr' element={<Scan />} />
            <Route path='/more' element={<More />} />
            <Route path='payBills/buyElectricity/kano' element={<ElectricityPay name= 'KANO ELECTRIC'/>} />
            <Route path='payBills/buyElectricity/ikedc' element={<ElectricityPay name= 'IKEDC'/>} />
            <Route path='payBills/buyElectricity/ekedc' element={<ElectricityPay name= 'EKEDC ELECTRIC '/>} />
            <Route path='payBills/buyElectricity/phed' element={<ElectricityPay name= 'PHED'/>} />
            <Route path='payBills/buyElectricity/jed' element={<ElectricityPay name= 'JED'/>} />
            <Route path='payBills/buyElectricity/kano/ibedc' element={<ElectricityPay name= 'IBEDC'/>} />
            <Route path='payBills/buyElectricity/kaedco' element={<ElectricityPay name= 'KAEDCO'/>} />
          </Routes>
        </div>
      </div>
    </Router>

  )
}

const AirtimeLayout = () => {
  return (
    <div>
      <Airtime />
      <Routes>
        <Route path='drop' element={<AirtimeDrop />} />
      </Routes>
    </div>
  );
}


export default App;
