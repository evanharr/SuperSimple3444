import {React, useState} from 'react';
import { AppBar} from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import CarIcon from '../Images/carIcon.jsx'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import { BoldButton } from '../Styles/MUIStyle.js'
import Modal from '../Modal'
import Login from '../Login'


function NavBar(){

const [loginOpen, setLoginOpen] = useState(false);
    return(
<AppBar position ='static' style={{backgroundColor:'#211D1D'}} >

       <Toolbar>
        <IconButton><Link style={{color: 'white'}} to="/SuperSimple3444"><CarIcon  /></Link></IconButton>
        <BoldButton style={{color:'white'}}><Link style={{color: 'white'}} to="/vehicle-page">Vehicles</Link></BoldButton>
        <BoldButton style={{color:'white'}}><Link style={{color: 'white'}} to="/account-info">Account</Link></BoldButton>
        <BoldButton style={{color:'white'}}><Link style={{color: 'white'}} to='/cart'>Cart</Link></BoldButton>
        <BoldButton style={{color:'white', left: 1500}} className='OpenLogin' onClick={() => setLoginOpen(true)}> Log in </BoldButton>
        </Toolbar>
        <Modal open={loginOpen} onClose={() => setLoginOpen(false)}><Login /></Modal>
</AppBar>

    )
}
export default NavBar