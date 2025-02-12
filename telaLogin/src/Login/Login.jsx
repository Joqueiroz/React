import * as React from "react";
import TextField from "@mui/material/TextField"; //input
import Button from "@mui/material/Button";//botão
import Avatar from "@mui/material/Avatar";//icone de cadeado
import Box from "@mui/material/Box";//espécie de uma div
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";//icone
import Container from "@mui/material/Container";//div principal
import Typography from "@mui/material/Typography";//letra
import { useState } from "react";
import api from "../axios/axios"

function Login() {

    const [user, setUser] = useState({
        email:"",
        password:""
    })
    const onChange = (event) =>{
        const{name, value} = event.target;
        setUser({...user,[name]:value})
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        login1();
    }

    async function login1 (){
        await api.postLogin(user).then(
            (response) => {
                alert(response.data.message)
            },
            (error)=>{
                console.log(error)
                alert(error.response.data.error)
            }
        )
    }

    return(
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop:8,
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
                <Avatar sx={{margin:1, backgroundColor:"purple	"}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Vio
                </Typography>
                <Box component="form" sx={{marginTop:3}} onSubmit={handleSubmit} noValidate>
                    <TextField 
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    margin="normal"
                    value={user.email}
                    onChange={onChange}
                    />
                    <TextField
                    required
                    fullWidth
                    id="password"
                    label="Senha"
                    name="password"
                    margin="normal"
                    type="password"
                    value={user.password}
                    onChange={onChange}
                    />
                    <Button sx={{mt:3, mb:2, backgroundColor:"purple"}}
                    fullWidth
                    type="submit"
                    variant="contained"

                    >Entrar</Button>
                </Box>
            </Box>
        </Container>
    );
}
export default Login;
