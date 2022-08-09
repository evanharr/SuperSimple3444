import React, { useRef, useState } from "react"
import { Form } from "react-bootstrap"
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

 export default function EditDOB()
{
   
    const newEmail = useRef()
    const {updateUserEmail} = useAuth()
    const {getCurrentUser} = useAuth()

    const user = getCurrentUser()

    async function handleSubmit(e){
        
        try{
            await updateUserEmail(newEmail.current.value )
            
        
               
                .then(() => {
                    // Data saved successfully!
                    alert('Email Updated Successfully');
        
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
        <Box textAlign='center' sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems:"center"}}>
            <h1 className='boldText'>Edit Name</h1>
            
            <Form onSubmit={handleSubmit}>
          <Form.Group id="newEmail">
            <StyledTextField label="Email" variant="filled" type="newEmail" inputRef={newEmail} required></StyledTextField>
          </Form.Group>

          <ThemeProvider theme={defaultButton}>
         <Button sx={{ width: 400 }} variant="contained" id = "SubmitEmail" type = "submit">
           Update
         </Button>
       </ThemeProvider>
          </Form>

   
        </Box>
    );
}
