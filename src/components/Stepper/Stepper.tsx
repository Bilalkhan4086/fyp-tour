// import * as React from 'react';
// import {Box,Stepper,Step,StepLabel,Button,Typography, FormControl, FormLabel, RadioGroup, FormControlLabel} from '@material-ui/core';

// const steps = ['Property Type', 'Property Information', 'Property Facilities', "Property Gallery"];

// export default function HorizontalLinearStepper() {
//     const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set<number>());

//   const styles = {
//     labels:{
//     '@media (max-width: 499px)': {
//        display:"none"
//      },
//       '@media screen and (min-width: 500px)': {
//         display:"",
//        color:"red"
//     }

//     }
//     }

//   const isStepOptional = (step: number) => {
//     return step === 1;
//   };

//   const isStepSkipped = (step: number) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Box sx={{ width: '80%',display:"flex",justifyContent:"center",margin:"auto", }}>
//       <Box>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps: { completed?: boolean } = {};
//           const labelProps: {
//             optional?: React.ReactNode;
//           } = {};
          
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>
//               <span style={styles.labels}>{label}</span>
//               </StepLabel>
//             </Step>
//           );
//         })}
//         </Stepper>
//         <Box>
//             {}
//         </Box>
//       {activeStep === steps.length ? (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed - you&apos;re finished
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//             <Box sx={{ flex: '1 1 auto' }} />
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//             <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
//               Back
//             </Button>
//             <Box sx={{ flex: '1 1 auto' }} />
            
//             <Button onClick={handleNext}>
//               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//             </Button>
//           </Box>
//         </React.Fragment>
//       )}
//       </Box>
//     </Box>
//   );
// }
