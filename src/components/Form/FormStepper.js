import { Stepper, Step, StepLabel } from "@mui/material";

export default function FormStepper(props) {
    return (
        <Stepper activeStep={props.activeStep}>
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
    )
}