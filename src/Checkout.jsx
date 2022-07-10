import React from "react";
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem';
import TrimPic from './Images/Trim.png'
import Button from '@mui/material/Button'

const paymentTypes = [
    {
        value: 'Credit Card',
        label: 'Credit Card'

    },
    {
        value: 'Debit Card',
        label: 'Debit Card'
    },
    {
        value: 'Paypal',
        label: 'Paypal'
    }
]
let paymentType = 'Credit Card';

const PaymentInfo = (paymentType) => {
    
    if(paymentType!='Paypal'){
        return(
                <div>HELLO</div>
        )
    }
    return(
        <div>GOODBYE</div>
    )
}
function Checkout() {
    const [paymentType, setPaymentType] = React.useState('Credit Card');

    const handleChange = (event) => {
      setPaymentType(event.target.value);
    };
    return (
        <div>
            <Stack direction='row' marginTop='20px' sx={{}} columns={2} spacing={75} >
                {/* THIS IS ALL THE STUFF FOR THE PAYMENT INFO SIDE OF THE CHECKOUT SCREEN */}
                <Grid>
                    <Stack spacing={26} direction='row'>
                        <TextField  label="Frist Name" variant="filled" style={{background:'white'}}/>
                        <TextField  label="Last Name" variant="filled" style={{background:'white'}} />
                    </Stack>
                    <Stack spacing={2} marginTop='20px' >
                        <TextField  label="Email:" variant="filled" style={{background:'white'}} />
                        <TextField  label="Address:" variant="filled" style={{background:'white'}} />
                        <TextField  label="Address 2 (Optional)" variant="filled" style={{background:'white'}} />
                        <TextField select label="Payment Type" value={paymentType} onChange={handleChange} style={{background:'white'}} variant='filled'>
                            {paymentTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField  label="Name on Card" variant="filled" style={{background:'white'}} />
                        <TextField  label="Credit Card Number" variant="filled" style={{background:'white'}} />
                        <Stack spacing={26} direction='row'>
                            <TextField  label="CVV" variant="filled" style={{background:'white'}} />
                            <TextField  label="Expiration Date" variant="filled" style={{background:'white'}} />
                        </Stack>
                        <Button variant='contained'style={{background:'#00853E', color:'white' }}> CHECKOUT</Button>
                    </Stack>
                </Grid>
                {/* THIS IS GOING TO BE THE PREVIEW PICTURE OF THE CAR */}
                
                <img src={TrimPic}></img>
                
            </Stack>
        </div>
    )
}

export default Checkout