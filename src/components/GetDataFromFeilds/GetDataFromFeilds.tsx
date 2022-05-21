import { Box, TextareaAutosize, TextField } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const GetDataFromFeilds = ({placeholders,labels,Types,seters}) => {
const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <Box sx={{display:"flex",flexDirection:"column"}}>
    {labels.map((_,i)=>{
if(Types[i] === 'textArea'){
    return(
    <TextareaAutosize onChange={(e)=>{seters[i](e.target.value)}} style={{margin:"40px 0px",height:"50px"}} required id="standard-required" placeholder={placeholders[i]} />)
    }
    else if(Types[i] === 'dateInput'){
    return(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
    style={{marginTop:"10px"}}
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
)}
    else if(Types[i] === 'textFeild'){
    return(

    <TextField required id="standard-required"  onChange={(e)=>{seters[i](e.target.value)}} label={labels[i]} placeholder={placeholders[i]} />
    )
    }
    else{
      return(

        <TextField required id="standard-required" type="number" onChange={(e)=>{seters[i](e.target.value)}} label={labels[i]} placeholder={placeholders[i]} />
        ) 
    }
    })}
    
    </Box>
  )
}


export default GetDataFromFeilds