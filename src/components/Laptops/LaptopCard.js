import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import "./LaptopCard.css"
import InfoIcon from '@mui/icons-material/Info';
function LaptopCard({laptop,id}) {
  return (
    <div> <Card className="movie-container">
    <CardContent>
    <CardMedia
    component="img"
    alt="green iguana"
    height="100%"
    image={laptop.image}
    className='lapimg'
  />

  
  <h1 className='carname'>{laptop.lapname}</h1>
  <h2 className='carrate'>{laptop.rate}</h2>
    
      
    
    </CardContent>
    <CardActions>
         <a href={laptop.link} target='_blank'><IconButton className='carsbtn'><InfoIcon/></IconButton></a>
    </CardActions>
</Card></div>
  )
}

export default LaptopCard