import { Stack, TextField } from "@mui/material"

export default function FormPersonalData(){
    return (
        <div>
            <h3>Dados de acesso na plataforma:</h3>
            <br/>
            <form>
                <Stack spacing={3}>
                    <Stack direction='row' spacing={2}>
                        <TextField label='Nome' name='name' required={true} fullWidth={true}/>
                        <TextField label='Sobrenome' name='surname' required={true} fullWidth={true}/>
                    </Stack>
                    <TextField label='CPF' name='cpf' required={true}/>
                </Stack>
            </form>
            <br/>
        </div>
    )
}