import { DeliveryDiningOutlined, ExpandLess, ExpandMore, PeopleOutlined } from "@mui/icons-material";
import { AppBar, Avatar, Collapse, Drawer, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function AdminLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openU, setOpenU] = useState(true);
  const [openC, setOpenC] = useState(true);

  const openMenu = Boolean(anchorEl);

  const handleClickNestedU = () => {
    setOpenU(!openU);
  };
  const handleClickNestedC = () => {
    setOpenC(!openC);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawerWidth = 240;
    return(
      <>
        <Grid container justify='center' alignItems='center' direction='column'>
          <Grid item>
            <AppBar>
              <Toolbar sx={{ bgcolor: 'white' }}>
              <Typography variant='overline' sx={{ marginLeft: 30, color: 'black' }}>Welcome, Admin!</Typography>
                <Drawer sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box'} }} variant="permanent" anchor="left">
                  <Toolbar> 
                    <img src='/images/SugoLogo.png' alt='Sugo Logo' height='55px' style={{marginLeft: '-10px'}}></img>
                    <img src='/images/SugoBanner.png' alt='Sugo Banner' height='55px'></img>
                  </Toolbar>
                  <List>
                    <ListItemButton onClick={handleClickNestedU}>
                      <ListItemIcon>
                        <PeopleOutlined />
                      </ListItemIcon>
                      <ListItemText primary='Users' />
                      {openU ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openU} timeout='auto' unmountOnExit>
                      <List disablePadding>
                        <ListItemButton sx={{ paddingLeft: 6}}>
                          <ListItemText primary='User List' />
                        </ListItemButton>
                        <ListItemButton sx={{ paddingLeft: 6}}>
                          <ListItemText primary='Add User' />
                        </ListItemButton>
                        <ListItemButton sx={{ paddingLeft: 6}}>
                          <ListItemText primary='Delete User' />
                        </ListItemButton>
                      </List>
                    </Collapse>
                    <ListItemButton onClick={handleClickNestedC}>
                      <ListItemIcon>
                        <DeliveryDiningOutlined />
                      </ListItemIcon>
                      <ListItemText primary='Couriers' />
                      {openC ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openC} timeout='auto' unmountOnExit>
                      <List disablePadding>
                        <ListItemButton sx={{ paddingLeft: 6}}>
                          <ListItemText primary='Courier List' />
                        </ListItemButton>
                        <ListItemButton sx={{ paddingLeft: 6}}>
                          <ListItemText primary='Add Courier' />
                        </ListItemButton>
                        <ListItemButton sx={{ paddingLeft: 6}}>
                          <ListItemText primary='Delete Courier' />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </List>
                </Drawer>
                <Tooltip title='Admin' arrow>
                  <IconButton onClick={handleClick} sx={{ marginLeft: 145 }}>
                    <Avatar {...stringAvatar('Admin Admin')}  />
                  </IconButton>
                </Tooltip>
                <Menu id='user-menu' anchorEl={anchorEl} open={openMenu} onClose={handleClose} >
                  <MenuItem><Typography textAlign='center'>Profile</Typography></MenuItem>
                  <MenuItem><NavLink to='/' style={{textDecoration: 'none', color: 'black'}}><Typography textAlign='center'>Logout</Typography></NavLink></MenuItem>
                </Menu>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>

        <Outlet />
      </>
    )
}