import React, { useState } from 'react';
import logo from '../../../Images/logo.jpg'
import login from '../../../Images/login.png'
import {Navbar,Container,Nav,NavDropdown, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Avatar, Divider,  Text } from 'theme-ui';
import { Button, Box  } from '@material-ui/core';
import MyVerticallyCenteredModalSignUp from '../../Modal/signup'

export const NavBar = () =>{
  const [navEx,setNavEx] = useState(false);
  const [sellerMode,setSellerMode] = useState(false);
  const [showModal,setShowModal] = useState(false);




    return(
      <Navbar collapseOnSelect fixed='top' sticky='top' onToggle={()=>{setNavEx(!navEx)}} expand="lg" bg="light">
  <Container>
  <Navbar.Brand href="#">
  <img src={logo} style={{width:"50px"}}/>
  {/* PAKVENTURES */}
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#">About Us</Nav.Link>
      <Nav.Link href="#Blogs">Blogs</Nav.Link>
      <NavDropdown title="Home" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#Stories">Stories</NavDropdown.Item>
        <NavDropdown.Item href="#Save">Save the World</NavDropdown.Item>
        <NavDropdown.Item href="#Footer">Footer</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Divider/>
    <Nav >
      <Nav.Link href="#BecomeASeller" style={{display:"flex",justifyContent:"center",margin:"auto"}} ><Button style={{borderRadius:"50px",backgroundColor:"green",height:"50px",color:"whitesmoke",fontWeight:'bold'}} onClick={()=>{setSellerMode(!sellerMode)}}>{sellerMode ? "Back to Buyer" : 'Become a seller'}</Button></Nav.Link>
      <Nav.Link style={navEx ? {marginTop:"10%"} : {marginTop:"0px"}} eventKey={2} onClick={()=>{setShowModal(true)}}>
        <Box style={{textAlign:"center"}}>
        <Box>
        <Avatar style={{marginTop : navEx ? "-70px":"-10px",width: navEx ? "100px":"45px"}} title="login" src={login}/>
        </Box>
        <Box>
        <Text style={{fontSize:navEx ? "1.5rem" : "0.75rem"}}>SignIn / SignUP</Text>
        <MyVerticallyCenteredModalSignUp
        show={showModal}
        onHide={()=>{
          setShowModal(false);
        }
          }
      />
        </Box>
        </Box>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}