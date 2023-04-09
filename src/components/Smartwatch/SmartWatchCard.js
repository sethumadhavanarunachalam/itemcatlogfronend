import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import "./SmartWatchCard.css"
import InfoIcon from '@mui/icons-material/Info';
function SmartWatchCard({watch,id}) {
  return (
    <div> <Card className="movie-container">
    <CardContent>
    <CardMedia
    component="img"
    alt="green iguana"
    height="100%"
    image={watch.image}
  />

  
  <h1 className='carname'>{watch.watchname}</h1>
  <h2 className='carrate'>{watch.rate}</h2>
    
      
    
    </CardContent>
    <CardActions>
         <a href={watch.link} target='_blank'><IconButton className='carsbtn'><InfoIcon/></IconButton></a>
    </CardActions>
</Card></div>
  )
}

export default SmartWatchCard