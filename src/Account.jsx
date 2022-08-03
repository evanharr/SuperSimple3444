import React, { useRef, useState, Component, useEffect } from "react"
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
import { StyledPaper } from './Styles/MUIStyle.js'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {getDatabase, set, ref, update, onValue, get,child, push} from "firebase/database";
import {database} from "./firebase"
import { useAuth } from "./AuthContext.js"




function Account (){
    const {getCurrentUser} = useAuth()
    const user = getCurrentUser()
    const email = user.email
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [address, setAddress] = useState()
    const [DOB, setDOB] = useState()
    
    
    
    
   
   //getting snapshot of data from firebase database
    useEffect(() =>
    {
        const reference = ref(database,'/users/' + user.uid);
        get(reference).then((snapshot) =>
        {if(snapshot.exists())
          {
            
            setFirstName(snapshot.val().firstName)
            setLastName (snapshot.val().lastName)
            setAddress (snapshot.val().address)
            setDOB(snapshot.val().DOB)
          }
         
        });
    })
    
    
   


    return(


        <Box
            sx={{
                flexGrow: '1',
                position: 'absolute',
                top: '80%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                maxHeight: 832,
                backgroundColor: '#424242',
            }}
        >
            <Link to="/SuperSimple3444" style={{color: 'white'}}><ArrowBackIcon /></Link>
            
            <Grid container
                direction ='column'
                justifyContent='center'
                alignItems='center'
                >
                
                <Grid item paddingTop='20px'>
                   <Typography variant="h4" color='white'>Account Information</Typography>
                </Grid>
                
                
                <Grid paddingTop='10px'>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={28.5} alignItems='center' justifyContent='flex-start'>
                           <p>Name:<br></br>
                           {firstName} &nbsp;
                           {lastName}
                           
                           </p>
                           
                           
                           
                            <Button variant='contained' size='small' style={{background:"#00853E"}}>Edit</Button>
                            </Stack> 
                    </StyledPaper>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={17.5} alignItems='center'justifyContent='flex-start'>
                            <p>Email Address:<br></br>{email}</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}}>Edit</Button>
                            </Stack> 
                    </StyledPaper>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={10} alignItems='center'justifyContent='flex-start'>
                            <p>Address<br></br>{address}</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}}>Edit</Button>
                            </Stack> 
                    </StyledPaper>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={30.5} alignItems='center'justifyContent='flex-start'>
                            <p>Date of Birth<br></br>{DOB}</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}}>Edit</Button>
                            </Stack> 
                    </StyledPaper>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={32.4} alignItems='center'justifyContent='flex-start'>
                            <p>Password:<br></br>******</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}}>Edit</Button>
                            </Stack> 
                    </StyledPaper>
                    
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







