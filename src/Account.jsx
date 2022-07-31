import React from "react";
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Link,} from 'react-router-dom'
import { AccountStyledTextField } from './Styles/MUIStyle.js'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TextField } from '@mui/material';




function Account(){

    let userName = "Test Name"
    let email = 'Test Email'
    let address = 'Test Address'


    return(


        <Box
            sx={{
                flexGrow: '1',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                maxHeight: 832,
                backgroundColor: '#424242',
            }}
        >
            <Link to="/SuperSimple3444" style={{color: 'white'}}><ArrowBackIcon /></Link>
            
            <Grid container
                direction ='column'
                display = 'flex'
                justifyContent='center'
                alignItems='center'
                >
                
                <Grid item paddingTop='20px'>
                   <Typography variant="h4" color='white'>Account Information</Typography>
                </Grid>
                <Grid item>
                    <AccountStyledTextField
                        label="User Name"
                    />
                </Grid>
                <Grid item>
                    <AccountStyledTextField
                        label="Email Address"
                    />
                </Grid>
                <Grid item>
                    <AccountStyledTextField
                        label="Address"
                    />
                </Grid>
                <Grid item>
                    <AccountStyledTextField
                        label="Date of Birth"
                    />
                </Grid>
                <Grid item>
                    <AccountStyledTextField
                        label="Password"
                    />
                </Grid>
                
                <Grid item paddingTop='20px'>
                   <Typography variant="h4" color='white'>Payment Information</Typography>
                </Grid>
                <Button style={{color:'#00853E'}}>Edit Payment Information</Button>
                
                <Grid item paddingTop='20px'>
                   <Typography variant="h4" color='white'>Vehicle Configuration</Typography>
                   </Grid>
                   <Button style={{color:'#00853E'}}>View Saved Vehicle Configurations</Button>
               
                


            </Grid>
        </Box>      
    );
}

export default Account







