import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div>
            <Link to='men' className='gender'>Men</Link>
            <Link to='women 'className='gender'>Women</Link>

            
        </div>
        <Outlet/>

    </div>
  )
}

export default Product