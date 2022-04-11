import { Box, Button, IconButton, InputAdornment, TextField,Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import './index.css';
import loginImage from '../../Images/loginImage.jpg';
import { navigate } from 'gatsby';


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

const MyVerticallyCenteredModalSignUp = (props) => {
    const [email,setEmail] = useState('example@gmail.com');
    const [firstName,setFirstName] = useState('Jhon');
    const [lastName,setLastName] = useState('Eddy');
    const [userName,setUserName] = useState('Jhon47');
    const [password,setPassword] = useState('Password123?');
    const [showPassword,setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [showModal,setShowModal] = useState(false);

    return (
      <Box  style={{backgroundImage:`url(${loginImage})`,backgroundSize:"cover",width:"100%",height:"100vh",backgroundPosition:"center"}}>
         <Box style={{margin:"3% 7%"}}>
         <Box className='mainContainer'>
        
        <Box >
        <Typography variant='h5' style={{fontWeight:"bolder",margin:"20px 0px"}}>SignUp</Typography>
        </Box>
      <Box style={{margin:"20px 0px"}}>
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' }
      }}
      noValidate
      autoComplete="off"
    >      
        <TextField
          id="standard-error-helper-text"
          label="First Name"
          defaultValue="Jhon"
          helperText="Type Your FirstName here ..."
          variant="standard"
          onChange={(e)=>{setFirstName(e.target.value)}}
        />
    </Box> <Box
      component="form"
      style={{margin:"20px 0px"}}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' }
      }}
      noValidate
      autoComplete="off"
    >      
        <TextField
          id="standard-error-helper-text"
          label="LastName"
          defaultValue="Eddy"
          helperText="Type Your LastName here ..."
          variant="standard"
          onChange={(e)=>{setLastName(e.target.value)}}
        />
    </Box>
    <Box
      component="form"
      style={{margin:"20px 0px"}}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' }
      }}
      noValidate
      autoComplete="off"
    >      
        <TextField
          id="standard-error-helper-text"
          label="UserName"
          defaultValue="Jhon47"
          helperText="Type Your UserName here ..."
          variant="standard"
          onChange={(e)=>{setUserName(e.target.value)}}
        />
    </Box>
      <Box
      component="form"
      style={{margin:"20px 0px"}}
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
    <Box
      component="form"
      style={{margin:"20px 0px"}}
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
    <Box>
        <Box style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",margin:"20px 0px"}}>
            
    <Box width="20ch" marginBottom="20px">
        <Typography>
         Already a member <span style={{color:"green",cursor:"pointer"}} onClick={()=>{navigate("/signin")}}>SignIn</span>
        </Typography>
        </Box>
        <Box width="15ch" marginBottom="20px">
        <Button style={{color:"white",backgroundColor:"green",borderRadius:"50px",width:"100px"}} onClick={props.onHide} >Sign Up</Button>
      </Box>
        </Box>
    </Box>
      </Box>
    </Box>
         </Box>
      </Box>
    );
  }
  

export default MyVerticallyCenteredModalSignUp;