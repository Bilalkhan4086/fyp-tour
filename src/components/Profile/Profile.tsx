import React from 'react'
import '../css/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import {Box, Heading, Image, Text} from 'theme-ui'
import {navigate} from 'gatsby'

const profile = () => {
  return (
<Box className="container">
    <Box className="main-body">    
          <Box className="row gutters-sm">
            <Box className="col-md-4 mb-3">
              <Box className="card">
                <Box className="card-body">
                  <Box className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                    <Box className="mt-3">
                      <h4>John Doe</h4>
                      <Text className="text-secondary mb-1">Full Stack Developer</Text>
                      <Text className="text-muted font-size-sm">Bay Area, San Francisco, CA</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Heading as="h6" className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{marginRight:"7px"}} className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</Heading>
                    <span className="text-secondary">https://bootdey.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Heading as="h6" className="mb-0 mr-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  style={{marginRight:"7px"}} className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</Heading>
                    <span className="text-secondary">@bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Heading as="h6" className="mb-0 mr-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  style={{marginRight:"7px"}} className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</Heading>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Heading as="h6" className="mb-0 mr-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  style={{marginRight:"7px"}} className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</Heading>
                    <span className="text-secondary">bootey</span>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box className="col-md-8">
              <Box className="card mb-3">
                <Box className="card-body">
                  <Box className="row">
                    <Box className="col-sm-3">
                      <Heading as="h6" className="mb-0">Full Name</Heading>
                    </Box>
                    <Box className="col-sm-9 text-secondary">
                      Kenneth Valdez
                    </Box>
                  </Box>
                  <hr/>
                  <Box className="row">
                    <Box className="col-sm-3">
                      <Heading as="h6" className="mb-0">Email</Heading>
                    </Box>
                    <Box className="col-sm-9 text-secondary">
                      fip@jukmuh.al
                    </Box>
                  </Box>
                  <hr/>
                  <Box className="row">
                    <Box className="col-sm-3">
                      <Heading as="h6" className="mb-0">Phone</Heading>
                    </Box>
                    <Box className="col-sm-9 text-secondary">
                      (239) 816-9029
                    </Box>
                  </Box>
                  <hr/>
                  <Box className="row">
                    <Box className="col-sm-3">
                      <Heading as="h6" className="mb-0">Mobile</Heading>
                    </Box>
                    <Box className="col-sm-9 text-secondary">
                      (320) 380-4539
                    </Box>
                  </Box>
                  <hr/>
                  <Box className="row">
                    <Box className="col-sm-3">
                      <Heading as="h6" className="mb-0">Address</Heading>
                    </Box>
                    <Box className="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </Box>
                  </Box><hr/>
                  <Box className="row">
                    <Box className="col-sm-3">
                      <Heading as="h6" className="mb-0">CNIC</Heading>
                    </Box>
                    <Box className="col-sm-9 text-secondary">
                      81302-5342637-8
                    </Box>
                  </Box>
                  <hr/>
                  <Box className="row">
                    <Box className="col-sm-12">
                    <Button className='btn btn-primary' onClick={()=>{navigate("/editProfile/")}} >Edit</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="col-md-12">
              <Box className="card mb-3">
                <Box className="card-body">
                  <Box className="row">
              <Heading as="h6">Document Details</Heading>
<Box className='d-flex justify-content-center align-items-start flex-wrap'>
<Image className='col-md-4 m-3' src='https://www.incpak.com/wp-content/uploads/2017/04/NADRA.jpg'/>
<Image className='col-md-4 m-3' src='https://online.theunitedinsurance.com/Admin_files/Images/cnic-back-side.jpg'/>
</Box>
              </Box>
              </Box>
              </Box>
              </Box>
              
            </Box>


          </Box>

        </Box>
    </Box>

  )
}

export default profile