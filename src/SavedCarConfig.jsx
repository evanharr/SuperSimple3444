import React, { useState, useEffect, Fragment} from 'react';
import { Grid, Button, Typography, FormControlLabel, FormControl, AccordionSummary, AccordionDetails, RadioGroup, IconButton } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';

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
import Model  from './components/Model.jsx'

//import Auth and Database
import {getDatabase, set, ref, update, onValue, get,child, push} from "firebase/database";
import {database} from "./firebase"
import { useAuth } from "./AuthContext.js"
import { createRenderer } from 'react-dom/test-utils';
import _ from 'lodash'

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
  const [modelColor, setColor] = useState("Red");
  const [wheelClr, setWheelColor] = useState("#a9a9a9");

  const {getCurrentUser} = useAuth()
  const user = getCurrentUser()

  const [carName, setCarName] = useState()
  const [carPrice,setCarPrice] = useState()

  const[hasSavedCar,setHasSavedCar] = useState(false)
  const [arr,setArr] = useState()
  var carNameList = [];
  var carPriceList = [];
  var carColorList = [];
  var carWheelColorList = [];
  const [numItems,setNumItems] = useState()
// get saved configuration
  useEffect(() =>
    {
        const reference = ref(database,'/users/' + user.uid + '/SavedCars/');
        get(reference).then((snapshot) =>
        {if(snapshot.exists())
          {
            snapshot.forEach(function(item)
            {
                console.log("here",item.val())
                
                    console.log("child",item.val().Name)
                    carNameList.push(item.val().Name)
                    carPriceList.push(item.val().Price)
                    carColorList.push(item.val().Color)
                    carWheelColorList.push(item.val().WheelClr)
                    setNumItems(carNameList.length)

             });
            
            setHasSavedCar(true)
            setCarName(snapshot.val().Name)
            setCarPrice(snapshot.val().Price)
            setColor(snapshot.val().Color)
            setWheelColor(snapshot.val().WheelClr)
            
            console.log("CarNameList: ",carNameList)
            console.log("numItems", numItems)
            console.log("CarColorList: ",carColorList[1])
          }
         
        });
    })

    const getCarInfo = () =>
    {
       
    }
    
    return (
        
        <div>
             <Grid container
    direction="row"
    sx={{minWidth: "100%", height: '5vh'}}>
        
       
      {/*Left side of screen*/}
      <Grid item xs={1}>
        <Grid container
            direction="column"
            spacing= {20}
            sx={{minWidth: "100%", height: '0%'}}
            >
                <Grid item xs={1} >
            <Link style={{color: 'white'}} to="/account-info">
              <IconButton aria-label="close" sx={{color: "white"}}>
                
                <ArrowBackIcon >
                    Return to Account
                    </ArrowBackIcon>
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs ={1}>
          <h1 className='boldText' style={{margin:'6px'}} xs={1}> 
                Saved Configurations
            </h1>
          </Grid>

        </Grid>
        </Grid>
        </Grid>
        

            {/*iterate through number of items in car*/}
            {hasSavedCar && ( 
            <div>
            {_.times(numItems,(carNameList) =>
             <Grid container
             direction="row"
             sx={{minWidth: "100%", height: '30vh'}}>
                 
         
               {/*Left side of screen*/}
               <Grid item xs={8} key ={carNameList}>
                 <Grid container
                     direction="column"
                     spacing= {0}
                     sx={{minWidth: "100%", height: '30%'}}
                     >
                   
                   
                   
                   
                   {/*3d Model*/}
                   <Grid item xs={5}>
                     <Canvas>
                        
                      <Suspense fallback={null}>
                          <Scene color={carColorList[numItems]} wheelColor={carWheelColorList.at(numItems)}/>
                      </Suspense>
                     </Canvas>
                     <ThreeSixtyIcon fontSize='large' sx={{position: 'absolute', left: '35%', color:'white'}}/>
                   </Grid>
                 </Grid>
                 
         
                 <Grid item xs={1} sx={{color: 'white', whiteSpace: 'nowrap'}}>
                   <Typography sx={{left:20, position: 'relative', display: "inline", fontWeight: 700, fontSize: 24}}>{carNameList}</Typography>
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
                     <h1 className='boldText' style={{margin:'5px'}} xs={1}> 
                       {carNameList}
                     </h1>
         
                     
         
                     <ThemeProvider theme={defaultButton}>
                       <Link style={{color: 'white', width: "100%"}} to="/cart">
                         <Button  variant="contained" sx={{marginTop: 1 ,width: "100%"}}>
                           Add to Cart
                           <ArrowForwardIosIcon />
                         </Button>
                       </Link>
                     </ThemeProvider>
                 </Grid>
             </Grid>
            )}
            </div>
            )}
        
        </div>
        
        

       
    )
}