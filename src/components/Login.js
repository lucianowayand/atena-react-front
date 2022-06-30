import { Paper, TextField, Stack, Box, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { api } from "../services/api"
import { setCookie } from "nookies"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    })

    const handleChange = input => event =>{
        setLoginData(prevLoginData => ({ ...prevLoginData, [input]: event.target.value }))
        console.log(loginData)
    }

    const { authenticated, setAuthenticated} = useState(false)

    let navigate = useNavigate()

    useEffect(()=>{
        navigate('/cadastro')
    }, [authenticated])

    function login() {
        api.post('/auth', loginData).then((res) => {
            let user = JSON.stringify(res.data.user)
            setCookie(undefined, 'USER', user, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7 // 7 days
            })
            console.log(user)
            setAuthenticated(true)
            
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



