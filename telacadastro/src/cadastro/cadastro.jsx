import * as React from "react";
import Textfield from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Cadastro() {

    const [user, setUser] = useState({
        email: "",
        Password: "",
        age: 0,
        name: ""    
    })

    const onChange = (event) =>{
        const {name, value} = event.target;
        setUser({...user, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Email:" +user.email+ " " +"Senha:" +user.password + " " +"Idade:" +user.age+ " " +"Nome:" +user.name)
    }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ margin: 1, backgroundColor:"#90D5FF" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastre-se   
        </Typography>
        <Box component="form" sx={{ marginTop: 1 }} onSubmit={handleSubmit} noValidate>

          <Textfield
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            margin="normal"
            value={user.email}
            onChange={onChange}
          />

          <Textfield
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

            <Textfield
            required
            fullWidth
            id="age"
            label="Idade"
            name="age"
            margin="normal"
            type="number"
            value={user.age}
            onChange={onChange}
          />

            <Textfield
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            margin="normal"
            value={user.name}
            onChange={onChange}
          />

          <Button
            sx={{ mt: 3, mb: 2, backgroundColor:"#90D5FF"}}
            fullWidth
            type="submit"
            variant="contained"
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default Cadastro;
