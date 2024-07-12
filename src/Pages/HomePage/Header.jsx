import React from 'react'
import pic from '../../assets/icon.jpeg'

const Header = () => {
  return (
    <div>
        <div className="contents">
              <img src= {pic} alt="" className='myImg'/> 
                <h2 id='h2'>Hi, User123</h2>
        </div>
        
    </div>
  )
}

export default Header