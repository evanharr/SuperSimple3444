import React from "react";
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function Account(){

    return(


        <Box
            sx={{
                flexGrow: '1',
                position: 'fixed',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                maxHeight: 832,
                backgroundColor: '#424242',
            }}
        >
            <Link to="/" style={{color: 'white'}}><ArrowBackIcon /></Link>
            
            <Grid container
                direction ='column'
                justifyContent='center'
                alignItems='center'
                >
                
                <Grid item paddingTop='20px'>
                   <Typography variant="h4" color='white'>Account Information</Typography>
                </Grid>
                
                
                <Grid paddingTop='010px'>
                    <Paper sx={{p: '10px',borderColor: 'white',background:'#424242',color:'white'}} variant="outlined" display='flex'>
                        
                        <Grid container direction ='column'><Typography>Name:</Typography><Typography>Person's Name</Typography><Button variant='contained' color='success' style={{alignItems:'flex-end'}}>Edit</Button></Grid>
                    </Paper>
                    <Paper sx={{p: '10px',borderColor: 'white',background:'#424242',color:'white'}} variant="outlined">
                       
                       <Grid container direction ='column'><Typography>Email Address:</Typography><Grid item><Typography>person@emailaddress.com</Typography></Grid><Button variant='contained' color='success'style={{alignItems:'flex-end'}}>Edit</Button></Grid>
                    </Paper>
                    <Paper sx={{p: '10px',borderColor: 'white',background:'#424242',color:'white'}} variant="outlined" display='flex'>
                       <Typography>Address:</Typography>
                       <Grid container direction ='column'> <Typography>444 Address road, Address City, TX</Typography><Button variant='contained' color='success'style={{alignItems:'flex-end'}}>Edit</Button></Grid>
                    </Paper>
                    <Paper sx={{p: '10px',borderColor: 'white',background:'#424242',color:'white'}} variant="outlined" display='flex'>
                       <Grid container direction ='column'> <Typography>Date of Birth:</Typography><Typography>1/1/2001</Typography><Button variant='contained' color='success'style={{alignItems:'flex-end'}}>Edit</Button> </Grid>
                    </Paper>
                    <Paper sx={{p: '10px',borderColor: 'white',background:'#424242',color:'white'}} variant="outlined" display='flex'>
                    <Grid container direction ='column'>
                       <Typography>Password:</Typography>
                       <Typography>******</Typography><Button variant='contained' color='success'style={{alignItems:'flex-end'}}>Edit</Button></Grid>
                    </Paper>
                </Grid>
                <Grid item paddingTop='20px'>
                   <Typography variant="h4" color='white'>Payment Information</Typography>
                </Grid>
                <Button style={{color:'#00853E'}}>Edit Payment Information</Button>
                
                <Grid item paddingTop='20px'>
                   <Typography variant="h4" color='white'>Vehicle Configuration</Typography>
                   </Grid>
                   <Button style={{color:'#00853E'}}>View Saved Vehicle Configurations</Button>
               
                


            </Grid>
        </Box>      
    );
}

export default Account