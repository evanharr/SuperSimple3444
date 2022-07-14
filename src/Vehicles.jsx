import {React} from 'react';
import { Box, Grid, Tabs, Tab } from '@mui/material';
import './Styles/style.css'
import {VehicleButton } from './Styles/MUIStyle.js'
import TrimPic from './Images/Trim.png'
import { Link } from 'react-router-dom'


export default function Vehicles(){
    return(
        <Box>
        <Tabs sx={{backgroundColor: '#303030', p:1 }} centered>
                <Tab style={{color:'white'}} className='boldText' size="large" label="SEDANS" value="1"></Tab>
                <Tab style={{color:'white'}} className='boldText' size="large" label="SUVS" value="2"></Tab>
                <Tab style={{color:'white'}} className='boldText' size="large" label="CROSSOVERS" value="3"></Tab>
        </Tabs>

        <h1 className='boldText' style={{margin:'10px 10px 10px 50px'}}>SEDANS</h1>

        <Grid container 
        justifyContent="center"
        alignItems="center" 
        justify="center"
        spacing={10}
        style={{padding:50}}
        >
          <Grid item xs={4}>
          <Link style={{color: 'white'}} to="/car-configuration">
            <VehicleButton sx={{ display: 'grid' }}> 
              <img src={TrimPic}></img>
              <p>Car Example</p>
              <p> $100,000 Starting MSRP*</p>
            </VehicleButton>
            </Link>
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