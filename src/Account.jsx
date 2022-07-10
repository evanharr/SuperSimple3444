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
import Stack from '@mui/material/Stack';

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
                    <Paper sx={{p: '10px',borderColor: 'white',background:'#424242',color:'white'}} variant='outlined'>
                           <Stack direction="row" spacing={27.5} alignItems='center' justifyContent='flex-start'>
                            <p>Name: <br></br>Person's Name</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}}>Edit</Button>
                            </Stack> 
                    </Paper>
                    <Paper sx={{p: '10px',borderColor: 'white',background:'#424242',color:'white'}} variant='outlined'>
                           <Stack direction="row" spacing={17.5} alignItems='center'justifyContent='flex-start'>
                            <p>Email Address:<br></br>person@emailaddress.com</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}}>Edit</Button>
                            </Stack> 
                    </Paper>
                    <Paper sx={{p: '10px',borderColor: 'white',background:'#424242',color:'white'}} variant='outlined'>
                           <Stack direction="row" spacing={10} alignItems='center'justifyContent='flex-start'>
                            <p>Address<br></br>444 Address road, Address City, TX</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}}>Edit</Button>
                            </Stack> 
                    </Paper>
                    <Paper sx={{p: '10px',borderColor: 'white',background:'#424242',color:'white'}} variant='outlined'>
                           <Stack direction="row" spacing={28.5} alignItems='center'justifyContent='flex-start'>
                            <p>Date of Birth<br></br>1/1/2001</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}}>Edit</Button>
                            </Stack> 
                    </Paper>
                    <Paper sx={{p: '10px',borderColor: 'white',background:'#424242',color:'white'}} variant='outlined'>
                           <Stack direction="row" spacing={31} alignItems='center'justifyContent='flex-start'>
                            <p>Password:<br></br>******</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}}>Edit</Button>
                            </Stack> 
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