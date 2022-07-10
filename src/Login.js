import React from 'react';
import './Styles/login.css'
import { defaultButton } from './Styles/MUIStyle.js'

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { IconButton, InputAdornment, Box, Button, TextField } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";



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
      this.state = {email: '', pass: '', showPassword: false}
      this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  //Runs events that occur after button is pressed
  CollectInfo()
  {
    console.log('log');
  }

  handleClickShowPassword = () =>{
    this.setState({ showPassword: !this.state.showPassword })
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
        <StyledTextField className='loginText' id="password-form"  label="Password"
        type={this.state.showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                sx={{color: 'white'}}
                aria-label="toggle password visibility"
                onClick={this.handleClickShowPassword}
              >
                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />

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