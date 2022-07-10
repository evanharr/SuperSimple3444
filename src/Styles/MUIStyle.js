import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

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

//Sets textfield to white
export const StyledTextField = styled(TextField)({
    width:400,
    margin: 10,
    align:'center',
  
    input:{
      color:"white"
    },
    "& label": {
      color: "white"
    },
    "&:hover label": {
      fontWeight: 700
    },
    "& label.Mui-focused": {
      color: "white"
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