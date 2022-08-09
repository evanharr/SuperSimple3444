import React, { useRef, useState } from "react"
import { Form} from "react-bootstrap"
import { useAuth } from "./AuthContext.js"
import './Styles/style.css'
import { defaultButton, StyledTextField } from './Styles/MUIStyle.js'
import { NavLink, useNavigate, useHistory } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { IconButton, InputAdornment, Box, Button, TextField } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()


  
  async function handleSubmit(e) {
    e.preventDefault()
   
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      console.log(emailRef.current.value)
      
      navigate('/SuperSimple3444')
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
  async function handleClickShowPassword(e)
  {
    setShowPassword(!showPassword)
  }

  return (
    <Box textAlign='center' sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems:"center"}}>
        <h1 className='boldText'>Login</h1>
        
        <Form onSubmit={handleSubmit}>
      <Form.Group id="email">
        <StyledTextField label="Email" variant="filled" type="email" inputRef={emailRef} required></StyledTextField>
      </Form.Group>

      <Form.Group id="password">
        
        <StyledTextField label="Password" variant="filled" required
       type={showPassword ? "text" : "password"}
       InputProps={{
         endAdornment: (
           <InputAdornment position="end">
             <IconButton
               sx={{color: 'black'}}
               aria-label="toggle password visibility"
               onClick={handleClickShowPassword}
             >
               {showPassword ? <Visibility /> : <VisibilityOff />}
             </IconButton>
           </InputAdornment>
         )
         
       }}
       inputRef={passwordRef}
       />
      </Form.Group>

    

      <ThemeProvider theme={defaultButton}>
         <Button  disabled={loading} sx={{ width: 400 }} variant="contained" id = "SignIn" type = "submit">
           Sign In
         </Button>
       </ThemeProvider>
      
    </Form>


   
   </Box>
  )
}