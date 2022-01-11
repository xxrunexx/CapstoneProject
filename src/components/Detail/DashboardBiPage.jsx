import React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidenav from '../SideNav/SideNav';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     backgroundColor: 'transparent',
//     color: 'white',
//     boxShadow: 'none'
// }));

const Dashboardbipage = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid>
                <Grid item xs={2} container justifyContent="center" sx={{
                    color: '#131522', 
                    backgroundColor: '#FFC700',
                    position:'fixed',
                    py:2
                }}>
                    <Sidenav/>
                </Grid>
                <Grid item xs={9} container justifyContent="center" sx={{ 
                    marginLeft: '21%',
                }}>
                    <Box sx={{ flexGrow: 1}}>
                        <Grid container sx={{color:'white'}}>
                            <Grid item xs={6} container justifyContent="start">
                                asas
                            </Grid>
                            <Grid item xs={6} container justifyContent="end">
                                asas
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboardbipage;
