import { Paper, TextField, Stack, Box, Button } from "@mui/material"
import { useState } from "react"
import { Link } from 'react-router-dom'
import { api } from "../services/api"

export default function Login(){
    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    })

    const handleChange = input => event =>{
        setLoginData(prevLoginData => ({ ...prevLoginData, [input]: event.target.value }))
        console.log(loginData)
    }

    function login() {
        api.post('/auth', loginData).then((res) => {
            console.log(res)
        }).catch((error) => {
            alert(error)
        })
    }

    return(
        <Paper elevation={3} className="login-form">
            <h1>Atena.io - Sign in</h1>
            <p>Insira suas credenciais para se conectar!</p>
            <Box sx={{mt: 4}}>
                <form>
                    <Stack spacing={3}>
                        <TextField label='Email' name='email' onChange={handleChange('email')} required={true}/>
                        <TextField label='Password' name='password' type='password' onChange={handleChange('password')} required={true}/>
                    </Stack>
                    <Box sx={{display: 'flex', justifyContent:'space-evenly', mt: 6}}>
                        <Box sx={{width:1}}>
                            <Link to='/cadastro' >{'>'} Ainda não é cadastrado? Clique aqui.</Link>
                        </Box>
                        <Button variant='contained' onClick={login}>prosseguir</Button>
                    </Box>
                </form>
            </Box>
            
        </Paper>
    )
}



