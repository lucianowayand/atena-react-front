import { useState } from "react";
import { Button, Stack } from "@mui/material";
import FormStepper from './FormStepper.js'

import FirstPage from "./views/FormUserData";
import SecondPage from "./views/FormPersonalData";
import ThirdPage from "./views/FormAddress";

export default function PageSorter() {
    const [currentComponent, setComponent] = useState('FormUserData')
    const [activeStep, setActiveStep] = useState(0)
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: '',
        surname:'',
        cpf: '',
        followingNews: false,
        followingSales: false,
        city: '',
        state: '',
        cep: '',
        fullAddress: '',
        addressNumber: ''
    })

    function nextStep() {
        if (activeStep < 2) {
            setActiveStep((activeStep) => activeStep + 1)
            setComponent(componentList[activeStep + 1])
        }
    }
    function previousStep() {
        if (activeStep !== 0) {
            setActiveStep((activeStep) => activeStep - 1)
            setComponent(componentList[activeStep - 1])
        }
    }

    const handleChange = input => event => {
        setUserData(prevUserData => ({...prevUserData, [input]: event.target.value}))
        console.log(userData)
    }
    const handleSwitch = input => event => {
        setUserData(prevUserData => ({...prevUserData, [input]: event.target.checked}))
        console.log(userData)
    }


    const componentList = ['FormUserData', 'FormPersonalData', 'FormAddress']

    return (
        <>
            <FormStepper activeStep={activeStep} />
            <br />
            {currentComponent === 'FormUserData' ?
                <FirstPage user={userData} handleChange={handleChange}/>
                : null}
            {currentComponent === 'FormPersonalData' ?
                <SecondPage user={userData} handleChange={handleChange} handleSwitch={handleSwitch}/>
                : null}
            {currentComponent === 'FormAddress' ?
                <ThirdPage user={userData} handleChange={handleChange}/>
                : null}
            <br />

            {currentComponent !== 'FormAddress' ?
                <Stack direction='row' justifyContent='space-around' spacing={64}>
                    <Button onClick={previousStep} variant='contained'>Voltar</Button>
                    <Button onClick={nextStep} variant='contained'>Próximo</Button>
                </Stack>
                :
                <Stack direction='row' justifyContent='space-around' spacing={64}>
                    <Button onClick={previousStep} variant='contained'>Voltar</Button>
                    <Button onClick={previousStep} variant='contained'>Concluir</Button>
                </Stack>
            }


        </>
    )
}