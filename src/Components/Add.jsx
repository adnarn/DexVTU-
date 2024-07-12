// import React, {useState} from 'react'
// import './add.css'

// const Add = () => {
//   const [toggle, setToggle]= useState(false)
  
//   const toggleLegend= ()=>{
//   // const input = document.getElementById('input');
//   // input.addEventListener(click, ()=>{
//     setToggle('true')
//   // })
//   }


//   return (
//     <div>
//       <div className="container">
//         <div className="header">
//           <h2>Earning Transfer</h2>
//         </div>
//         <div className="content">
//           <h4>Earning To Wallet</h4>
       
//          <br />
//          <fieldset className= {toggle? 'legendVisible': 'legend'} >
//           <legend className={toggle? 'legendVisible': 'legend'}>Amount</legend>
//                   <input type="number" placeholder='Amount'  className='input' id='input' onClick={toggleLegend} />
//               </fieldset>

//           <button>CONTINUE</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Add


import React from 'react'
import './add.css'

const Add = () => {
  return (
    <div>
  
        <div className="header">
        <h2>Earning Transfer</h2>
        </div>
        <div className="content">
        <h4 id='h4'>Earning To Wallet</h4>
               
         <br />
          <input type="number" placeholder='Amount' id='inputs'/>

          <button id='btn'>CONTINUE</button>
        </div>
      </div>

  )
}

export default Add