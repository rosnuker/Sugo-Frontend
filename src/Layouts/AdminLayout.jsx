import { Menu } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return(
      <>
        <Grid container justify='center' alignItems='center' direction='column'>
          <Grid item>
            <AppBar>
              <Toolbar sx={{ bgcolor: 'white' }}>
                  <img src='/images/SugoLogo.png' height='55px' style={{ marginRight: '10px'}}></img>
                  <img src='/images/SugoBanner.png' height='55px'></img>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>

        <Outlet />
      </>
    )
}