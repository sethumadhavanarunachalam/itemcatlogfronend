import React from 'react'
import WelcomeDesign from './WelcomeDesign'
import "./Welcome.css"
import { useNavigate } from 'react-router-dom'

function Welcome() {
    const navigate = useNavigate();
  return (
    <div className='wel'>
      <WelcomeDesign/>
      <div className='welbtn'>
              <button className='btnwelcome' onClick={()=>navigate("/itemcatlog")}>Click</button>
      </div>

   

      </div>
  )
}

export default Welcome