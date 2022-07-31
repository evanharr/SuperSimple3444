import React, { useState } from 'react';
import { Grid, Button, Typography, FormControlLabel, FormControl, FormLabel, AccordionSummary, AccordionDetails, Radio, RadioGroup, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Styles/style.css'
import { BoldButton, defaultButton, StyledAccordion } from './Styles/MUIStyle.js'
import { ThemeProvider } from '@mui/material/styles';

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model  from './components/Model.jsx'


function Scene(props) {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color={"white"}/>
      <OrbitControls maxDistance={18} minDistance={13}/>
      <Model color={props.color}/>
    </>
  )
}

export default function CarConfig()
{
  const [modelColor, setColor] = useState("Red")
    return(
    <Grid container
    direction="row">
      {/*Left side of screen*/}
      <Grid item xs={8}>
        <Grid container
            direction="column"
            spacing= {0}
            sx={{height:'100vh', p:0}}>
          
          <Grid item xs={0} >
            <Link style={{color: 'white'}} to="/vehicle-page">
              <IconButton aria-label="close" sx={{color: "white"}}>
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Grid>
          
          <Grid item xs={8}>
            <Canvas>
             <Suspense fallback={null}>
                 <Scene color={modelColor}/>
             </Suspense>
            </Canvas>
          </Grid>
        </Grid>
      </Grid>
        
        {/*Right side of screen*/}
        <Grid item xs={4} sx={{backgroundColor: "#303030", height:'100vh'}}
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        >
            <h1 className='boldText' style={{margin:'10px'}} xs={1}> 
                Configure Exterior
            </h1>

            {/*Color Select*/}
            <StyledAccordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{color:'white'}}>Color</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <FormControl>
                  <RadioGroup
                    aria-labelledby="Car-Color"
                    defaultValue="red"
                    name="car-color-buttons"
                    onChange={(e) => setColor(e.target.value)}
                    for='changing the color of the 3d car model'
                  >
                    <FormControlLabel value="red" control={<Radio />} label="Red" for='changing the car color to red' title='changing the car color to red' id='changing the car color to red'  />
                    <FormControlLabel value="silver" control={<Radio />} label="Silver" for='changing the car color to silver' title='changing the car color to silver' id='changing the car color to silver'/>
                    <FormControlLabel value="#4682B4" control={<Radio />} label="Blue" for='changing the car color to blue'  title='changing the car color to blue' id='changing the car color to blue'/>
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >

                <Typography style={{color:'white'}}>Wheels</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>


            <BoldButton variant="contained">
                Back
                <ArrowForwardIosIcon />
            </BoldButton>
            <ThemeProvider theme={defaultButton}>
                <Button  variant="contained">
                  Next/Interior
                  <ArrowForwardIosIcon />
                </Button>
            </ThemeProvider>
        </Grid>
    </Grid>
    )
}
