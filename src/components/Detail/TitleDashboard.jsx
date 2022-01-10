import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: '#131522',
    color: 'white',
    boxShadow: 'none'
}));
const TitleDashboard = (props) => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container justifyContent="center">
                <Grid item xs={10} >
                    <Item><h1>Invoices</h1></Item>
                    <Item sx={{fontSize:'1.2rem', mb:9}}><span>There are 3 total invoices</span></Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TitleDashboard;
