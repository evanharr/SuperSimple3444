import {React, useState} from 'react';
import { AppBar} from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import CarIcon from '../Images/carIcon.jsx'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { Link, useNavigate } from 'react-router-dom'
import { BoldButton } from '../Styles/MUIStyle.js'
import Modal from '../Modal'
import Login from '../Login'
//import accountIcon from '../Images/accountIcon.jsx'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Account from "../Account.jsx"
import Register2 from '../register2'
import { useAuth } from "../AuthContext.js"
function NavBar(){
   
    const {currentUser,logout} = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    
    const navigateToAccount = () =>
    {
        navigate('/account-info')
        setAnchorEl(null);
    };

    const navigateToCart = () =>
    {
        navigate('/cart')
        setAnchorEl(null);
    };

    

      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleLogOut = () => {
        logout()
      }


    return(
<AppBar position ='static' style={{backgroundColor:'#211D1D'}} >

       <Toolbar>
       <Link style={{color: 'white'}} to="/SuperSimple3444"><IconButton><CarIcon  /></IconButton></Link>
        <Link style={{color: 'white'}} to="/vehicle-page"><BoldButton style={{color:'white'}}>Vehicles</BoldButton></Link>
        
        {currentUser && (
           <div>
               <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                
              >
                <AccountCircle />
              </IconButton>
              
              <Menu
              sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >

                    <MenuItem onClick={() =>{navigateToAccount(); handleClose();}} 
                    >
                    Account      
                    </MenuItem>

                    <MenuItem onClick={() =>{navigateToCart(); handleClose();}} 
                    >
                     Cart   
                    </MenuItem>

                    <MenuItem onClick={() => {handleLogOut(); handleClose();}} 
                     >
                     Logout
                    </MenuItem>

              </Menu>
              
            </div>
          )}

        {!currentUser && (
           <div>
             <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                
              >
                <AccountCircle />
              </IconButton>
              
              <Menu
              sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                  
                  <MenuItem onClick={() => {setLoginOpen(true); handleClose();}}
                  >
                  Log in
                  </MenuItem>

                  <MenuItem onClick={() =>{setRegisterOpen(true); handleClose();}}
                  >
                  Register
                  </MenuItem>
                  </Menu>
           </div>
          )}

        </Toolbar>
       
        
        <Modal open={loginOpen} onClose={() => setLoginOpen(false)}><Login /></Modal>
        <Modal open={registerOpen} onClose={() => setRegisterOpen(false)}><Register2 /></Modal>
</AppBar>

    )
}


export default NavBar