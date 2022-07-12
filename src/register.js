import React from 'react';
import './Styles/style.css'
import { defaultButton, StyledTextField } from './Styles/MUIStyle.js'

import { ThemeProvider } from '@mui/material/styles';
import { IconButton, InputAdornment, Box, Button, TextField } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Modal from './Modal'



 // Import the functions you need from the SDKs you need
 import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut
 } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
 import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";


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


export default class register extends React.Component
{
  constructor()
  {
      super();
      this.state = {
        email: '',
        setEmail: '', 
        password: '',
        setPassword:'', 
        showPassword: false,
        firstName: "", 
        lastName: '', 
        setLastName: '',
        setFirstName: '',
        DOB: '', 
        setDOB: ''
        
        
    }
      this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
      this.Register = this.Register.bind(this);
      this.handleName = this.handleName.bind(this);
      
  }
   handleName(e) 
  {
    e.preventDefault();
    
   
    
    
    console.log(this.state.firstName);
    console.log("here");
  }
  //Runs events that occur after button is pressed
  Register()
{
    

  const handleEmail = (e) => 
  {
    
    this.email = (e.target.value);
  };

 
        
        
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredential) => {
     // Signed in
        const user = userCredential.user;
     //const user = firebase.auth().currentUser
     //get current user 
     //user = FirebaseAuth.getInstance().getCurrentUser();

     // ... user.uid
        set(ref(database, 'users/' + user.uid), {
         email: this.state.email,
         password: this.state.password,
         firstName: this.state.firstName,
         lastName: this.state.lastName,
         DOB: this.state.DOB
        })
         .then(() => {
             // Data saved successfully!
             alert('user created successfully');

         })
         .catch((error) => {
             // The write failed...
             alert(error);
         });
     })
 .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     // ..
     alert(errorMessage);
    });
    
   

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
        <h1 className='registerInfo'>Register</h1>
        
        <StyledTextField className='registerInfo' id="firstName"   label="First Name" variant="filled" value = {this.state.firstName}  onChange = {(e) => this.handleName(e)}  ></StyledTextField>
        <StyledTextField className='registerInfo' id="lastName"   label="Last Name" variant="filled" value = {this.state.lastName} ></StyledTextField>
        <StyledTextField className='registerInfo' id="DOB"   label="Date of Birth" variant="filled" value = {this.state.DOB} ></StyledTextField>

        <StyledTextField className='loginText' id="email-form"   label="Email" variant="filled" value = {this.state.email} ></StyledTextField>
        <StyledTextField className='loginText' id="password-form"  label="Password" variant="filled" value = {this.state.password} 
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
          <Button  sx={{ width: 400 }} variant="contained" id = "register" onClick={this.Register}>
            Register
          </Button>
        </ThemeProvider>

       
      </Box>
    )
  }
}



    