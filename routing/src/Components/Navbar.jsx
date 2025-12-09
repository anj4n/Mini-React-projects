import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h3>Anjan</h3>



    <div className='rightnav'>
        <Link to='/' className='links'>Home</Link>
        <Link to='/about' className='links'>About</Link>
        <Link to='/contact' className='links'>Contact</Link>
        <Link to='/product' className='links'>Product</Link>


    </div>



        

    </div>
  )
}

export default Navbar