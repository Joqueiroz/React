import { useState, useEffect } from 'react'
// Imports para criação de tabela
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
// TableHead é onde colocamos os titulos
import TableHead from '@mui/material/TableHead';
// TableBody é onde colocamos o conteúdo
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import api from "./axios/axios"


function App() {
  const [users, setEvento] = useState([]);

  async function getEventos (){
    //Chamada da api
    await api.getEventos().then(
      (response)=>{
        console.log(response.data.events)
        setEvento(response.data.events)
      },
      (error)=>{
        console.log("Erro", error)
      }
    )
  }

  const listEvento = users.map ((events)=>{
    return(
      <TableRow key={events.id_evento}>
        <TableCell align='center'>{events.nome}</TableCell>
        <TableCell align='center'>{events.descricao}</TableCell>
        <TableCell align='center'>{events.data_hora}</TableCell>
        <TableCell align='center'>{events.local}</TableCell>
      </TableRow>
    )
  })

  useEffect(()=>{
    //Aqui devemos criar ou chamar uma função
    getEventos();
  },[]);

  return (
    <div>
      <h4 style={{ textAlign:"center"}}>Lista de Eventos</h4>
      <TableContainer component={Paper} style={{margin:"2px"}}>
        <Table size='small'>
          <TableHead style={{backgroundColor:"purple", borderStyle:"solid"}} >
            <TableRow>
              <TableCell align='center'>
                Nome
              </TableCell>
              <TableCell align='center'>
                Descrição
              </TableCell>
              <TableCell align='center'>
                Data Hora
              </TableCell>
              <TableCell align='center'>
                Local
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listEvento}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
