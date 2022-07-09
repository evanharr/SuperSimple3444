import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import CarIcon from '../Logos/carIcon.jsx'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function NavBar(){
    return(
<AppBar position ='static' style={{backgroundColor:'#211D1D'}}>

       <Toolbar>
        <CarIcon  />
        <Button style={{color:'white'}}>Vehicles</Button>
        <Button style={{color:'white'}}><Link to="/account-info">Account</Link></Button>
        <Button style={{color:'white'}}>Cart</Button>
        </Toolbar>
</AppBar>

    )
}
export default NavBar