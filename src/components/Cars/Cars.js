import React, { useEffect, useState } from 'react'
import "./cars.css"
import CarsCard from './CarsCard.js';
import AddFunction from '../../AddItems/AddCarItem/AddFunction.js';
import CarsButton from '../BackButton/cars/Cars.js';

const data = [
    {
        "_id": "642c5a98c661bafc6fbd73de",
        "carname": "Maruti Brezza",
        "rate": "Rs.8.19 - 14.04 Lakh",
        "seating capacity": "5",
        "fuel": "petrol/CNG",
        "milege": "19.8 - 20.15 kmpl",
        "engine": "1462cc",
        "image": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Brezza/8679/1675859019982/front-left-side-47.jpg?tr=w-456"
    },
    {
        "_id": "642d135b367caabf141fed4a",
        "carname": "Kia Seltos",
        "rate": "Rs. 9.89 Lakh",
        "seating capacity": "5",
        "fuel": "petrol/Diesel",
        "milege": "16.1 - 20 kmpl",
        "engine": "1353 to 1497cc",
        "image": "https://static.toiimg.com/thumb/resizemode-4,msid-76808797,imgsize-200,width-640/76808797.jpg"
    },
    {
        "_id": "642d135b367caabf141fed4b",
        "carname": "Maruti Suzuki Swift",
        "rate": "Rs. 5.19 Lakh",
        "seating capacity": "5",
        "fuel": "petrol",
        "milege": "21.21 kmpl",
        "engine": "1197 cc",
        "image": "https://static.toiimg.com/thumb/resizemode-4,msid-76213058,imgsize-200,width-640/76213058.jpg"
    },
    {
        "_id": "642d135b367caabf141fed4c",
        "carname": "Hyundai Creta",
        "rate": "Rs. 9.99 Lakh",
        "seating capacity": "5",
        "fuel": "petrol/Diesel",
        "milege": "21.04 kmpl",
        "engine": "1497 cc",
        "image": "https://static.toiimg.com/thumb/resizemode-4,msid-76212146,imgsize-200,width-640/76212146.jpg"
    }
]
function Cars() {
     
    const [CarData,setCarData] = useState([]);

    const getData = async()=> { 
        const result = await fetch("https://item-catlog-2o2a.vercel.app/cars")
        const data = await result.json()
        console.log(data);
        setCarData(data.Cars)
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
        <h1  className='carstitle'> Cars🚘</h1>
        <marquee>Select your favourite car</marquee>
        <div className="movie-list">
             {CarData?.map((cars)=>(
              <div key={cars.id}>
              <CarsCard  cars={cars} id={cars.id}/>
             </div>
             ))}
             </div>
            </div>
      
   
  )
}

{/* <Card sx={{ maxWidth: 345 }}>
   <CardActionArea>
     <CardMedia
       component="img"
       height="140"
       image="/static/images/cards/contemplative-reptile.jpg"
       alt="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         Lizard
       </Typography>
       <Typography variant="body2" color="text.secondary">
         Lizards are a widespread group of squamate reptiles, with over 6,000
         species, ranging across all continents except Antarctica
       </Typography>
     </CardContent>
   </CardActionArea>
   <CardActions>
     <Button size="small" color="primary">
       Share
     </Button>
   </CardActions>
 </Card> */}

export default Cars