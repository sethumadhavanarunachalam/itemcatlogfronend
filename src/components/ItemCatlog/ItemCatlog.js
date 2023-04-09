import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ItemCatlog.css"
import { useNavigate } from 'react-router-dom'

        
  




function ItemCatlog() {
    const [itemCatlog,setItemCatlog] = useState()
    const navigate = useNavigate();
   
  return (
    <div className='itemcatlogoverall'>
        <h1 className='h1item'>Itemcatlog</h1>
        <marquee>choose your catlog for see the product with details for example Name,Image,Rate,Details,demo video,etc.,</marquee>
        <div className='itemcomponentsall'>
        <div className='itemscomponents'>
      
             <Card className='itemcard'>
             <CardMedia className=''
               sx={{ height: 340 }}
               image="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx"
               title="green iguana"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                   Cars
               </Typography>
               <Typography variant="body2" color="text.secondary">
               Details about Cars
               </Typography>
             </CardContent>
             <CardActions>
               <Button size="small" className='btn.item' onClick={()=>navigate("/cars")}>Open</Button>
               {/* <Button size="small">Learn More</Button> */}
             </CardActions>
           </Card>
       
       
       </div>
        <div className='itemscomponents'>
      
             <Card className='itemcard'>
             <CardMedia className=''
               sx={{ height: 340 }}
               image="https://cdni.autocarindia.com/ExtraImages/20200917035143_Best-5-bikes-under-Rs-1.5-lakh.jpg"
               title="green iguana"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                   Bikes
               </Typography>
               <Typography variant="body2" color="text.secondary">
               Details about Bikes
               </Typography>
             </CardContent>
             <CardActions>
               <Button size="small" className='btn.item' onClick={()=>navigate("/Bikes")}>Open</Button>
               {/* <Button size="small">Learn More</Button> */}
             </CardActions>
           </Card>
       
       
       </div>
        <div className='itemscomponents'>
      
             <Card className='itemcard'>
             <CardMedia className=''
               sx={{ height: 340 }}
               image="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
               title="green iguana"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                   Laptops
               </Typography>
               <Typography variant="body2" color="text.secondary">
               Details about Laptops
               </Typography>
             </CardContent>
             <CardActions>
               <Button size="small" className='btn.item' onClick={()=>navigate("/Laptops")}>Open</Button>
               {/* <Button size="small">Learn More</Button> */}
             </CardActions>
           </Card>
       
       
       </div>
        <div className='itemscomponents'>
      
             <Card className='itemcard'>
             <CardMedia className=''
               sx={{ height: 340 }}
               image="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg"
               title="green iguana"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                   Mobiles
               </Typography>
               <Typography variant="body2" color="text.secondary">
               Details about Mobiles
               </Typography>
             </CardContent>
             <CardActions>
               <Button size="small" className='btn.item' onClick={()=>navigate("/mobiles")}>Open</Button>
               {/* <Button size="small">Learn More</Button> */}
             </CardActions>
           </Card>
       
       
       </div>
        <div className='itemscomponents'>
      
             <Card className='itemcard'>
             <CardMedia className=''
               sx={{ height: 340 }}
               image="https://rukminim1.flixcart.com/image/416/416/kzllrbk0/smartwatch/e/x/g/42-android-ios-t55-smartwatch-dme-yes-original-imagbkuyfqfwty2z.jpeg?q=70"
               title="green iguana"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                   Smart Watch
               </Typography>
               <Typography variant="body2" color="text.secondary">
               Details about SmartWatch
               </Typography>
             </CardContent>
             <CardActions>
               <Button size="small" className='btn.item' onClick={()=>navigate("/smartwatch")}>Open</Button>
               {/* <Button size="small">Learn More</Button> */}
             </CardActions>
           </Card>
       
           </div>
       </div>
        </div>
  )
}

export default ItemCatlog