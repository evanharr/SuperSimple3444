import React from 'react';
import { Box, Button, Grid, Paper } from '@mui/material';
import './Styles/style.css'
import { defaultButton, BoldButton } from './Styles/MUIStyle.js'
import { ThemeProvider } from '@mui/material/styles';


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

        <Grid container 
        justifyContent="center"
        alignItems="center" 
        spacing={10}
        >
          <Grid item  Paper xs={4}>
            <Paper>1</Paper>
          </Grid>
          <Grid item  Paper xs={4}>
            <Paper>2</Paper>
          </Grid>
          <Grid item Paper xs={4}>
            <Paper>3</Paper>
          </Grid>
          <Grid item Paper xs={4}>
            <Paper>4</Paper>
          </Grid>
        </Grid>
        </Box>
    )
}