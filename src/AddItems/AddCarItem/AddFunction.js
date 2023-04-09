import React from 'react'
import "./AddFunction.css"
import { useNavigate } from 'react-router-dom'
function AddFunction() {
    const navigate = useNavigate();
  return (
    <div>
       <button className='Addfunction' onClick={()=>navigate("/addinputcar")}>AddItems</button>
       

    </div>
  )
}

export default AddFunction