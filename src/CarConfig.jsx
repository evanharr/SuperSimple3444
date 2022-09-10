import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography, FormControlLabel, FormControl, AccordionSummary, AccordionDetails, RadioGroup, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import './Styles/style.css'
import { defaultButton, StyledAccordion, StyledRadio } from './Styles/MUIStyle.js'
import { ThemeProvider } from '@mui/material/styles';

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model  from './components/Mazda.jsx'
import Toyota from './components/LandCruiser.jsx'

import {getDatabase, set, ref , update, onValue, get,child, push} from "firebase/database";
import {database} from "./firebase"
import { useAuth } from "./AuthContext.js"
import { DstAlphaFactor } from 'three';
import { isValidFormat } from '@firebase/util';

//Change <Model> to <Toyota> to change to other model
function Scene(props) {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color={"white"}/>
      <OrbitControls maxDistance={18} minDistance={13}/>
      <Model color={props.color} wheelColor={props.wheelColor}/>
      
    </>
  )
}

export default function CarConfig()
{


  const {getCurrentUser} = useAuth()
  const user = getCurrentUser()

  const [carName, setCarName] = useState()
  const [carPrice,setCarPrice] = useState()
  
  const [modelColor, setColor] = useState("Red");
  const [wheelClr, setWheelColor] = useState("#a9a9a9");

  //get database information for car
  useEffect(() =>
    {
        const reference = ref(database,'/Cars/'+ '/Mazda/');
        get(reference).then((snapshot) =>
        {if(snapshot.exists())
          {
            setCarName(snapshot.val().Name)
            setCarPrice(snapshot.val().Price)
            
          }
         
        });
    })
    
    
  //save user configuration to database
    async function handleSubmitConfig(e){
        
      try{
        push(ref(database, '/users/' + user.uid + '/SavedCars/'), {
              
          Name:carName,
          Price:carPrice,
          Color:modelColor,
          WheelClr:wheelClr
  
         })
          .then(() => {
              // Data saved successfully!
              alert('Car Saved Successfully');
  
          })
          .catch((error) => {
              // The write failed...
              alert(error);
          });
      }
      catch{

      }
          
      
      
        
      
    }
    return(
    <Grid container
    direction="row"
    sx={{minWidth: "100%", height: '90vh'}}>
      {/*Left side of screen*/}
      <Grid item xs={8}>
        <Grid container
            direction="column"
            spacing= {0}
            sx={{minWidth: "100%", height: '90%'}}
            >
          
          <Grid item xs={1} >
            <Link style={{color: 'white'}} to="/vehicle-page">
              <IconButton aria-label="close" sx={{color: "white"}}>
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Grid>
          
          {/*3d Model*/}
          <Grid item xs={10}>
            <Canvas>
             <Suspense fallback={null}>
                 <Scene color={modelColor} wheelColor={wheelClr}/>
             </Suspense>
            </Canvas>
            <ThreeSixtyIcon fontSize='large' sx={{position: 'absolute', left: '35%', color:'white'}}/>
          </Grid>
        </Grid>
        

        <Grid item xs={1} sx={{color: 'white', whiteSpace: 'nowrap'}}>
          <Typography sx={{left:20, position: 'relative', display: "inline", fontWeight: 700, fontSize: 24}}>{carName}</Typography>
          <Typography sx={{left:20, position: 'relative', fontSize: 20}}>MSRP: ${carPrice}</Typography>
        </Grid>

      </Grid>
        
        {/*Right side of screen*/}
        <Grid item xs={4} sx={{backgroundColor: "#303030", }}
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        >
            <h1 className='boldText' style={{margin:'10px'}} xs={1}> 
                Configure Exterior
            </h1>

            {/*Color Select*/}
            <StyledAccordion sx={{width: "100%", border: 1}} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{color:'white', fontWeight: 700, fontSize: 20}}>Color</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <FormControl
                    aria-labelledby="Car-Color"           
                    sx={{color: "white" }}    
                    id='changing the color of the 3d car model'
                    for='changing the color of the 3d car model'
                    title='changing the color of the 3d car model'>
                  <RadioGroup
                    aria-labelledby="Car-Color"
                    defaultValue="red"
                    name="car-color-buttons"
                    onChange={(e) => setColor(e.target.value)}
                    id='changing the color of the 3d car model'
                    for='changing the color of the 3d car model'
                    title='changing the color of the 3d car model'
                  >
                    <FormControlLabel value="red" control={<StyledRadio />} label="Red" for='changing the car color to red' title='changing the car color to red' id='changing the car color to red'  />
                    <FormControlLabel value="silver" control={<StyledRadio />} label="Silver" for='changing the car color to silver' title='changing the car color to silver' id='changing the car color to silver'/>
                    <FormControlLabel value="#4682B4" control={<StyledRadio />} label="Blue" for='changing the car color to blue'  title='changing the car color to blue' id='changing the car color to blue'/>
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </StyledAccordion>
            
            {/*Wheel Color Select*/}
            <StyledAccordion sx={{width: "100%", border: 1, margin: 1}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:'white',}}/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{color:'white', fontWeight: 700, fontSize: 20}}>Wheels</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl
                  aria-labelledby="Wheel-Color"           
                  sx={{color: "white"}}    
                  id='changing the Wheel color of the 3d car model'
                  for='changing the Wheel color of the 3d car model'
                  title='changing the Wheel color of the 3d car model'>
                  <RadioGroup
                    aria-labelledby="Wheel-Color"
                    defaultValue="#a9a9a9"
                    name="tire-color-buttons"
                    onChange={(e) => setWheelColor(e.target.value)}
                    id='changing the Wheel color of the 3d car model'
                    for='changing the Wheel color of the 3d car model'
                    title='changing the Wheel color of the 3d car model'
                  >
                    <FormControlLabel value="#a9a9a9" control={<StyledRadio />} label="Silver" 
                    for='changing the car color to silver' title='changing the car color to silver' id='changing the car wheel to silver'/>
                    <FormControlLabel value="#696969" control={<StyledRadio />} label="Dark Gray" 
                    for='changing the car color to dark grey'  title='changing the car color to dark grey' id='changing the wheel color to dark grey'/>
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </StyledAccordion>

            <ThemeProvider theme={defaultButton}>

              <Button variant="contained" sx={{width: "100%", marginTop: 1}} onClick= {() =>{handleSubmitConfig()}}>
                Save Configuration
              </Button> 
              <Link style={{color: 'white', width: "100%"}} to="/cart">
                <Button  variant="contained" sx={{marginTop: 1 ,width: "100%"}}>
                  Cart
                  <ArrowForwardIosIcon />
                </Button>
              </Link>
            </ThemeProvider>
        </Grid>
    </Grid>
    )
}
