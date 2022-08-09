import React, { useRef, useState } from "react"
import { Form } from "react-bootstrap"
import { useAuth } from "./AuthContext.js"
import './Styles/style.css'
import { defaultButton, StyledTextField } from './Styles/MUIStyle.js'
import { Link, useNavigate, useHistory } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { IconButton, InputAdornment, Box, Button, TextField } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import { StyledPaper } from './Styles/MUIStyle.js'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {getDatabase, set, ref, update} from "firebase/database";
import {database} from "./firebase"

 export default function EditDOB()
{
   
    const newPassword = useRef()
    const confirmNewPassword = useRef()
    const {updateUserPassword} = useAuth()
    const {getCurrentUser} = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const user = getCurrentUser()
    const [error, setError] = useState("")

    async function handleSubmit(e){
        
        if (newPassword.current.value !== confirmNewPassword.current.value) {
       
            return setError("Passwords do not match")
            
          }

        try{
            await updateUserPassword(newPassword.current.value )
            
        
               
                .then(() => {
                    // Data saved successfully!
                    alert('Password Updated Successfully');
        
                })
                .catch((error) => {
                    // The write failed...
                    alert(error);
                });
        }
        catch{

        }
    }

    async function handleClickShowPassword(e)
    {
      setShowPassword(!showPassword)
    }
  

    return(
        <Box textAlign='center' sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems:"center"}}>
            <h1 className='boldText'>Edit Name</h1>
            
            <Form onSubmit={handleSubmit}>
          
            <Form.Group id="newPassword">
        
        <StyledTextField label="Password" variant="filled" required
       type={showPassword ? "text" : "newPassword"}
       InputProps={{
         endAdornment: (
           <InputAdornment position="end">
             <IconButton
               sx={{color: 'black'}}
               aria-label="toggle password visibility"
               onClick={handleClickShowPassword}
             >
               {showPassword ? <Visibility /> : <VisibilityOff />}
             </IconButton>
           </InputAdornment>
         )
         
       }}
       inputRef={newPassword}
       />
      </Form.Group>

      <Form.Group id="confirmNewPassword">
      <StyledTextField label="Confirm Password" variant="filled"  required
       type={showPassword ? "text" : "confirmNewPassword"}
       InputProps={{
         endAdornment: (
           <InputAdornment position="end">
             <IconButton
               sx={{color: 'black'}}
               aria-label="toggle password visibility"
               onClick={handleClickShowPassword}
             >
               {showPassword ? <Visibility /> : <VisibilityOff />}
             </IconButton>
           </InputAdornment>
         )
         
       }}
       inputRef={confirmNewPassword}
       />
        
      </Form.Group>

          <ThemeProvider theme={defaultButton}>
         <Button sx={{ width: 400 }} variant="contained" id = "SubmitPassword" type = "submit">
           Update
         </Button>
       </ThemeProvider>
          </Form>

   
        </Box>
    );
}
