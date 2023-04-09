import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import "./MobileCard.css"
import InfoIcon from '@mui/icons-material/Info';
function MobileCard({mobile,id}) {
  return (
    <div> <Card className="movie-container">
    <CardContent>
    <CardMedia
    component="img"
    alt="green iguana"
    height="100%"
    width="100%"
    image={mobile.image}
    className='mobileimg'
  />

  
  <h1 className='carname'>{mobile.mobilename}</h1>
  <h2 className='carrate'>{mobile.rate}</h2>
    
      
    
    </CardContent>
    <CardActions>
         <a href={mobile.link} target='_blank'><IconButton className='carsbtn'><InfoIcon/></IconButton></a>
    </CardActions>
</Card></div>
  )
}

export default MobileCard