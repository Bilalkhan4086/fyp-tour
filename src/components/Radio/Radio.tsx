import React, { ChangeEvent } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Box, Typography } from '@material-ui/core';
type propertyTypeprops = {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    warmwater: boolean;
}

interface RadioProps {
    notes?: string[];
    labels?: string[];
    propertyType?: string | propertyTypeprops;
    titleHeading?: string;
    setPropertyType: (_:any) => void;
}

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
  radioGaps:{
      margin:"10% 0%",
      justifyContent:"center",
      display:"flex"
  }
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function CustomizedRadios(props : RadioProps ) {
    const {propertyType,titleHeading,labels,notes = [],setPropertyType} = props;
    const classes = useStyles();
  return (
   <Box className={classes.radioGaps}>
 <FormControl component="fieldset">
      <FormLabel style={{fontSize:"1.5rem"}} component="legend">{titleHeading}</FormLabel>
      <RadioGroup onChange={(e)=>{setPropertyType(e.target.value);}} value={propertyType} defaultValue={labels[0]} aria-label={titleHeading} name="customized-radios"> 
        {labels.map((_,i)=>(
        <Box >
        <FormControlLabel value={labels[i]} control={<StyledRadio />} label={labels[i]} />
        <Typography variant='body2'><b/>
        <b>Note : </b><span>
        {notes[i]}
        </span>
        </Typography>
        </Box>
        ))}
      </RadioGroup>
    </FormControl>
   </Box>
  );
}
