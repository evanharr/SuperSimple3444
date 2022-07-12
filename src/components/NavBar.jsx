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
import Register from '../register'

function NavBar(){

const [loginOpen, setLoginOpen] = useState(false);
const [registerOpen, setRegisterOpen] = useState(false);
    return(
<AppBar position ='static' style={{backgroundColor:'#211D1D'}} >

       <Toolbar>
       <Link style={{color: 'white'}} to="/SuperSimple3444"><IconButton><CarIcon  /></IconButton></Link>
        <Link style={{color: 'white'}} to="/vehicle-page"><BoldButton style={{color:'white'}}>Vehicles</BoldButton></Link>
        <Link style={{color: 'white'}} to="/account-info"><BoldButton style={{color:'white'}}>Account</BoldButton></Link>
        <Link style={{color: 'white'}} to='/cart'><BoldButton style={{color:'white'}}>Cart</BoldButton></Link>
        <BoldButton style={{color:'white', left: 1500}} className='OpenLogin' onClick={() => setLoginOpen(true)}> Log in </BoldButton>
        <BoldButton style={{color:'white', left: 1500}} className='openRegister' onClick={() => setRegisterOpen(true)}> Register </BoldButton>
        </Toolbar>
        <Modal open={loginOpen} onClose={() => setLoginOpen(false)}><Login /></Modal>
        <Modal open={registerOpen} onClose={() => setRegisterOpen(false)}><Register /></Modal>
</AppBar>

    )
}
export default NavBar