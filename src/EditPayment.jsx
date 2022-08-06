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

 export default function EditPayment()
{
   
    const newCardNumber = useRef()
    const newCardName = useRef()
    const newExpDate = useRef()
    
    
    const {getCurrentUser} = useAuth()
    const user = getCurrentUser()

    async function handleSubmit(e){
        
        try{
            update(ref(database, 'users/' + user.uid + '/paymentInfo/'), {
                
                cardNumber:newCardNumber.current.value,
                cardName:newCardName.current.value,
                expDate:newExpDate.current.value

        
               })
                .then(() => {
                    // Data saved successfully!
                    alert('Payment Info Updated Successfully');
        
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
            <h1 className='Edit'>Edit Payment</h1>
            
            <Form onSubmit={handleSubmit}>
          <Form.Group id="newCardNumber">
            <StyledTextField label="Card Number" variant="filled" type="newCardNumber" inputRef={newCardNumber} required></StyledTextField>
          </Form.Group>

          <Form.Group id="newCardName">
            <StyledTextField label="Card Name" variant="filled" type="newCardName" inputRef={newCardName} required></StyledTextField>
          </Form.Group>

          <Form.Group id="newExpDate">
            <StyledTextField label="Expiration Date" variant="filled" type="newExpDate" inputRef={newExpDate} required></StyledTextField>
          </Form.Group>

          <ThemeProvider theme={defaultButton}>
         <Button sx={{ width: 400 }} variant="contained" id = "SubmitPaymentInfo" type = "submit">
           Update
         </Button>
       </ThemeProvider>
          </Form>

   
        </Box>
    );
}
