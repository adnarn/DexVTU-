import React from 'react'
import { Link } from 'react-router-dom'

function HeaderBtn(){
  return (
    <div className='headerBtn'>
        <button>Spend</button>
        <button>Borrow</button>
        <button>Save</button>
        <Link to='/withdraw'>
        <button>Withdraw</button>
        </Link>
    </div>
  )
}

export default HeaderBtn