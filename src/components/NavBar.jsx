import {React, useState} from 'react';
import { AppBar, Typography } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import CarIcon from '../Logos/carIcon.jsx'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import Login from '../Login'


function NavBar(){

const [loginOpen, setLoginOpen] = useState(false);
    return(
<AppBar position ='static' style={{backgroundColor:'#211D1D'}}>

       <Toolbar>
        <CarIcon  />
        <Button style={{color:'white'}}>Vehicles</Button>
        <Button style={{color:'white'}}><Link to="/account-info">Account</Link></Button>
        <Button style={{color:'white'}}>Cart</Button>
        <Button style={{color:'white', left: 1500}} className='OpenLogin' onClick={() => setLoginOpen(true)}> Login </Button>
        </Toolbar>
        <Modal open={loginOpen} onClose={() => setLoginOpen(false)}><Login /></Modal>
</AppBar>

    )
}
export default NavBar