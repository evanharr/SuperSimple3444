import React from 'react';
import './login.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const defaultButton = createTheme({
  
  palette: {
    primary: {
        main:'#00853E',
    },
  },
});

//Sets textfield to white
const StyledTextField = styled(TextField)({
  width:400,
  margin: 10,
  align:'center',

  input:{
    color:"white"
  },
  "& label": {
    color: "white"
  },
  "&:hover label": {
    fontWeight: 700
  },
  "& label.Mui-focused": {
    color: "white"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white"
    },
    "&:hover fieldset": {
      borderColor: "white",
      borderWidth: 2
    },
    "&.Mui-focused fieldset": {
      borderColor: "white"
    }
  }
});


export default class Login extends React.Component
{
  constructor()
  {
      super();
      this.state = {email: '', pass: ''}
  }

  //Runs events that occur after button is pressed
  CollectInfo()
  {
    console.log('log');
  }

  render()
  {
    return(
      <Box textAlign='center' sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems:"center"}}>
        <h1 className='loginText'>Login</h1>
        
        <StyledTextField className='loginText' id="email-form"   label="Email" ></StyledTextField>
        <StyledTextField className='loginText' id="password-form"  label="Password" type="password" ></StyledTextField>

        <ThemeProvider theme={defaultButton}>
          <Button  sx={{ width: 400 }} variant="contained" onClick={this.CollectInfo}>
            Login
          </Button>
        </ThemeProvider>

        {/*Add link to <a> tag that goes to create account*/}
        <a className='websiteText' href="https://www.youtube.com/">New User? Click Here to Create Account.</a>
      </Box>
    )
  }
}
