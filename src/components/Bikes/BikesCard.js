import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import "./BikesCard.css"
import InfoIcon from '@mui/icons-material/Info';
function BikesCard({bikes,id}) {
  return (
    <div> <Card className="movie-container">
    <CardContent>
    <CardMedia
    component="img"
    alt="green iguana"
    height="100%"
    width="100%"
    image={bikes.image}
    className='bikeimg'
  />

  
  <h1 className='carname'>{bikes.bikename}</h1>
  <h2 className='carrate'>{bikes.rate}</h2>
    
      
    
    </CardContent>
    <CardActions>
         <a href={bikes.link} target='_blank'><IconButton className='carsbtn'><InfoIcon/></IconButton></a>
    </CardActions>
</Card></div>
  )
}

export default BikesCard