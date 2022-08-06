import React, { useRef, useState, Component, useEffect } from "react"
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Link, useNavigate} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import { StyledPaper } from './Styles/MUIStyle.js'
import { defaultButton, StyledTextField } from './Styles/MUIStyle.js'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Form} from "react-bootstrap"

import SavedCarConfig from "./SavedCarConfig"
//import Auth and Database
import {getDatabase, set, ref, update, onValue, get,child, push} from "firebase/database";
import {database} from "./firebase"
import { useAuth } from "./AuthContext.js"


//import edit files
import Modal from './Modal'
import EditName from './EditName'
import EditAddress from './EditAddress'
import EditDOB from './EditDOB'
import EditEmail from './EditEmail'
import EditPassword from './EditPassword'
import AddPayment from "./AddPayment"
import EditPayment from "./EditPayment"

function Account (){
    const navigate = useNavigate();
    //get user personal information
    const {getCurrentUser} = useAuth()
    const user = getCurrentUser()
    const email = user.email
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [address, setAddress] = useState()
    const [DOB, setDOB] = useState()
    
    //get user payment information
    const [cardNumber, setCardNumber] = useState()
    const [cardName, setCardName] = useState()
    const [expDate, setExpDate] = useState()

    //set model states for opening edit files
    const [editNameOpen, setEditNameOpen] = useState(false);
    const [editAddressOpen, setEditAddressOpen] = useState(false);
    const [editDOBOpen, setEditDOBOpen] = useState(false);
    const [editEmailOpen, setEditEmailOpen] = useState(false);
    const [editPasswordOpen, setEditPasswordOpen] = useState(false);
    const [addPaymentOpen, setAddPaymentOpen] = useState(false);
    const [editPaymentOpen, setEditPaymentOpen] = useState(false);

    const [payInfoExists, setPayInfoExists] = useState(false)
    
    
   const navigateToSavedCarConfig = () =>
   {
    navigate('./SavedCarConfig')
   }
   //getting snapshot of data from firebase database
    useEffect(() =>
    {
        const reference = ref(database,'/users/' + user.uid);
        get(reference).then((snapshot) =>
        {if(snapshot.exists())
          {
            
            setFirstName(snapshot.val().firstName)
            setLastName (snapshot.val().lastName)
            setAddress (snapshot.val().address)
            setDOB(snapshot.val().DOB)
          }
         
        });
    })

    useEffect(() =>
    {
        const reference = ref(database,'/users/' + user.uid + '/paymentInfo/');
        get(reference).then((snapshot) =>
        {if(snapshot.exists())
          {
            setPayInfoExists(true)
            setCardNumber(snapshot.val().cardNumber)
            setCardName (snapshot.val().cardName)
            setExpDate (snapshot.val().expDate)
          }
         
        }
        );
    })
    
     

   


    return(


        <Box
            sx={{
                flexGrow: '1',
                position: 'absolute',
                top: '80%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                maxHeight: 1000,
                backgroundColor: '#424242',
            }}
        >
            <Link to="/SuperSimple3444" style={{color: 'white'}}><ArrowBackIcon /></Link>
            
            <Grid container
                direction ='column'
                justifyContent='center'
                alignItems='center'
                >
                
                <Grid item paddingTop='20px'>
                   <Typography variant="h4" color='white'>Account Information</Typography>
                </Grid>
                
                
                <Grid paddingTop='10px'>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={30} alignItems='center' justifyContent='flex-start'>
                           <p>Name:<br></br>
                           {firstName} &nbsp;
                           {lastName}
                           
                           </p>
                           
                           
                           
                            <Button variant='contained' size='small' style={{background:"#00853E"}}  onClick={() => {setEditNameOpen(true)}}>Edit</Button>
                        
                            </Stack> 
                    </StyledPaper>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={30} alignItems='center'justifyContent='flex-start'>
                            <p>Email Address:<br></br>{email}</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}} onClick={() => {setEditEmailOpen(true)}}>Edit</Button>
                            </Stack> 
                    </StyledPaper>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={30} alignItems='center'justifyContent='flex-start'>
                            <p>Address<br></br>{address}</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}}  onClick={() => {setEditAddressOpen(true)}}>Edit</Button>
                            </Stack> 
                    </StyledPaper>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={30} alignItems='center'justifyContent='flex-start'>
                            <p>Date of Birth<br></br>{DOB}</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}} onClick={() => {setEditDOBOpen(true)}}>Edit</Button>
                            </Stack> 
                    </StyledPaper>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={30} alignItems='center'justifyContent='flex-start'>
                            <p>Password:<br></br>******</p>
                            <Button variant='contained' size='small' style={{background:"#00853E"}} onClick={() => {setEditPasswordOpen(true)}}>Edit</Button>
                            </Stack> 
                    </StyledPaper>
                    
                </Grid>

                <Grid item paddingTop='20px'>
                    <Typography variant="h4" color='white'>Payment Information</Typography>
                 </Grid>
                {payInfoExists && (
                    <Grid item paddingTop='20px'>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={30} alignItems='center'justifyContent='flex-start'>
                            <p>Card Number:<br></br>{cardNumber}</p>
                            </Stack> 
                    </StyledPaper>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={17.5} alignItems='center'justifyContent='flex-start'>
                            <p>Card Name:<br></br>{cardName}</p>
                            </Stack> 
                    </StyledPaper>
                    <StyledPaper sx={{p: '10px'}} variant='outlined'>
                           <Stack direction="row" spacing={17.5} alignItems='center'justifyContent='flex-start'>
                            <p>Expiration Date:<br></br>{expDate}</p>
                            </Stack> 
                    </StyledPaper>
                    <Button style={{color:'#00853E'}}  onClick={() => {setEditPaymentOpen(true)}} >Edit Payment Information</Button>
                    </Grid>
                    
                )}
                {!payInfoExists && (
                    <Button style={{color:'#00853E'}} onClick={() => {setAddPaymentOpen(true)}}>Add Payment Information</Button>
                )}
                
                
                
                <Grid item paddingTop='20px'>
                   <Typography variant="h4" color='white'>Vehicle Configuration</Typography>
                   </Grid>
                   <Button style={{color:'#00853E'}} onClick={() => {navigateToSavedCarConfig()}}>View Saved Vehicle Configurations</Button>
               
                

                
            </Grid>
            <Modal open={editNameOpen} onClose={() => setEditNameOpen(false)}><EditName /></Modal>
            <Modal open={editAddressOpen} onClose={() => setEditAddressOpen(false)}><EditAddress /></Modal>
            <Modal open={editDOBOpen} onClose={() => setEditDOBOpen(false)}><EditDOB /></Modal>
            <Modal open={editEmailOpen} onClose={() => setEditEmailOpen(false)}><EditEmail /></Modal>
            <Modal open={editPasswordOpen} onClose={() => setEditPasswordOpen(false)}><EditPassword /></Modal>
            <Modal open={editPaymentOpen} onClose={() => setEditPaymentOpen(false)}><EditPayment /></Modal>
            <Modal open={addPaymentOpen} onClose={() => setAddPaymentOpen(false)}><AddPayment /></Modal>

        </Box>    
        
  
        
    );
}

export default Account







