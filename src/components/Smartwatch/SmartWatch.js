import React, { useEffect, useState } from 'react'
import SmartWatchCard from './SmartWatchCard.js';
import "./SmartWatch.css"
import AddFunction from '../../AddItems/AddSmartWatchItem/AddFunction.js';
import CarsButton from '../BackButton/cars/Cars.js';
function SmartWatch() {
  const [SmartWatchData,setSmartWatchData] = useState([]);

  const getData = async()=> { 
      const result = await fetch("https://item-catlog-2o2a.vercel.app/smartwatch")
      const data = await result.json()
      console.log(data);
      setSmartWatchData(data.Smartwatch)
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
        <h1  className='carstitle'> SmartWatch⌚</h1>
        <marquee>Select your favourite car</marquee>
        <div className="movie-list">
             {SmartWatchData?.map((watch)=>(
              <div key={watch.id}>
              <SmartWatchCard  watch={watch} id={watch.id}/>
             </div>
             ))}
             </div>
            </div>
  )
}

export default SmartWatch