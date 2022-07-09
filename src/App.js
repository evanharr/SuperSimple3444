import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Modal from './Modal'
import Login from './Login'


function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [OtherOpen, setOtherOpen] = useState(false);
  return(
  <div>
    Main page
    <Button variant="contained" className='OpenLogin' onClick={() => setLoginOpen(true)}>
    Login
    </Button>
    <Button variant="contained" className='OpenOther' onClick={() => setOtherOpen(true)}>
    Other
    </Button>
    
    <Modal open={loginOpen} onClose={() => setLoginOpen(false)}><Login /></Modal>
    <Modal open={OtherOpen} onClose={() => setOtherOpen(false)}>Test</Modal>
  </div>
  )
}

export default App;
