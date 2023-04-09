import React, { useEffect, useState } from 'react'
import "./Laptop.css"
import LaptopCard from './LaptopCard.js';
import AddFunction from '../../AddItems/AddLaptopItem/AddFunction.js';
import CarsButton from '../BackButton/cars/Cars.js';
function Laptop() {
  const [LaptopData,setLaptopData] = useState([]);

  const getData = async()=> { 
      const result = await fetch("https://item-catlog-2o2a.vercel.app/laptop")
      const data = await result.json()
      console.log(data);
      setLaptopData(data.Laptop)
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
        <h1  className='carstitle'> Laptops💻</h1>
        <marquee>Select your favourite car</marquee>
        <div className="movie-list">
             {LaptopData?.map((laptop)=>(
              <div key={laptop.id}>
              <LaptopCard  laptop={laptop} id={laptop.id}/>
             </div>
             ))}
             </div>
            </div>
  )
}

export default Laptop