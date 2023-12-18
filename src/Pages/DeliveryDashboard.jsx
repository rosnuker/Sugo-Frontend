import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Drawer, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './DeliveryDashboard.css'; // Import the CSS file for styling


import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const CourierApp = () => {
  const [orders, setOrders] = useState([]);
  const [pickedOrder, setPickedOrder] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Replace this with your actual call to the database
  useEffect(() => {
    // Fetch orders from the database using your preferred method (e.g., HTTP request)
    fetch('/api/orders')
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  const handlePickOrder = (orderId) => {
    const pickedOrder = orders.find((order) => order.id === orderId);
    setPickedOrder(pickedOrder);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className='gradientbg_2'>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Courier App
          </Typography>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{ marginRight: 2, color: 'inherit' }}
          />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        {/* Drawer content goes here */}
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
                <ListItemText primary="Logout" />
                </ListItem>
              {/* Add more items as needed */}
            </List>
        </div>
      </Drawer>

      <div className="courier-app-container">
        <div className="order-list-container">
          <h2>Order List</h2>
          <table className="order-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Status</th>
                <th>Pick Up</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.address}</td>
                  <td>{order.status}</td>
                  <td>
                    <Button onClick={() => handlePickOrder(order.id)}>Pick Up</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {pickedOrder && (
          <div className="picked-order-container">
            <h2>Picked Order</h2>
            <p>
              Order ID: {pickedOrder.id} <br />
              Customer: {pickedOrder.customer} <br />
              Address: {pickedOrder.address}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourierApp;
