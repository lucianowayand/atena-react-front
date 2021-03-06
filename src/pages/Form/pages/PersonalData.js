import { Stack, TextField, FormControlLabel, Switch } from "@mui/material"

export default function FormPersonalData(props){

    return (
        <div>
            <h3>Informações pessoais:</h3>
            <br/>
            <form>
                <Stack spacing={3}>
                    <Stack direction='row' spacing={2}>
                        <TextField label='Nome' name='name' defaultValue={props.user.name} onChange={props.handleChange('name')} required={true} fullWidth={true}/>
                        <TextField label='Sobrenome' name='surname' defaultValue={props.user.surname} onChange={props.handleChange('surname')} required={true} fullWidth={true}/>
                    </Stack>
                    <TextField label='CPF' name='cpf' defaultValue={props.user.cpf} onChange={props.handleChange('cpf')} required={true}/>
                    <Stack direction='row' spacing={2}>
                        <FormControlLabel control={
                            <Switch defaultChecked={props.user.followingNews} onChange={props.handleSwitch('followingNews')}/>
                            } label="Desejo receber novidades" 
                        />
                        <FormControlLabel control={
                            <Switch defaultChecked={props.user.followingSales} followingNews onChange={props.handleSwitch('followingSales')}/>
                            } label="Desejo receber promoções" 
                        />
                    </Stack>
                </Stack>
            </form>
            <br/>
        </div>
    )
}