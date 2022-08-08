import React, { useRef, useState } from "react"
import { Form} from "react-bootstrap"
import { useAuth } from "./AuthContext.js"
import './Styles/style.css'
import { defaultButton, StyledTextField } from './Styles/MUIStyle.js'
import { Link, useNavigate, useHistory } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { IconButton, InputAdornment, Box, Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import { StyledPaper } from './Styles/MUIStyle.js'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {getDatabase, set, ref, update} from "firebase/database";
import {database} from "./firebase"

 export default function AccountEdit()
{
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const address = useRef()

    const firstName = useRef()
    const lastName = useRef()
    const DOB = useRef()
    const {getCurrentUser} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(passwordRef.current.value)
        console.log(passwordConfirmRef.current.value)
        
    
        try {
          
    
          const user =getCurrentUser()
          
          set(ref(database, 'users/' + user.uid), {
            email: emailRef.current.value,
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            DOB: DOB.current.value,
            address: address.current.value
    
           })
            .then(() => {
                // Data saved successfully!
                alert('user created successfully');
    
            })
            .catch((error) => {
                // The write failed...
                alert(error);
            });
     
        } catch {
          
          
          
        }
    
        
        
      }

    return(
            <Box textAlign='center' sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems:"center"}}>
            <h1 className='registerInfo'>Register</h1>
            
            <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <StyledTextField label="Email" variant="filled" type="email" inputRef={emailRef} required></StyledTextField>
          </Form.Group>
    
          <Form.Group id = "firstName">
            <StyledTextField label="First Name" variant="filled" type="firstName" inputRef={firstName} required></StyledTextField>
          </Form.Group>
          
          <Form.Group id = "lastName">
           <StyledTextField label="Last Name" variant="filled" type="lastName" inputRef={lastName} required></StyledTextField>
          </Form.Group>
    
          <Form.Group id = "Address">
           <StyledTextField label="Address" variant="filled" type="Address" inputRef={address} required></StyledTextField>
          </Form.Group>
    
          <Form.Group id = "DOB">
           <StyledTextField label="Date of Birth" variant="filled" type="DOB" inputRef={DOB} required></StyledTextField>
          </Form.Group>
    
         
          <ThemeProvider theme={defaultButton}>
             <Button   sx={{ width: 400 }} variant="contained" id = "register" type = "submit">
               Sign Up
             </Button>
           </ThemeProvider>
          
        </Form>
    
       
       </Box>
    );
}
