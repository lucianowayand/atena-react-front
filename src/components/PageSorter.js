import { useState } from "react";
import { Button, Box, Stepper, Step, StepLabel } from "@mui/material";

import FirstPage from "./views/FirstPage";
import SecondPage from "./views/SecondPage";
import ThirdPage from "./views/ThirdPage";

export default function PageSorter(){
    const [currentComponent, setComponent] = useState('FirstPage')
    const [ activeStep, setActiveStep] = useState(0)

    const componentList = ['FirstPage','SecondPage','ThirdPage']

    function nextStep() {
        if(activeStep < 2){
            setActiveStep((activeStep) => activeStep + 1)
            setComponent(componentList[activeStep + 1])
        }
    }
    function previousStep() {
        if(activeStep !==0){
            setActiveStep((activeStep) => activeStep - 1)
            setComponent(componentList[activeStep - 1])
        }
    }

    return(
        <>
        <Stepper activeStep={activeStep}>
            <Step>
                <StepLabel>FirstPage</StepLabel>
            </Step>
            <Step>
                <StepLabel>SecondPage</StepLabel>
            </Step>
            <Step>
                <StepLabel>ThirdPage</StepLabel>
            </Step>
        </Stepper>
        <br/>
        {currentComponent === 'FirstPage' ?
            <FirstPage/>
            : null}
        {currentComponent === 'SecondPage' ?
            <SecondPage/>
            : null}
        {currentComponent === 'ThirdPage' ?
            <ThirdPage/>
            : null}

        <Box sx={{display:'flex', justifyContent:'flex-end'}}>
            <Button onClick={previousStep} variant='contained'>Previous</Button>
            <Button onClick={nextStep} variant='contained'>Next</Button>
            
        </Box>
        
        </>
    )
}