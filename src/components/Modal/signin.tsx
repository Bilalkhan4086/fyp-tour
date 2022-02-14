import { Box, Button, IconButton, InputAdornment, TextField,Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

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

const MyVerticallyCenteredModalSignIn = (props) => {
    const [email,setEmail] = useState('example@gmail.com');
    const [password,setPassword] = useState('Password123?');
    const [showPassword,setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter" style={{marginLeft:"40%"}} >
           <Box>SignUp</Box>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{margin:"auto"}}>
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' }
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
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' }
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
      <Box>
          
             Join Now <span style={{color:"green",cursor:"pointer"}}>SignUp</span>
          
      </Box>
        </Modal.Body>
        <Modal.Footer style={{margin:"auto"}}>
          <Button style={{color:"white",backgroundColor:"green",borderRadius:"50px",width:"100px"}} onClick={props.onHide}>Sign In</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

export default MyVerticallyCenteredModalSignIn;