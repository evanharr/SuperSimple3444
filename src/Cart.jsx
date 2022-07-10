import React from "react";
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrimPic from './Images/Trim.png'
import { Button } from "@mui/material";

function Cart (){
    return(
        <div style={{ 
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',}}>
           <Accordion sx={{
                maxWidth:'600px',
                height:'50px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                alignText:'center',
                backgroundColor: '#303030',

            }} variant='outlined'>
              
                    <Typography style={{color:'white'}}>Car Example</Typography>
               
           
                </Accordion> 
            <Accordion sx={{
                maxWidth:'600px',
                backgroundColor: '#303030',

            }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography style={{color:'white'}}>Trim</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    alignText:'center',
                }}>
                    <img src={TrimPic}></img>
                </AccordionDetails>
                </Accordion>
                <Accordion sx={{
                maxWidth:'600px',
                backgroundColor: '#303030',

                }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography style={{color:'white'}}>Interior</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                </Accordion>
                <Accordion sx={{
                maxWidth:'600px',
                backgroundColor: '#303030',

             }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography style={{color:'white'}}>Exterior</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                
            </Accordion>
            <Accordion sx={{
                maxWidth:'600px',
                height:'50px',
                backgroundColor: '#303030',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                alignText:'center',
            }} >
                
                <Typography style={{color:'white'}}>Total Price(MSRP): $100,000</Typography>
                </Accordion> 
                <Accordion sx={{
                height:'50px',
                maxWidth:'600px',
                backgroundColor: '#303030',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                
            }} >
                <Button variant ='contained' style={{background:'#00853E', color:'white' }}>Checkout</Button>
               </Accordion>
        </div>
    )
}
export default Cart