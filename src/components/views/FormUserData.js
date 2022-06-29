import { TextField, Stack } from "@mui/material"

export default function FormUserData(){

    return (
        <div>
            <h3>Dados de acesso na plataforma:</h3>
            <br/>
            <form>
                <Stack spacing={3}>
                    <TextField label='Email' name='email' required={true}/>
                    <TextField label='Password' name='password' type='password' required={true}/>
                </Stack>
            </form>
            <br/>
        </div>
    )
}