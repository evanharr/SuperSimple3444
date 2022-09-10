import {React,} from 'react';
import Background from './Images/Background.png'
import {Box, Button} from '@mui/material';
import { Link } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { defaultButton } from './Styles/MUIStyle';
import './Styles/style.css'

function Home(){
   
    return(
    
    <div style={{background: `url(${Background})`, height: '90vh', backgroundSize:'cover'}} alt = 'Blue toyota camry driving on road in desert area'>
        <Box
        sx={{backgroundColor: '#30303090', position: 'absolute',
        width: '20%', height: '20%',
        left: '10%', top:'15%'}}
        >
            <h1 className='boldText' style={{left:'15%', position: 'absolute'}}>
                Brand new car
            </h1>
            <ThemeProvider theme={defaultButton}>
              <Link style={{color: 'white', width: "100%", top:'60%', left:'15%', position: 'absolute'}} to="/car-configuration">
                <Button  variant="contained" sx={{width: "50%", fontSize: 16, fontWeight: '700', textTransform: 'none',}}>
                  Build Now
                </Button>
              </Link>
            </ThemeProvider>
        </Box>
    </div>
    )
}
export default Home