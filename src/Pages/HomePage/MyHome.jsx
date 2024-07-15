import React from 'react'
import img from '../../assets/home.jpg'

const MyHome = () => {
  return (
   <>
   <img src={img} alt="" id='homePic'/>

   <button>Login</button>
   <button>SignUp</button>
   </>
  )
}

export default MyHome