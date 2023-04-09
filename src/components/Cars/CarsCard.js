import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import "./CarsCard.css"
import InfoIcon from '@mui/icons-material/Info';
function CarsCard({cars,id}) {
    
  return (
    <div> <Card className="movie-container">
    <CardContent>
    <CardMedia
    component="img"
    alt="green iguana"
    height="100%"
    width="100%"
    image={cars.image}
    className='carimg'
  />

  
  <h1 className='carname'>{cars.carname}</h1>
  <h2 className='carrate'>{cars.rate}</h2>
    
      
    
    </CardContent>
    <CardActions>
         <a href={cars.link} target='_blank'><IconButton className='carsbtn'><InfoIcon/></IconButton></a>
    </CardActions>
</Card></div>
  )
}

export default CarsCard

// <div className='itemcomponentsall'>
// <div className='itemscomponents'>

// {CarData?.map((cars)=>(
  
// <Card className='itemcard'>
// <CardActionArea>
// <CardMedia
// component="img"
// height="140"
// image={cars.image}
// alt="green iguana"
// />
// <CardContent>
// <Typography gutterBottom variant="h5" component="div">
// <h1>{cars.name}</h1>
// </Typography>
// <Typography variant="body2" color="text.secondary">
// <h1> CC:</h1>{cars.engine}
// </Typography>
// </CardContent>
// </CardActionArea>
// <CardActions>
// <Button size="small" color="primary"  className='btn.item'>
// Share
// </Button>
// </CardActions>
// </Card>
// ))}
// </div>
// </div>