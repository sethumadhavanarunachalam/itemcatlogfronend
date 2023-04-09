import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./AddInput.css"
import TextField from '@mui/material/TextField';
    function AddInput({movieList,setMovieList}){
        const navigate = useNavigate();
        
        const [name,setName]=useState("");
        const [posterLink,setPosterLink]=useState("");
        const [rate,setRate]=useState("");
        const [link,setNavigatelink]=useState("");
        
        const addItem = () => {
          const newItem = {
            "carname":name,
            "image":posterLink,
            "rate":rate,
            "link":link
          };
          //  setMovieList([...movieList,newMovie])
          fetch("https://item-catlog-2o2a.vercel.app/cars",{
            method:"POST",
            body: JSON.stringify(newItem),
            headers:{"Content-type":"application/json"},
          }).then(() => navigate("/cars"))
          
          
          
        }
        return<div className="input-box">
           <button className='Backbtn' onClick={()=>navigate(-1)}>Back</button>
          <div className='inputback'>
          <div className='inputsty'>
            <TextField
          required
          id="outlined-required"
          label="carname"
          defaultValue="Enter the details"
          onChange={(event)=> setName(event.target.value)}
        />
            <TextField
          required
          id="outlined-required"
          label="imagelink"
          defaultValue="Enter the details"
          onChange={(event)=> setPosterLink(event.target.value)}
        />
            <TextField
          required
          id="outlined-required"
          label="rate"
          defaultValue="Enter the details"
          onChange={(event)=> setRate(event.target.value)}
        />
            <TextField
          required
          id="outlined-required"
          label="navigate link"
          defaultValue="Enter the details"
          onChange={(event)=> setNavigatelink(event.target.value)}
        />
        
          <button className='inputbtn' onClick={addItem}>additem</button>
          </div>
          </div>
        </div>;
      }

export default AddInput