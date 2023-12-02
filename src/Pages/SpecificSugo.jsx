import { Box, Grid } from '@mui/material'
import React from 'react'

export default function SpecificSugo() {
    return(
        <>
            <div className='gradientbg_1'>
            <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src="computer_mob_programming.png" alt="SUGO Image" style={{ maxWidth: '450px', maxHeight: '450px', borderRadius: '5px', marginTop: 150, marginLeft: -250 }} />
            <img src="aight.png" alt="OK" style={{ maxWidth: '450px', maxHeight: '450px', borderRadius: '5px', position: 'absolute', top: '650px', left: '1720px', zIndex:1 }} />
          </Box>
        </Grid>
        </div>
    </>
    )
}