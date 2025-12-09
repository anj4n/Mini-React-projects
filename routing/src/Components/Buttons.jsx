import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buttons = () => {
    let navigate = useNavigate();
  return (
    <div className='nav2'>
        <button onClick={()=>{
            navigate('/');
        }}>Back to home </button>
        <button  onClick={()=> {
            navigate(-1);
        }}
        >Previous</button>
    </div>
  )
}

export default Buttons