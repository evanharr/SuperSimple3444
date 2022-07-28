import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Styles/style.css'
import { BoldButton, defaultButton, StyledAccordion } from './Styles/MUIStyle.js'
import { ThemeProvider } from '@mui/material/styles';

import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import jeep from './3d/jeep.glb'
import { OrbitControls } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, jeep);
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <OrbitControls />
      <mesh>
        <Model />
      </mesh>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Scene></Scene>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default function CarConfig()
{
    return(
    <Grid container
    direction="row">
        <Grid item xs={8}>
            <Canvas>
              <Suspense fallback={null}>
                <Scene></Scene>
              </Suspense>
            </Canvas>
        </Grid>
        
        <Grid item xs={4} sx={{backgroundColor: "#303030", height:'100vh'}}
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        >
            <h1 className='boldText' style={{margin:'10px'}} xs={1}> 
                Configure Exterior
            </h1>

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
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Red"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="red" control={<Radio />} label="Red" />
                    <FormControlLabel value="green" control={<Radio />} label="Green" />
                    <FormControlLabel value="blue" control={<Radio />} label="Blue" />
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
