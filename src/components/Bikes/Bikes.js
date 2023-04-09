import React, { useEffect, useState } from 'react'
import "./Bikes.css"
import BikesCard from './BikesCard.js';
import AddFunction from "../../AddItems/AddBikeItem/AddFunction.js"
import CarsButton from '../BackButton/cars/Cars.js';
function Bikes() {
  const [BikeData,setBikeData] = useState([]);

  const getData = async()=> { 
      const result = await fetch("https://item-catlog-2o2a.vercel.app/bikes")
      const data = await result.json()
      console.log(data);
      setBikeData(data.Bikes)
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
        <h1  className='carstitle'> Bikes🚲</h1>
        <marquee>Select your favourite car</marquee>
        <div className="movie-list">
             {BikeData?.map((bikes)=>(
              <div key={bikes.id}>
              <BikesCard  bikes={bikes} id={bikes.id}/>
             </div>
             ))}
             </div>
            </div>
  )
}

export default Bikes