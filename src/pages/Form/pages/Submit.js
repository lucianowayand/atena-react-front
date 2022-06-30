import { Box, Stack, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function FormSubmit(props){
    let navigate = useNavigate()

    return(
        <div>
            <br/>
            <h3>Ficamos felizes em te receber, {props.userData.name}!</h3>
            <p>Você se cadastrou com sucesso na plataforma, só para confirmar seus dados inseridos foram:</p>
            <br/>
            <Stack direction='row' spacing={6} sx={{display: 'flex', justifyContent:'space-evenly'}}>
                <Box direction='column' spacing={1} width={1}>
                <h5>Cidade: {props.userData.city}</h5>
                    <h5>Estado: {props.userData.state}</h5>
                    <h5>Endereço: {props.userData.fullAddress}</h5>
                    
                </Box>
                <Box width={1}>
                    <h5>Email: {props.userData.email}</h5>
                    <h5>CPF: {props.userData.cpf}</h5>
                    
                </Box>
            </Stack>
            <p>Clique em prosseguir para continuar ao login!</p>
            <br/>
            <Box sx={{display: 'flex', justifyContent:'flex-end'}}>
                <Button variant='contained' onClick={()=>{navigate('/')}}>prosseguir</Button>
            </Box>
                      
        </div>
    )
}