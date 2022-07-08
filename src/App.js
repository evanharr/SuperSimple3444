import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from './Modal'
import './login.css'


const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}

class Login extends React.Component
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
      <div className='loginSquare'>
        <h1 className='loginElement'>Login</h1>

        <TextField className='loginElement' id="email-form"  label="Email" variant="outlined"></TextField> <br></br>
        <TextField className='loginElement' id="password-form" label="password" type="password" variant="outlined"></TextField> <br></br>

        <Button variant="contained" className='loginElement' onClick={this.CollectInfo}>
          Login
        </Button>

        {/*Add link to <a> tag that goes to create account*/}
        <a className='loginElement' href="https://www.youtube.com/">New User? Click Here to Create Account.</a>
      </div>
    )
  }
}


function App() {
  const [isOpen, setIsOpen] = useState(false);
  return(
  <div>
    Main page
    <Button variant="contained" className='OpenLogin'>Login</Button>
    <Login />
  </div>
  )
}

export default App;
