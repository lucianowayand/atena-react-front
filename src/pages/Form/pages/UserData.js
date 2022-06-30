import { TextField, Stack } from "@mui/material"

export default function FormUserData(props){

    return (
        <div>
            <h3>Dados de acesso na plataforma:</h3>
            <br/>
            <form>
                <Stack spacing={3}>
                    <TextField label='Email' name='email' defaultValue={props.user.email} onChange={props.handleChange('email')} required={true}/>
                    <TextField label='Password' name='password' type='password' defaultValue={props.user.password} onChange={props.handleChange('password')} required={true}/>
                </Stack>
            </form>
            <br/>
        </div>
    )
}