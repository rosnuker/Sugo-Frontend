import { Box, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <div className='gradientbg_3'>
      <Grid container justify='center' alignItems='center' direction='row' spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src="computer_mob_programming.png" alt="SUGO Image" style={{ maxWidth: '450px', maxHeight: '450px', borderRadius: '5px', marginTop: 150, marginLeft: -250 }} />
            <img src="aight.png" alt="OK" style={{ maxWidth: '450px', maxHeight: '450px', borderRadius: '5px', position: 'absolute', top: '650px', left: '1720px', zIndex:1 }} />
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Box sx={{ bgcolor: 'white', height: 515, width: 1140, marginTop: 25, marginLeft: -30, borderRadius: 5, opacity: '80%', padding: '20px' }}>
            <Typography sx={{ fontSize: 92, fontWeight: 'bold', marginLeft: 4 }}>
              What is SUGO?
            </Typography>

            <Typography sx={{ fontSize: 36, marginLeft: 4 }}>
              SUGO connects you with your fellow students who are willing to lend a helping hand. Whether you need someone to bring you your favorite coffee, return a borrowed book to the library, or simply run an errand. SUGO is here to make your campus life easier and more convenient.
            </Typography>
          </Box>
        </Grid>

        {/* Profiles */}
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {/* Profile 1 */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                <img src="profile1.png" alt="Creator 1" style={{ maxWidth: '75%', borderRadius: '10px' }} />
                <Typography variant="h4" gutterBottom>
                  Torqudeo, Adrian Carlo
                </Typography>
                <Typography>
                  12-2080-460
                </Typography>
              </Box>
            </Grid>

            {/* Profile 2 */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                <img src="profile2.png" alt="Creator 2" style={{ maxWidth: '75%', borderRadius: '10px' }} />
                <Typography variant="h4" gutterBottom> 
                  Arisgar, Aldrich Alex
                </Typography>
                <Typography>
                  18-3875-756
                </Typography>
              </Box>
            </Grid>

            {/* Profile 3 */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                <img src="profile3.png" alt="Creator 3" style={{ maxWidth: '75%', borderRadius: '10px' }} />
                <Typography variant="h4" gutterBottom>
                  Caballes, Jeno Roch
                </Typography>
                <Typography>
                  19-4800-536
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
