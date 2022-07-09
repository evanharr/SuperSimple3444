import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import CarIcon from '../Logos/carIcon.jsx'
import Button from '@mui/material/Button'

function NavBar(){
    return(
<AppBar position ='static' style={{backgroundColor:'#211D1D'}}>

       <Toolbar>
        <CarIcon  />
        <Button style={{color:'white'}}>Vehicles</Button>
        <Button style={{color:'white'}}>Account</Button>
        <Button style={{color:'white'}}>Cart</Button>
        </Toolbar>
</AppBar>

    )
}
export default NavBar