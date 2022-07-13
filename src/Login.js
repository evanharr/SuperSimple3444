import React from 'react';
import './Styles/style.css'
import { defaultButton, StyledTextField } from './Styles/MUIStyle.js'

import { ThemeProvider } from '@mui/material/styles';
import { IconButton, InputAdornment, Box, Button, TextField } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {getDatabase, set, ref, update} from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjpB2JZEWDNsZVX8QRWMuTiO-tQA31zxU",
    authDomain: "csce3444-5f9a0.firebaseapp.com",
    projectId: "csce3444-5f9a0",
    storageBucket: "csce3444-5f9a0.appspot.com",
    messagingSenderId: "261798731661",
    appId: "1:261798731661:web:310ea302cdb3700cbe27c4",
    measurementId: "G-XSBN3ZKG54",
    databaseURL: "https://csce3444-5f9a0-default-rtdb.firebaseio.com"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

export default class Login extends React.Component
{
  constructor()
  {
      super();
      this.state = {email: '', password: '', showPassword: false}
      this.setShowPassword = this.setShowPassword.bind(this);
      this.CollectInfo = this.CollectInfo.bind(this);
  }

  //Runs events that occur after button is pressed
  CollectInfo()
  {
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)

 .then((userCredential) => {
     // Signed in
     const user = userCredential.user;
     // ...

     // save log in details into real time database
     var lgDate = new Date();
     update(ref(database, 'users/' + user.uid), {
         last_login: lgDate,
     })
         .then(() => {
             // Data saved successfully!
             alert('user logged in successfully');

         })
         .catch((error) => {
             // The write failed...
             alert(error);
         });
 })
 .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     alert(errorMessage);
 });
  }

  setShowPassword = () =>{
    if(this.state.showPassword!=null){
      this.setState({ showPassword: !this.state.showPassword })
    }
  }

  render()
  {
    return(
      <Box textAlign='center' sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems:"center"}}>
        <h1 className='loginText'>Login</h1>
        
        <StyledTextField className='loginText' id="email-form"   label="Email" variant="filled"  value = {this.state.email} onChange = {(e) => this.setState({email: e.target.value})}></StyledTextField>
        <StyledTextField className='loginText' id="password-form"  label="Password" variant="filled" value = {this.state.password} onChange = {(e) => this.setState({password: e.target.value})}
        type={this.state.showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                sx={{color: 'black'}}
                aria-label="toggle password visibility"
                onClick={this.setShowPassword}
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