import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import './login.css'

class login extends React.Component
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
  const loginInstance = new login();
  return(
  <div>
    Main page
    <Button variant="contained" className='OpenLogin'>Login</Button>
    {loginInstance.render()}
  </div>
  )
}

export default App;
