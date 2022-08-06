import { createTheme, styled } from '@mui/material/styles';
import { TextField, Button, Tab, Paper, Typography, Accordion, Radio } from '@mui/material';

//Keeping styles for MUI components here so they can be used for different functions
//Taken from Login.js

//Makes buttons green
const defaultButton = createTheme({
  
    palette: {
      primary: {
          main:'#00853E',
      },
    },
  });

export {defaultButton};

export const BoldButton = styled(Button)({
  fontWeight: 'medium',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 17.5,
  textTransform: 'none'
})

export const VehicleButton = styled(Button)({
  fontWeight: 'medium',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 17.5,
  textTransform: 'none',
  color:'white', 
  justifyItems:'left', 
  backgroundColor: '#303030'
})

export const BoldTab = styled(Tab)({
  fontWeight: 'medium',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 17.5,
  textTransform: 'none'
})

export const StyledPaper = styled(Paper)({
    p: '12px',
    borderColor: 'white',
    background:'#424242',
    color:'white',
    fontFamily: 'Roboto, sans-serif'
})

export const StyledTypography = styled(Typography)({
  borderColor: 'white',
  color:'white',
  fontFamily: 'Roboto, sans-serif'
})

export const StyledAccordion = styled(Accordion)({
  maxWidth:'600px',
  justifyContent:'center',
  alignItems:'center',
  alignText:'center',
  backgroundColor: '#303030',
})

export const StyledRadio = styled(Radio)({
  '&, &.MuiRadio-colorSecondary': {
    color: 'white',
  },
  '&, &..Mui-checked': {
    color: 'blue',
  },

})
//Sets textfield to white
export const StyledTextField = styled(TextField)({
    align:'center',
    background:'white',
    margin: 10,  
    width:400,
  
    input:{
      color:"black"
    },
    "& label": {
      color: "black"
    },
    "&:hover label": {
      fontWeight: 700
    },
    "& label.Mui-focused": {
      color: "black"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white",
        borderWidth: 2
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  });