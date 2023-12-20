import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Drawer } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import * as React from 'react';
import { NavLink, useNavigate } from "react-router-dom";


import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from 'react';
// Import other icons as needed


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  export default function CustomerDashboard( {user, setUser} ) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
    

    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
      setIsDrawerOpen(false);
    };

    let navigate = useNavigate();

    const logout = () => {
      setUser(null);
      setLoader(Math.random()*1000);
    }

    const [loader, setLoader] = useState(1);

    useEffect(() => {
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

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >

        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (

      <div className='gradientbg_2'>
        <Box
          sx={{
            width: '200px',
            height: '200px',
            backgroundColor: '#ccc', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            position: 'absolute',
            top: '250px',
            left: '300px',
          }}
          onClick={() => {
            // Handle click event for the box
            console.log('Box clicked!');
          }}
        >
          {/* You can add content/icons inside the box if needed */
          <div>
              <NavLink to='/specificsugo'>
          <img className='logo' alt="" src="/images/sugobox.svg"/>
              </NavLink>
          </div>
          }
        </Box>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            ><h1>SUGO</h1>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          sx={{
            width: '100', // Adjust the width as needed
          }}
        >
          {/* Content of the drawer goes here */}
          <div>
            <Box sx={{ bgcolor: '#00cce5', height: '300px', width: '400px'}}>
              <img 
                  src='images/Logo.png' 
                  alt='' 
                  style={{width: '200px', height: '250', marginLeft: 90, marginRight: 90, marginTop: 45}}
                  ></img>
            </Box>
            
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                  <ListItemText primary="Email" />
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                      <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cart" />
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                    <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="History" />
              </ListItem>

                <ListItem button>
                  <ListItemIcon>
                  <NotificationsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Notifications" />
                </ListItem>

                <ListItem button>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                  <ExitToAppIcon />
                  </ListItemIcon>
                <ListItemText primary="Logout" onClick={logout} />
                </ListItem>
              {/* Add more items as needed */}
            </List>
          </div>
        </Drawer>

      </Box>

      

      <div>
        <Box
          sx={{
            width: '300px', 
            height: '200px', 
            backgroundColor: '#ccc', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '35px', 
            position: 'absolute',
            top: '180px',
            right: '430px', 
          }}
          onClick={() => {
            console.log('Box clicked!');
          }}
          >
          {/*add content/icons inside the box if needed */
          <div>
          </div>
          }
        </Box>
        </div>

        <div>
        <Box
          sx={{
            width: '300px', 
            height: '200px', 
            backgroundColor: '#ccc', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '35px', 
            position: 'absolute',
            top: '180px',
            right: '70px', 
          }}
          onClick={() => {
            console.log('Box clicked!');
          }}
          >
          {/*add content/icons inside the box if needed */
          <div>
              
          </div>
          }
        </Box>
        </div>

        <div>
        <Box
          sx={{
            width: '300px', 
            height: '200px', 
            backgroundColor: '#ccc', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '35px', 
            position: 'absolute',
            top: '450px',
            right:'430px', 
          }}
          onClick={() => {
            console.log('Box clicked!');
          }}
          >
          {/*add content/icons inside the box if needed */
          <div>
              
          </div>
          }
        </Box>
        </div>

        <div>
        <Box
          sx={{
            width: '300px', 
            height: '200px', 
            backgroundColor: '#ccc', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '35px', 
            position: 'absolute',
            top: '450px',
            right: '70px',  
          }}
          onClick={() => {
            console.log('Box clicked!');
          }}
          >
          {/*add content/icons inside the box if needed */
          <div>
              
          </div>
          }
        </Box>
        </div>

        

      </div>
    );
  }