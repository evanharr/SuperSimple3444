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

 export default function AddPayment()
{
   
    const cardNumber = useRef()
    const cardName = useRef()
    const expDate = useRef()
    
    
    const {getCurrentUser} = useAuth()
    const user = getCurrentUser()

    async function handleSubmit(e){
        
        try{
            update(ref(database, 'users/' + user.uid + '/paymentInfo/'), {
                
                cardNumber:cardNumber.current.value,
                cardName:cardName.current.value,
                expDate:expDate.current.value

        
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
            <h1 className='Edit'>Add Payment</h1>
            
            <Form onSubmit={handleSubmit}>
          <Form.Group id="cardNumber">
            <StyledTextField label="Card Number" variant="filled" type="cardNumber" inputRef={cardNumber} required></StyledTextField>
          </Form.Group>

          <Form.Group id="cardName">
            <StyledTextField label="Card Name" variant="filled" type="cardName" inputRef={cardName} required></StyledTextField>
          </Form.Group>

          <Form.Group id="expDate">
            <StyledTextField label="Expiration Date" variant="filled" type="expDate" inputRef={expDate} required></StyledTextField>
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
