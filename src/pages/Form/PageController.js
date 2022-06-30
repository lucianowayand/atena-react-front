import { Button, Stack } from "@mui/material";
import FormStepper from '../../components/Form/FormStepper.js'

import FirstPage from "./pages/UserData";
import SecondPage from "./pages/PersonalData";
import ThirdPage from "./pages/Address";

export default function FormPageController(props){
    return(
        <>
            <FormStepper activeStep={props.activeStep} />
            <br />
            {props.currentComponent === 'FormUserData' ?
                <FirstPage user={props.userData} handleChange={props.handleChange}/>
                : null}
            {props.currentComponent === 'FormPersonalData' ?
                <SecondPage user={props.userData} handleChange={props.handleChange} handleSwitch={props.handleSwitch}/>
                : null}
            {props.currentComponent === 'FormAddress' ?
                <ThirdPage user={props.userData} handleChange={props.handleChange}/>
                : null}
            <br />

            {props.currentComponent !== 'FormAddress' ?
                <Stack direction='row' justifyContent='space-around' spacing={64}>
                    <Button onClick={props.previousStep} variant='contained'>Voltar</Button>
                    <Button onClick={props.nextStep} variant='contained'>Próximo</Button>
                </Stack>
                :
                <Stack direction='row' justifyContent='space-around' spacing={64}>
                    <Button onClick={props.previousStep} variant='contained'>Voltar</Button>
                    <Button onClick={props.register} variant='contained'>Concluir</Button>
                </Stack>
            } 
        </>
    )
}