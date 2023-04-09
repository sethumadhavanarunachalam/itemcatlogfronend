import React, { useEffect, useState } from 'react'
import "./Mobile.css"
import MobileCard from "./MobileCard.js"
import AddFunction from '../../AddItems/AddMobileItem/AddFunction.js';
import CarsButton from '../BackButton/cars/Cars.js';
function Mobile() {
  const [MobileData,setMobileData] = useState([]);

  const getData = async()=> { 
      const result = await fetch("https://item-catlog-2o2a.vercel.app/mobile")
      const data = await result.json()
      console.log(data);
      setMobileData(data.Mobile)
}
useEffect(()=> {
  getData()
  
})
  return (
    <div className='itemcatlogoverall'>
       <div className='headbtn'>
                  <AddFunction/>
                  <CarsButton/>
                  </div>
        <h1  className='carstitle'> Mobile📱</h1>
        <marquee>Select your favourite car</marquee>
        <div className="movie-list">
             {MobileData?.map((mobile)=>(
              <div key={mobile.id}>
              <MobileCard  mobile={mobile} id={mobile.id}/>
             </div>
             ))}
             </div>
            </div>
  )
}


export default Mobile