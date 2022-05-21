import * as React from 'react';
import {Box,Stepper,Step,StepLabel,Button,Typography, FormControl, FormLabel, RadioGroup, FormControlLabel} from '@material-ui/core';
import { Radio } from 'theme-ui';
import RadioComponent from '../../components/Radio/Radio';
import GetDataFromFeilds from '../../components/GetDataFromFeilds/GetDataFromFeilds';
import CheckBoxComponent from '../../components/CheckBox/CheckBox';
import UploadCinc from '../../components/UploadGallery/UploadCnic';
import "../css/main.css";
import {navigate} from 'gatsby'

const steps = ['Personal Information', "Required Gallery"];
const placeholders = ["Enter Your Full Name...","Enter Your Email Address...","Enter the Phone Number...",'Enter Your Mobile Number...','Enter your house address','Enter the CINC Number...','Enter Your Occupation...','Enter your website you can also use facebook profile link...','Enter you instagram id...','Enter you facebook id...','Enter you Twitter id...']
const getInfolabels = ["FullName","Email Address","Phone Number","Moblie Number",'Website Link','Instagram ID','Twitter ID','Facebook ID']
const Types = ["textFeild","textFeild","textFeild",'textFeild',"textFeild","textFeild","textFeild","textFeild"]

const CreateProfile = () => {
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

  const handleAddDetails = () => {
    navigate("/profile")
  };

  
  const handleSubmit = () => {
    navigate("/manager/dashboard")
  };

  const content = () =>{
    if(activeStep === 0){
        return(<Box>
          <GetDataFromFeilds placeholders = {placeholders} labels = {getInfolabels} seters={seters} Types={Types}/>
          </Box>)}
      else if(activeStep === 1){
        return(
          <Box>
            <UploadCinc/>
          </Box>
        )
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
            <Button color="secondary" variant='outlined' onClick={handleAddDetails}> Veiw Profile</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="secondary" variant='outlined' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
            <Button color="primary" variant='outlined' onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
      </Box>
    </Box>
  );
}

export default CreateProfile