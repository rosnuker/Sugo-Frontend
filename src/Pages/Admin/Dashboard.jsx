import { Group } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Grid, Paper, Tab, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Dashboard.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function DashboardAdmin() {
  const [users, setUsers] = useState([]);
  const [couriers, setCouriers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [userCount, setUserCount] = useState();
  const [courierCount, setCourierCount] = useState();
  const [adminCount, setAdminCount] = useState();
  const [selectedUser, setSelectedUser] = useState([]);
  const [value, setValue] = useState('users');

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

  const getUserCount = async () => {
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

  const getCouriers = async () => {
    await axios.get('http://localhost:8080/getAllCouriers')
    .then(response => {
      if (!(response.status === 200)) {
        throw new Error('There is a problem with the request');
      }
      setCouriers(response.data);
    }).catch(error => {
      console.log('There was a problem with the fetch operation:', error);
    })
  };

  const getCourierCount = async () => {
    await axios.get('http://localhost:8080/countUser')
    .then(response => {
      if (!(response.status === 200)) {
        throw new Error('There is a problem with the request');
      }
      setCourierCount(response.data);
    }).catch(error => {
      console.log('There was a problem with the fetch operation:', error);
    })
  };

  const getAdmins = async () => {
    await axios.get('http://localhost:8080/getAllAdmins')
    .then(response => {
      if (!(response.status === 200)) {
        throw new Error('There is a problem with the request');
      }
      setAdmins(response.data);
    }).catch(error => {
      console.log('There was a problem with the fetch operation:', error);
    })
  };

  const getAdminCount = async () => {
    await axios.get('http://localhost:8080/countAdmin')
    .then(response => {
      if (!(response.status === 200)) {
        throw new Error('There is a problem with the request');
      }
      setAdminCount(response.data);
    }).catch(error => {
      console.log('There was a problem with the fetch operation:', error);
    })
  };

  useEffect(() => {
    getUsers();
    getCouriers();
    getAdmins();
    getUserCount();
    getCourierCount();
    getAdminCount();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'fname', headerName: 'First Name', width: 130 },
    { field: 'lname', headerName: 'Last Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'deleted', headerName: 'Is Deleted', width: 90 },
  ];

  const rows1 = users.map((row) => ({
    id: row.uid,
    fname: row.fname,
    lname: row.lname,
    email: row.email,
    deleted: row.deleted,
  }));

  const rows2 = couriers.map((row) => ({
    id: row.cid,
    fname: row.fname,
    lname: row.lname,
    email: row.email,
    deleted: row.deleted,
  }));

  const rows3 = admins.map((row) => ({
    id: row.aid,
    fname: row.fname,
    lname: row.lname,
    email: row.email,
    deleted: row.deleted,
  }));

  const onRowsSelectionHandler1 = (ids) => {
    const selectedRowsData = ids.map((id) => rows1.find((row) => row.id === id));
    setSelectedUser(selectedRowsData);
    console.log(selectedRowsData);
  };

  const onRowsSelectionHandler2 = (ids) => {
    const selectedRowsData = ids.map((id) => rows2.find((row) => row.id === id));
    setSelectedUser(selectedRowsData);
  };

  const onRowsSelectionHandler3 = (ids) => {
    const selectedRowsData = ids.map((id) => rows3.find((row) => row.id === id));
    setSelectedUser(selectedRowsData);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <div className="gradientbg_2">
      <Grid container justify='center' alignItems='center' direction='column'>
        <Box sx={{ bgcolor: '#e6e6e6', height: 830, width: 1800, marginLeft: -1, marginTop: 12, borderRadius: 7 }}>
          <Card sx={{ width: 215, height: 100, marginLeft: 3, marginTop: 5 }}>
             <CardContent>
               <Group sx={{ height: 75, width: 75}}/>
               <Typography marginTop={-8} marginLeft={12}>Total Users</Typography>
               <Typography marginLeft={12}>{userCount}</Typography>
             </CardContent>
           </Card>
           <Card sx={{ width: 229, height: 100, marginLeft: 32, marginTop: -12.5 }}>
             <CardContent>
               <Group sx={{ height: 75, width: 75}}/>
               <Typography marginTop={-8} marginLeft={12}>Total Couriers</Typography>
               <Typography marginLeft={12}>{courierCount}</Typography>
             </CardContent>
           </Card>
           <Card sx={{ width: 221, height: 100, marginLeft: 63, marginTop: -12.5 }}>
             <CardContent>
               <Group sx={{ height: 75, width: 75}}/>
               <Typography marginTop={-8} marginLeft={12}>Total Admins</Typography>
               <Typography marginLeft={12}>{adminCount}</Typography>
             </CardContent>
           </Card>

          <Box sx={{ marginLeft: 25, marginTop: 1}}>
          <TabContext value={value} sx={{ marginLeft: 2}}>
            <TabList value={value} textColor="secondary" indicatorColor="secondary" onChange={handleChange}>
              <Tab value="users" label="Users" />
              <Tab value="couriers" label="Couriers" />
              <Tab value="admins" label="Admins" />
            </TabList>
            <TabPanel value="users">
              <Paper sx={{ width: 672, height: 527, marginLeft: -25 }}>
              <DataGrid 
                rows={rows1}
                columns={columns}
                getRowId={(row) => 'u' + row.uid}
                initialState={{ 
                  pagination: { 
                    paginationModel: { 
                      page: 0, 
                      pageSize: 8 },
                    },
                  }} 
                pageSizeOptions={ [8] }
                checkboxSelection
                onRowSelectionModelChange={(ids) => onRowsSelectionHandler1(ids)}
              />
              </Paper>
              <Button variant="contained" color="success" sx={{ marginTop: 2, marginLeft: -11 }}>Create User</Button>
              <Button variant="contained" color="warning" sx={{ marginTop: 2, marginLeft: 3 }}>Update User</Button>
              <Button variant="contained" color="error" sx={{ marginTop: 2, marginLeft: 3 }}>Delete User</Button>
            </TabPanel>
            <TabPanel value="couriers">
            <Paper sx={{ width: 672, height: 527, marginLeft: -25 }}>
              <DataGrid 
                rows={rows2}
                columns={columns}
                getRowId={(row) => 'c' + row.cid}
                initialState={{ 
                  pagination: { 
                    paginationModel: { 
                      page: 0, 
                      pageSize: 8 },
                    },
                  }} 
                pageSizeOptions={ [8] }
                checkboxSelection
                onRowSelectionModelChange={(ids) => onRowsSelectionHandler2(ids)}
              />
              </Paper>
              <Button variant="contained" color="success" sx={{ marginTop: 2, marginLeft: -16 }}>Create Courier</Button>
              <Button variant="contained" color="warning" sx={{ marginTop: 2, marginLeft: 3 }}>Update Courier</Button>
              <Button variant="contained" color="error" sx={{ marginTop: 2, marginLeft: 3 }}>Delete Courier</Button>
            </TabPanel>
            <TabPanel value="admins">
            <Paper sx={{ width: 672, height: 527, marginLeft: -25 }}>
              <DataGrid 
                rows={rows3}
                columns={columns}
                getRowId={(row) => 'a' + row.aid}
                initialState={{ 
                  pagination: { 
                    paginationModel: { 
                      page: 0, 
                      pageSize: 8 },
                    },
                  }} 
                pageSizeOptions={ [8] }
                checkboxSelection
                onRowSelectionModelChange={(ids) => onRowsSelectionHandler3(ids)}
              />
              </Paper>
              <Button variant="contained" color="success" sx={{ marginTop: 2, marginLeft: -11 }}>Create Admin</Button>
              <Button variant="contained" color="warning" sx={{ marginTop: 2, marginLeft: 3 }}>Update Admin</Button>
              <Button variant="contained" color="error" sx={{ marginTop: 2, marginLeft: 3 }}>Delete Admin</Button>
            </TabPanel>
          </TabContext>
          </Box>
        </Box>
      </Grid>
  </div>;

}