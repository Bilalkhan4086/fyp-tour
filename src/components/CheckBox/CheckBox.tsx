import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Typography,Box} from '@material-ui/core';

export default function FormControlLabelPosition({notes,services,setServices,titleHeading}) {
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
      </FormGroup>
    </FormControl>
  );
}
