import { Paper, TextField, Stack, Box, Button } from "@mui/material"
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <Paper elevation={3} className="login-form">
            <h1>Atena.io - Sign in</h1>
            <p>Insira suas credenciais para se conectar!</p>
            <Box sx={{mt: 4}}>
                <form>
                    <Stack spacing={3}>
                        <TextField label='Email' name='email' required={true}/>
                        <TextField label='Password' name='password' type='password' required={true}/>
                    </Stack>
                    <Box sx={{display: 'flex', justifyContent:'space-evenly', mt: 6}}>
                        <Box sx={{width:1}}>
                            <Link to='/cadastro' >{'>'} Ainda não é cadastrado? Clique aqui.</Link>
                        </Box>
                        
                        <Button variant='contained'>prosseguir</Button>
                    </Box>
                </form>
            </Box>
            
        </Paper>
    )
}



