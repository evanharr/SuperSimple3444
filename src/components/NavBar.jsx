import {React, useState} from 'react';
import { AppBar} from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import CarIcon from '../Images/carIcon.jsx'
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
        <Button style={{color:'white'}}><Link style={{color: 'white'}} to="/account-info">Account</Link></Button>
        <Button style={{color:'white'}}><Link style={{color: 'white'}} to='/cart'>Cart</Link></Button>
        <Button style={{color:'white', left: 1500}} className='OpenLogin' onClick={() => setLoginOpen(true)}> Log in </Button>
        </Toolbar>
        <Modal open={loginOpen} onClose={() => setLoginOpen(false)}><Login /></Modal>
</AppBar>

    )
}
export default NavBar