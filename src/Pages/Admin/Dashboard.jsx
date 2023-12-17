import { Group } from "@mui/icons-material";
import { Box, Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useState, useEffect } from "react";

export default function DashboardAdmin() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState();
  const [selectedUser, setSelectedUser] = useState([]);

  const getUsers = async () => {
    await axios.get('http://localhost:8080/getAllUsers')
    .then(response => {
      if (!(response.status === 200)) {
        throw new Error('There is a problem with the request');
      }
      setUsers(response.data);
    }).catch(error => {
      console.log('There was a problem with the fetch operation:', error);
    })
  };

  const getCount = async () => {
    await axios.get('http://localhost:8080/countUser')
    .then(response => {
      if (!(response.status === 200)) {
        throw new Error('There is a problem with the request');
      }
      setUserCount(response.data);
    }).catch(error => {
      console.log('There was a problem with the fetch operation:', error);
    })
  };

  useEffect(() => {
    getUsers();
    getCount();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'fname', headerName: 'First Name', width: 130 },
    { field: 'lname', headerName: 'Last Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'deleted', headerName: 'Is Deleted', width: 90 },
  ];

  const rows = users.map((row) => ({
    id: row.uid,
    fname: row.fname,
    lname: row.lname,
    email: row.email,
    deleted: row.deleted,
  }));

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    console.log(selectedRowsData);
  };

  return <div className="gradientbg_2">
      <Grid container justify='center' alignItems='center' direction='column'>
        <Box sx={{ bgcolor: '#e6e6e6', height: 785, width: 1600, marginLeft: 30, marginTop: 15, borderRadius: 7 }}>
          <Card sx={{ width: 215, height: 100, marginLeft: 3, marginTop: 5 }}>
             <CardContent>
               <Group sx={{ height: 75, width: 75}}/>
               <Typography marginTop={-8} marginLeft={12}>Total Users</Typography>
               <Typography marginLeft={12}>{userCount}</Typography>
             </CardContent>
           </Card>
          <Typography variant='h5' sx={{ marginLeft: 3, marginTop: 4, textDecoration: 'underline' }}>Users</Typography>
          <Paper sx={{ width: 600, height: 550, marginLeft: 3 }}>
            <DataGrid 
              rows={rows}
              columns={columns}
              initialState={{ 
                pagination: { 
                  paginationModel: { 
                    page: 0, 
                    pageSize: 5 },
                  },
                }} 
              pageSizeOptions={[5, 10]} 
              checkboxSelection
              onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
            />
          </Paper>
        </Box>
      </Grid>
  </div>;

}