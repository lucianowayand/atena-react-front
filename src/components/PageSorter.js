import { useState } from "react";
import { Button, Stack, Stepper, Step, StepLabel } from "@mui/material";

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
                <StepLabel>Acesso</StepLabel>
            </Step>
            <Step>
                <StepLabel>Dados Pessoais</StepLabel>
            </Step>
            <Step>
                <StepLabel>Endereço</StepLabel>
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
        <br/>
        <Stack direction='row' justifyContent='space-around' spacing={64}>
            <Button onClick={previousStep} variant='contained'>Voltar</Button>
            <Button onClick={nextStep} variant='contained'>Próximo</Button>
            
        </Stack>
        
        </>
    )
}