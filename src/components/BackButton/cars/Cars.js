import React from 'react'
import './Cars.css'
import { useNavigate } from 'react-router-dom'
function CarsButton() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>navigate('/itemcatlog')} className='carsbtn'>Back</button>
    </div>
  )
}

export default CarsButton