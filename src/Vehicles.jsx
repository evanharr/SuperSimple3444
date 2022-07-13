import React from 'react';
import { Box, Grid } from '@mui/material';
import './Styles/style.css'
import { BoldButton, VehicleButton } from './Styles/MUIStyle.js'
import TrimPic from './Images/Trim.png'


export default function Vehicles(){
    return(
        <Box>
        <Grid sx={{backgroundColor: '#303030', p:1 }} container direction="row"
        justifyContent="center"
        alignItems="center">
                <BoldButton style={{color:'white'}} className='boldText' size="large">SEDANS</BoldButton>
                <BoldButton style={{color:'white'}} className='boldText' size="large">SUVS</BoldButton>
                <BoldButton style={{color:'white'}} className='boldText' size="large">CROSSOVERS</BoldButton>
        </Grid>

        <h1 className='boldText' style={{margin:'10px 10px 10px 50px'}}>SEDANS</h1>

        <Grid container 
        justifyContent="center"
        alignItems="center" 
        justify="center"
        spacing={10}
        style={{padding:50}}
        >
          <Grid item xs={4}>
            <VehicleButton sx={{ display: 'grid' }}> 
              <img src={TrimPic}></img>
              <p>Car Example</p>
              <p> $100,000 Starting MSRP*</p>
            </VehicleButton>
          </Grid>
          <Grid item xs={4}>
            <VehicleButton sx={{ display: 'grid' }}> 
              <img src={TrimPic}></img>
              <p>Car Example</p>
              <p> $100,000 Starting MSRP*</p>
            </VehicleButton>
          </Grid>
          <Grid item xs={4}>
            <VehicleButton sx={{ display: 'grid' }}> 
              <img src={TrimPic}></img>
              <p>Car Example</p>
              <p> $100,000 Starting MSRP*</p>
            </VehicleButton>
          </Grid>
          <Grid item xs={4}>
            <VehicleButton sx={{ display: 'grid' }}> 
              <img src={TrimPic}></img>
              <p>Car Example</p>
              <p> $100,000 Starting MSRP*</p>
            </VehicleButton>
          </Grid>
        </Grid>
        </Box>
    )
}