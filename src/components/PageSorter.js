import { useState } from "react";
import { Button, Stack } from "@mui/material";
import FormStepper from './FormStepper.js'
import { api } from "../services/api.js";

import FirstPage from "./views/FormUserData";
import SecondPage from "./views/FormPersonalData";
import ThirdPage from "./views/FormAddress";

export default function PageSorter() {
    const componentList = ['FormUserData', 'FormPersonalData', 'FormAddress']

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
        addressNumber: '',
        addressInfo: null
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
    
    function register(){
        api.post('/user', userData).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })

    }

    const handleChange = input => event => {
        if(event.target.value !== ''){
            setUserData(prevUserData => ({...prevUserData, [input]: event.target.value}))
        } else {
            setUserData(prevUserData => ({...prevUserData, [input]: null}))
        }
    }
    const handleSwitch = input => event => {
        setUserData(prevUserData => ({...prevUserData, [input]: event.target.checked}))

    }

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
                    <Button onClick={register} variant='contained'>Concluir</Button>
                </Stack>
            }
        </>
    )
}