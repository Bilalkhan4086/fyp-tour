import React, { useEffect, useState } from 'react';
// import logo from '../../../Images/logo.jpg'
import logolight from '../../../Images/logo4.png'
import logoDark from '../../../Images/logo5.png'
import logoBrown from '../../../Images/logosvg.js'
import login from '../../../Images/login.png'
import {Navbar,Container,Nav,NavDropdown, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './index2.css';
import './index3.css';
import { Avatar, Divider,  Donut,  Progress,  Text } from 'theme-ui';
import { Button, Box, Typography  } from '@material-ui/core';
import MyVerticallyCenteredModalSignUp from '../../Modal/signup'
import Logosvg from '../../../Images/logosvg.js';
import { navigate } from 'gatsby';

export const NavBar:React.FC<any> = ({offset}) =>{
  const [navEx,setNavEx] = useState(false);
  const [sellerMode,setSellerMode] = useState(false);
  const [Name,setName] = useState("Muhammad Bilal");
  const [green,setGreen] = useState(true);
  const [logoColor,setLogoColor] = useState('#ffffff');
  useEffect(()=>{
    if(offset <= window.innerHeight){
    setGreen(false);
    setLogoColor('#ffffff');
    if(navEx){
      setLogoColor('#AD590A')
    }
  }else{
    setGreen(true);
    setLogoColor('green')
  }})
    return(
      <Navbar collapseOnSelect onToggle={()=>{setNavEx(!navEx)}} expand="lg" style={{backgroundColor:green ? 'transparent' : navEx ? "white" : "transparent"}}>
  <Container>
  <Navbar.Brand href="#">
  {/* {typeof window !== `undefined` ? <Progress value={((offset + window.innerHeight) / document.documentElement.scrollHeight)} max={1} style={{position:"absolute",top:"97%",height:"5px",left:"0px",display:green ? "unset" : 'none'}} color="green"/> : ''} */}
  {/* <img src={green ? logoDark : navEx ? logoBrown : logolight} style={{width: green ? "150px":"150px"}} title="image"/> */}
  <Box style={{width:"150px"}}>
  <Logosvg olor={logoColor}/>
  </Box>
  {/* PAKVENTURES */}
  </Navbar.Brand>
  <Navbar.Toggle className={green ? "navbar-light" : navEx ? "navbar-light " : "navbar-dark" } />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#" onClick={()=>{navigate("/")}} style={{color:green ? "green" : navEx ? "#dd720f" : "whitesmoke"}}>About Us</Nav.Link>
      <Nav.Link href="#Blogs" onClick={()=>{navigate("/")}} style={{color:green ? "green" : navEx ? "#dd720f" : "whitesmoke"}}>Blogs</Nav.Link>
      <NavDropdown title="Home" id={green ? "navTextColor2" : navEx ? "navTextColor3" : "navTextColor"}>
        <NavDropdown.Item onClick={()=>{navigate("/#Stories")}}>Stories</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>{navigate("/#Save")}} >Save the World</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>{navigate("/#Footer")}}>Footer</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Divider/>
    <Nav >
      <Nav.Link href="#BecomeASeller" style={{display:"flex",justifyContent:"center",margin:"auto"}} >
      <Typography onClick={()=>{setSellerMode(!sellerMode)}} style={{color:"green",fontWeight:'bolder'}}>
            {sellerMode ? "Back to Buyer" : 'Become a seller'}
      </Typography>
      </Nav.Link>
      <Nav.Link style={navEx ? {marginTop:"10%"} : {marginTop:"0px"}} eventKey={2} onClick={()=>{navigate("/profile")}}>
        <Box style={{textAlign:"center",marginTop:"15px"}}>
        <Box>
        <Avatar style={{marginTop : navEx ? "-50px":"-10px",width: navEx ? "80px":"45px"}} title="login" src={login}/>
        </Box>
        </Box>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}