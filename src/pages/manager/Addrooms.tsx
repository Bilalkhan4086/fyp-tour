import * as React from 'react';
import {Box,Stepper,Step,StepLabel,Button,Typography, FormControl, FormLabel, RadioGroup, FormControlLabel} from '@material-ui/core';
import { Radio } from 'theme-ui';
import RadioComponent from '../../components/Radio/Radio';
import GetDataFromFeilds from '../../components/GetDataFromFeilds/GetDataFromFeilds';
import CheckBoxComponent from '../../components/CheckBox/CheckBox';
import {UploadGallery} from '../../components/UploadGallery/UploadGallery';
import "../../components/css/main.css";
import {navigate} from 'gatsby'

const steps = ['Room Type', 'Room Information', 'Room Facilities', "Room Gallery"];
const placeholders = ["Enter Your Room Name...","Enter Your Room Address...","Enter the Room Number here...",'Enter Description Of Your Property...']
const getInfolabels = ["Room Name","Room Address","Room Number",'Description']
const Types = ["textFeild","textFeild","numbered",'textArea']

const Addrooms = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [PropertyType, setPropertyType] = React.useState("Hotel");
    const [services, setServices] = React.useState({
    breakfast:false,
    lunch:false,
    dinner:false,
    warmwater:false
    });
  const [skipped, setSkipped] = React.useState(new Set<number>());
    const [PropertyName, setPropertyName] = React.useState("");
    const [PropertyAddress, setPropertyAddress] = React.useState("");
    const [PropertyOpenDate, setPropertyOpenDate] = React.useState(Date());
    const [NoOfRooms, setNoOfRooms] = React.useState(0);
    const [PropertyDescription, setPropertyDescription] = React.useState("");


const seters = [setPropertyName,setPropertyAddress,setPropertyOpenDate,setNoOfRooms,setPropertyDescription]
  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleAddRooms = () => {
    setActiveStep(0);
  };

  
  const handleSubmit = () => {
    navigate("/manager/dashboard")
  };

  const content = () =>{
    const notes = ["Standardized service with furnished and decorated, provides facilities such as Flowered bed Rooms etc","Mostly Operated by hotels, resturents and villas with ceiling, tiled floor, good-furniture, fregnance and etc.","Mostly Operated by small hotels and homes without ceiling, tiled floor, good furniture and etc."]
    // const PropertyFacilitiesNotes = ["Standardized service and decoration, some provide facilities such as resturants and meeting room, etc","Mostly Operated by families and indiviual residents and their dwellings.","Usually the detached houses, possible to rent as whole, some provide housekeeper services."]
    const labels = ["Ultra-VIP","Furnished","Non-Furnished"];
    const PropertyFacilitiesLabels = ["Breakfast","Lunch","Dinner","WarmWater"]
      if(activeStep === 0){
        return(<RadioComponent propertyType={PropertyType} titleHeading="Select your property type" labels={labels} notes={notes} setPropertyType={setPropertyType}/>)
      }
      else if(activeStep === 1){
        return(<Box>
        <GetDataFromFeilds placeholders = {placeholders} labels = {getInfolabels} seters={seters} Types={Types}/>
        </Box>)
      }
      else if(activeStep === 2){
        return(<Box>
        <CheckBoxComponent notes={notes} services={PropertyFacilitiesLabels} setServices={setServices} titleHeading="Select the facilities(services) you will provide"/>
        </Box>)
      }
      else if(activeStep === 3){
        return(<Box>
     <UploadGallery hotel={false}/>   
        </Box>)
      }
  }


  return (
    <Box sx={{ width: '80%',margin:"5vh auto", }}>
      <Box>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
              <span className="labels">{label}</span>
              </StepLabel>
            </Step>
          );
        })}
        </Stepper>
        <Box>
            {content()}
            {console.log("property Selected is here",PropertyType)}
        </Box>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
           You have successfully completed the Room 1 Details.<br/>
           Are you willing to submit it? 
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          
            <Button color="primary" variant='outlined' onClick={handleSubmit}>Submit</Button>
          <Box sx={{ flex: '1 1 auto' }} />
            <Button color="secondary" variant='outlined' onClick={handleAddRooms}>Add Rooms</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="secondary" variant='outlined' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
            <Button variant="outlined" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
      </Box>
    </Box>
  );
}

export default Addrooms