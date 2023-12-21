import { DeliveryDiningOutlined, ExpandLess, ExpandMore, PeopleOutlined } from "@mui/icons-material";
import { AppBar, Avatar, Collapse, Drawer, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

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

export default function AdminLayout( {user, setUser} ) {
  const [name, setName] = useState("Admin Admin");
  const [anchorEl, setAnchorEl] = useState(null);
  
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let navigate = useNavigate();

  const [loader, setLoader] = useState(1);

  const logout = () => {
      setUser(null);
      setLoader(Math.random()*1000);
  }

  function concatName() {
    let fname = user.fname;
    let lname = user.lname;

    let result = fname.concat(" ", lname);
    setName(result);
    setLoader(Math.random()*1000);
  }

  useEffect(() => {
    if(name === "Admin Admin") {
      concatName();
    }
    redirect();
  }, [loader])
  
  function redirect() {
    if(user === null) {
      navigate('/login');
    } else if(user !== null) {
      if(user.role === 'user'){
        navigate('/customer');
      } else if(user.role === 'courier') {
        navigate('/courier')
      } else if(user.role === 'admin') {
        navigate('/admin')
      }
    }
  }

  return(
    <>
      <Grid container justify='center' alignItems='center' direction='column'>
        <Grid item>
          <AppBar position="absolute">
            <Toolbar sx={{ bgcolor: 'white' }}>
              <img src='/images/SugoLogo.png' alt='Sugo Logo' height='55px' style={{ marginRight: '10px', marginLeft: '100px' }}></img>
              <img src='/images/SugoBanner.png' alt='Sugo Banner' height='55px'></img>
              <Tooltip title={name} arrow>
                <IconButton onClick={handleClick} sx={{ marginLeft: 145 }}>
                  <Avatar {...stringAvatar(name)}  />
                </IconButton>
              </Tooltip>
              <Menu id='user-menu' anchorEl={anchorEl} open={openMenu} onClose={handleClose} >
                <MenuItem><Typography textAlign='center'>Profile</Typography></MenuItem>
                <MenuItem onClick={logout}><Typography textAlign='center'>Logout</Typography></MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>

      <Outlet />
    </>
  )
}