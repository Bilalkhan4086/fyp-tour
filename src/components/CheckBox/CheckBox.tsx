import React, { useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Typography,Box,TextField} from '@material-ui/core';
import { Heading, Label, Radio, Text } from 'theme-ui';
import {Button} from '@material-ui/core'

export default function FormControlLabelPosition({notes,services,setServices,titleHeading}) {
  const [otherServices, setOtherServices] = useState([]);
  const [selectedForDelete, setSelectedForDelete] = useState(null);
  const [tempOtherServices, setTempOtherServices] = useState(null);
  const [ON, setON] = useState(true);

  useEffect(() => {
    console.log("rendered",selectedForDelete);
  }, [ON])
  
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{titleHeading}</FormLabel>
      <FormGroup aria-label="position">
{services.map((service,i)=>(
        <Box style={{display:"block"}}>
        <FormControlLabel
          value={service}
          control={<Checkbox color="primary" />}
          label={service}
          labelPlacement="end"
        />

        {(notes[i] !== undefined && notes[i] !== null) ? 
        <Typography variant="body1">
            <b>Note :</b> <span>
                {notes[i]}
            </span>
        </Typography>
        
    :
    ""    
    }
        </Box>
))}
    <Heading as="h5" >Other services you are offering</Heading> 
    {otherServices.map((service,i)=>{
      return(
        <Label onClick={()=>{setSelectedForDelete(document.querySelector('input[name="otherServices"]:checked') && parseInt(document.querySelector('input[name="otherServices"]:checked').value));}}>
        <Radio
          name="otherServices"
          id="otherServices"
          value={i.toString()}
        />
        {service}
      </Label>
        )
    })}
    <TextField required id="service" label="Add your own service" onChange={(e)=>{setTempOtherServices(e.target.value)}} placeholder="Attach washroom, beautiful balcony and etc." />
    <Button variant='outlined'  style={{width:"70%",margin:"auto",color:"blue",marginTop:"10px"}} disabled={tempOtherServices === null ? true : false}   onClick={()=>{
      otherServices.push(tempOtherServices);
      console.log("services =",otherServices);
      setTempOtherServices(null);
      document.getElementById("service").value = "";
      }}>Add Service</Button>
       <Button variant='outlined' style={{width:"70%",margin:"auto",color:"red",marginTop:"10px"}}  disabled={selectedForDelete === null ? true : false} onClick={()=>{
         
      if(selectedForDelete === 0){
        console.log("entered");
        otherServices.splice(0,1);
        setSelectedForDelete(null);
      }else{
        otherServices.splice(selectedForDelete,1);
        setSelectedForDelete(null);
 }
      console.log("otherServices",otherServices)
      setON(!ON);
      }}>Delete Service</Button>
      
      </FormGroup>
    </FormControl>
  );
}
