import React from 'react';
import { Box, Grid } from '@mui/material';
import './Styles/style.css'
import { BoldButton } from './Styles/MUIStyle.js'

export default function CarConfig()
{
    return(
    <Grid container
    direction="row">
        <Grid item xs={8}>
            xs=8
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
        </Grid>
    </Grid>
    )
}
