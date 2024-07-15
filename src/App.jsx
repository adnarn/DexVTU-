import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home, Electricity, ElectricityPay, Airtime, AirtimeDrop, EntryPage} from './Pages'
import {Add, Atm, Betting, BuyData, Education, GiftCard, More, P2P, Scan, Refer, Subscribe, Transfer, TvSubscription, Withdraw} from './Components'
import MyHome from './Pages/HomePage/MyHome';




const App = () => {
  return (

  
    <Router>
      <div className='border'>
        <div className="routes">
          <Routes>
            <Route path='/loginSignUp' element={<MyHome />} />
            <Route path='/' element={<EntryPage />} />
            <Route path='/homePage' element={<Home />} />
            <Route path='/withdraw' element={<Withdraw />} />
            <Route path='/transfer' element={<Transfer />} />
            <Route path='/add' element={<Add />} />
            <Route path='/buyAirtimes/*' element={<AirtimeLayout />} />
            <Route path='/buyData' element={<BuyData />} />
            <Route path='/gotvSubscribe' element={<Subscribe header="GOTV Subscription"/>} />
            <Route path='/canalSubscribe' element={<Subscribe header="CANAL+ Subscription"/>} />
            <Route path='/dstvSubscribe' element={<Subscribe header="DSTV Subscription"/>} />
            <Route path='/startimesSubscribe' element={<Subscribe header="Startimes Subscription"/>} />
            <Route path='/payBills' element={<Electricity/>} />
            <Route path='/atm' element={<Atm />} />
            <Route path='/p2p' element={<P2P/>} />
            <Route path='/giftCard' element={<GiftCard/>} />
            <Route path='/buyTokens' element={<Education />} />
            <Route path='/bettings' element={<Betting />} />
            <Route path='/tvSubscription' element={<TvSubscription />} />
            <Route path='/scanQr' element={<Scan />} />
            <Route path='/refer' element={<Refer />} />
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
