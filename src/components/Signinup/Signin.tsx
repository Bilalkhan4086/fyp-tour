import { Box, Button, IconButton, InputAdornment, TextField,Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { navigate } from 'gatsby';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Image } from 'theme-ui';
import loginImage from '../../Images/loginImage.jpg';
import './index.css';

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (false)
  }
  else{
    return (true)
  }  
}
function ValidatePassword(inputtxt) 
{
const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
 if (passw.test(inputtxt))
 { 
  return false;
  }
  else{return true;}
  
}

const SignIn = (props) => {
    const [email,setEmail] = useState('example@gmail.com');
    const [password,setPassword] = useState('Password123?');
    const [showPassword,setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
      
        <Box style={{backgroundImage:`url(${loginImage})`,backgroundSize:"cover",width:"100%",height:"90vh",backgroundPosition:"center"}}>
{/* left */}
        {/* <Box style={{width:"80%"}}>
        <Box style={{}}>
<Box style={{width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.7)"}}/>
        </Box>    
        </Box> */}
{/* right */}
        <Box style={{padding:"3% 7%"}}>
            <Box className='mainContainer'>
            <Typography variant='h5' style={{fontWeight:"bolder",margin:"20px 0px"}}>Sign In</Typography>
        <Box  style={{margin:"20px 0px"}}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' }
        }}
        autoComplete="off"
      >      
          <TextField
          error={ValidateEmail(email)} 
            id="standard-error-helper-text"
            label="Email"
            defaultValue="example@gmail.com"
            helperText="Type Your Email here ..."
            variant="standard"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
      </Box>
      <Box style={{margin:"20px 0px"}}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' }
        }}
        autoComplete="off"
      >      
          <TextField
          error={ValidatePassword(password)} 
            id="standard-error-helper-text"
            label="Password"
            defaultValue="Password123?"
            type={showPassword ? "text" : "password"}
            helperText="Type Your Password here ..."
            variant="standard"
            onChange={(e)=>{setPassword(e.target.value)}}
            InputProps={{ // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
      </Box>
      <Box style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",margin:"20px 0px"}}>
          
            <Box width="20ch" marginBottom="20px"> Join Now <span style={{color:"green",cursor:"pointer"}} onClick={()=>{navigate("/signup")}}>SignUp</span>
            </Box>
          <Box width="15ch" marginBottom="20px">
          <Button style={{color:"white",backgroundColor:"green",borderRadius:"50px",width:"100px"}} onClick={props.onHide}>Sign In</Button>
          </Box>
      </Box>
        
        </Box>
            </Box>
        </Box>

        
      );
  }
  

export default SignIn;