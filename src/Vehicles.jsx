import React from 'react';
import { Box, Grid, Tabs, Typography } from '@mui/material';
import './Styles/style.css'
import {VehicleButton, BoldTab } from './Styles/MUIStyle.js'
import PropTypes from 'prop-types';
import TrimPic from './Images/Trim.png'
import { Link } from 'react-router-dom'

//Returns entry for each vehicle that goes on page
function VehicleEntry()
{
  var name = "Car Example";
  var price = "$100,000"

  return(
    <Grid item xs="auto">
    <Link style={{color: 'white'}} to="/car-configuration">
      <VehicleButton sx={{ display: 'grid'}} > 
        <img src={TrimPic} alt="Car button" longdesc= "Button to open build page of [CAR MODEL]" color= "white"></img>
        <p>Car Example</p>
        <p>$100,000 Starting MSRP*</p>
      </VehicleButton>
    </Link>
    </Grid>
  )
}

//Functions TabPanel and a11yProps were copied from MUI Tab example
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Vehicles(){
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <Box>
          <Tabs value={value} onChange={handleChange} sx={{backgroundColor: '#303030', p:1 }} centered>
            <BoldTab style={{color:'white'}} label="SEDANS" {...a11yProps(0)} />
            <BoldTab style={{color:'white'}} label="SUVS" {...a11yProps(1)} />
            <BoldTab style={{color:'white'}} label="CROSSOVERS" {...a11yProps(2)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <h1 className='boldText' style={{margin:'0px 50px'}}>SEDANS</h1>
            <Grid container 
            justifyContent="left"
            alignItems="center" 
            justify="center"
            spacing={20}
            style={{padding:50}}
            >
              <VehicleEntry/>
              <VehicleEntry/>
              <VehicleEntry/>
              <VehicleEntry/>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h1 className='boldText' style={{margin:'0px 50px'}}>SUVS</h1>
            <Grid container 
            justifyContent="left"
            alignItems="center" 
            justify="center"
            spacing={20}
            style={{padding:50}}
            >
              <VehicleEntry/>
              <VehicleEntry/>
             </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h1 className='boldText' style={{margin:'0px 50px'}}>CROSSOVERS</h1>
            <Grid container 
            justifyContent="left"
            alignItems="center" 
            justify="center"
            spacing={20}
            style={{padding:50}}
            >
              <VehicleEntry/>
             </Grid>
          </TabPanel>
        </Box>
    );
}