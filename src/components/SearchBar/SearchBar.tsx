import { Button, InputBase, List, ListItem, ListItemIcon, ListItemText, TextField } from '@material-ui/core'
import { CardTravelOutlined, LocationOnRounded, PeopleAltOutlined, Search, TextFields } from '@material-ui/icons'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React,{useState} from 'react'
import {Box, Text} from 'theme-ui'
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import { Autocomplete, ListItemButton } from '@mui/material'
const SearchBar = () => {
    const [startDate, setStartDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [endDate, setEndDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleStartDateChange = (date) => {
        setStartDate(date);
      };
      const handleEndDateChange = (date) => {
        setEndDate(date);
      };
const [places, setPlaces] = useState([]);

const handleChangeForPlaces = async (e) =>{
const {data} = await axios.post('https://accommodations.booking.com/autocomplete.json',
{ 
        "query" : e.target.value,
        "pageview_id": "d571151f734302de", 
        "aid": 304142, 
        "language": "en-us", 
        "size": 5
},{
headers:{
    "Content-Type":"application/x-www-form-urlencoded"
}}
);


console.log("list of data =",data.results)
setPlaces(data.results)
}

const styles = {
    mainBox:{
        display:"flex", 
        margin:"auto",
        backgroundColor:"rgb(229, 239, 240)",
        width:"930px",
        padding:"5px 10px",
        borderRadius:"3px",
        height:"70px",
        "@media (max-width:900px)":{
            flexDirection:"column",
            width:"560px",
            borderRadius:"10px",
            padding:"30px",
            height:"395px"
        },
        "@media (max-width:580px)":{
            flexDirection:"column",
            width:"360px",
            borderRadius:"10px",
            padding:"30px",
            height:"395px"
        },
        "@media (max-width:380px)":{
            flexDirection:"column",
            width:"90%",
            borderRadius:"10px",
            paddingX:"15px",
            height:"395px"
        }
    },
    LocationBox:{
        width:"260px",
        alignItems:"center",
        height:"60px",
        display:"flex",
        justifyContent:"space-between",
        paddingRight:"10px",
        borderRight:"1px solid grey",
        "@media (max-width:900px)":{
            width:"500px",
            borderRight:"none",
            borderBottom:"1px solid grey"
        },
        "@media (max-width:580px)":{
            width:"300px",
            borderRight:"none",
            borderBottom:"1px solid grey"
        },
        "@media (max-width:380px)":{
            width:"100%",
            borderRight:"none",
            borderBottom:"1px solid grey"
        }
    },
    LocationInputBase:{
        display:"flex",
        margin:"auto",
        width:"90%",
        "@media (max-width:900px)":{
            width:"100%"
        } 
    },
    StartDateBox:{
        width:"150px",
        paddingLeft:"10px",
        alignItems:"center",
        height:"60px",
        display:"flex",
        justifyContent:"space-around",
        borderRight:"1px solid grey",
        "@media (max-width:900px)":{
            width:"500px",
            borderRight:"none",
            borderBottom:"1px solid grey"
        },
        "@media (max-width:580px)":{
            width:"300px",
            borderRight:"none",
            borderBottom:"1px solid grey"
        },
        "@media (max-width:380px)":{
            width:"100%",
            borderRight:"none",
            borderBottom:"1px solid grey"
        }
    },
    EndDateBox:{
        width:"150px",
        paddingLeft:"10px",
        alignItems:"center",
        height:"60px",
        display:"flex",
        justifyContent:"space-around",
        borderRight:"1px solid grey",
        "@media (max-width:900px)":{
            width:"500px",
            borderRight:"none",
            borderBottom:"1px solid grey"
        },
        "@media (max-width:580px)":{
            width:"300px",
            borderRight:"none",
            borderBottom:"1px solid grey"
        },
        "@media (max-width:380px)":{
            width:"100%",
            borderRight:"none",
            borderBottom:"1px solid grey"
        }
    },
    GuestBox:{
        width:"150px",
        alignItems:"center",
        height:"60px",
        display:"flex",
        justifyContent:"space-between",
        borderRight:"1px solid grey",
        paddingRight:"10px",
        "@media (max-width:900px)":{
            width:"500px",
            borderRight:"none",
            borderBottom:"1px solid grey"
        },
        "@media (max-width:580px)":{
            width:"300px",
            borderRight:"none",
            borderBottom:"1px solid grey"
        },
        "@media (max-width:380px)":{
            width:"100%",
            borderRight:"none",
            borderBottom:"1px solid grey"
        }
    },
    ButtonBox:{
        width:"200px",
        alignItems:"center",
        height:"60px",
        display:"flex",
        justifyContent:"space-around",
        "@media (max-width:900px)":{
            width:"500px",
            marginTop:"7%"
        },
        "@media (max-width:580px)":{
            width:"300px",
            marginTop:"7%"
        },
        "@media (max-width:380px)":{
            width:"100%",
            marginTop:"7%"
        }
    }

}

    return (
    <Box sx={styles.mainBox}>
        {/* Location */}
        <Box  sx={styles.LocationBox}>
            <Box sx={styles.LocationInputBase}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={places}
          sx={{ width: "88%" }}
          renderInput={(params) => <TextField {...params} style={{marginTop:"-15px"}} onChange={(e)=>{handleChangeForPlaces(e)}} label="Search Google Map" InputProps={{...params.InputProps, disableUnderline: true}} />}
        />
         

            </Box>
            <Text as="span">
                <LocationOnRounded color='primary' />
            </Text>
        </Box>

        {/* Start Date */}
        <Box sx={styles.StartDateBox}>
{/* Testing */}
<MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
    style={{marginTop:"10px",width:"100%"}}
          margin="normal"
          id="date-picker-dialog"
          label="Start Date"
          format="MM/dd/yyyy"
          value={startDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
            color:"primary"
          }}
          InputProps={{disableUnderline:true}}
        />
        </MuiPickersUtilsProvider>
{/* Testing */}
        </Box>
        {/* End Date */}
        <Box sx={styles.EndDateBox}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
    style={{marginTop:"10px",width:"100%"}}
          margin="normal"
          id="date-picker-dialog"
          label="End Date"
          format="MM/dd/yyyy"
          value={endDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
            color:"primary"
          }}
          InputProps={{disableUnderline:true}}
        />
        </MuiPickersUtilsProvider>
        </Box>
        {/* Guests */}
        <Box sx={styles.GuestBox}>
            <TextField placeholder='Guests' type="number" style={{marginLeft:"10px",width:"90%"}} InputProps={{disableUnderline:true}} />
                <PeopleAltOutlined color="primary"/>
        </Box>
        {/* Button */}
        <Box sx={styles.ButtonBox}>
            <Button variant='contained' style={{width:"90%",height:"60px",backgroundColor:"rgb(26, 77, 241)",color:"whitesmoke",fontWeight:"bold"}} >Find Hotel</Button>
        </Box>
    </Box>
  )
}

export default SearchBar
