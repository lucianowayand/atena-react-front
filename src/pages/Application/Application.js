import { parseCookies, destroyCookie } from "nookies";
import { Paper, Stack, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Application(){
    let user = JSON.parse(parseCookies('USER').USER)

    let navigate = useNavigate()

    return(
        <Paper elevation={3} className="login-form">
            <h1>Application dashboard</h1>
            <Box sx={{display: 'flex', justifyContent:'space-evenly'}}>
                <Stack width={1}>
                    <h4>Nome:{user.name}</h4>
                    <h4>Sobrenome:{user.surname}</h4>
                    <h4>Email:{user.email}</h4>
                    <h4>CPF:{user.cpf}</h4>
                </Stack>
                <Stack width={1}>
                    <h4>Cidade:{user.city}</h4>
                    <h4>Estado:{user.state}</h4>
                    <h4>Endereço: {user.fullAddress}, {user.addressNumber} {user.addressInfo}</h4>
                    <h4>CEP:{user.cep}</h4>
                </Stack>
            </Box>
            <br/>
            <Box sx={{display: 'flex', justifyContent:'space-evenly'}}>
                <Button variant='contained' color="error" onClick={() =>{
                    destroyCookie(undefined, 'USER')
                    navigate('/')
                }}>Sair</Button>
            </Box>
            
            
        </Paper>
    )
}