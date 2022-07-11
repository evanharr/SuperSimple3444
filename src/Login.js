import React from 'react';
import './Styles/style.css'
import { defaultButton, StyledTextField } from './Styles/MUIStyle.js'

import { ThemeProvider } from '@mui/material/styles';
import { IconButton, InputAdornment, Box, Button, TextField } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
        
        <StyledTextField className='loginText' id="email-form"   label="Email" variant="filled"></StyledTextField>
        <StyledTextField className='loginText' id="password-form"  label="Password" variant="filled"
        type={this.state.showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                sx={{color: 'black'}}
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