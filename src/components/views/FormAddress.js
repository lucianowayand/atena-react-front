import { Stack, TextField } from "@mui/material"

export default function FormAddress(props){
    return (
        <div>
            <div>
            <h3>Endereço de entrega:</h3>
            <br/>
            <form>
                <Stack spacing={3}>
                    <Stack direction='row' spacing={2}>
                        <TextField label='Cidade' name='city' onChange={props.handleChange('city')} required={true} fullWidth={true}/>
                        <TextField label='Estado' name='state' onChange={props.handleChange('state')} required={true} fullWidth={true}/>
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <TextField label='Endereço' name='fullAddress' onChange={props.handleChange('fullAddress')} required={true} fullWidth={true}/>
                        <TextField label='Número' name='addressNumber' onChange={props.handleChange('addressNumber')} required={true} />
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <TextField label='CEP' name='cep' onChange={props.handleChange('cep')} required={true} fullWidth={true}/>
                        <TextField label='Complemento' name='state' onChange={props.handleChange('addressInfo')} fullWidth={true}/>
                    </Stack>
                    
                </Stack>
            </form>
            <br/>
        </div>
        </div>
    )
}

