import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css'

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
      <div>
        <h1 className='loginHeader'>Login</h1>

        <TextField id="email-form"  label="Email" ></TextField> <br></br>
        <TextField id="password-form" label="password" type="password" ></TextField> <br></br>

        <Button variant="contained" className='loginElement' onClick={this.CollectInfo}>
          Login
        </Button>

        {/*Add link to <a> tag that goes to create account*/}
        <a className='loginElement' href="https://www.youtube.com/">New User? Click Here to Create Account.</a>
      </div>
    )
  }
}
