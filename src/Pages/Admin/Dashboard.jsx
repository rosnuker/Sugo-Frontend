import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DashboardAdmin() {
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    axios.get('http://localhost:8080/getAllUsers')
    .then(response => {
      if (!(response.status === 200)) {
        throw new Error('There is a problem with the request');
      }
      console.log(response)
      setUsers(response.data);
    }).catch(error => {
      console.log('There was a problem with the fetch operation:', error)
    })
  }, [])

  return (
    <div className="gradientbg_2">
      <Grid container justify='center' alignItems='center' direction='column'>
        <Box sx={{ bgcolor: '#e6e6e6', height: 785, width: 1600, marginLeft: 30, marginTop: 15, borderRadius: 7 }}>
          <Typography variant='h5' sx={{ marginLeft: 3, marginTop: 4, textDecoration: 'underline' }}>Users</Typography>
          <TableContainer component={Paper} sx={{marginTop: 1, marginLeft: 3, height: 365, width: 550}}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>First Name</TableCell>
                  <TableCell align='right' sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
                  <TableCell align='center' sx={{ fontWeight: 'bold' }}>Email</TableCell>
                  <TableCell align='right' sx={{ fontWeight: 'bold' }}>isDeleted</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row, index) => (
                  <TableRow key={'user_' + index} sx={{ '&: last-child td, &: last-child th': { border: 0} }}>
                    <TableCell component='th' scope='row'>{row.fname}</TableCell>
                    <TableCell align="left">{row.lname}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{String(row.deleted)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </div>
  )
}