import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidenav from '../SideNav/SideNav';
import useState from 'react-hook-use-state';
import Sidenavicon from '../SideNav/SideNavIcon';
import Button from '@mui/material/Button';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: 'transparent',
    color: 'white',
    boxShadow: 'none'
}));

const Dashboardbipage = () => {
    const [show, setShow] = useState(true);
    const handle = () => {
        setShow(!show);
    }

    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid>
                <Grid item xs={show ? 2 : 1} container justifyContent="center" sx={{
                    color: '#131522', 
                    backgroundColor: '#FFC700',
                    position:'fixed',
                    py:2
                }}>
                    {show ? <Sidenav show={handle} /> : <Sidenavicon show={handle} />}
                </Grid>
                <Grid item xs={9} container justifyContent="center" sx={{
                    mx: show ? '21%' : '16%',
                }}>
                    <Box sx={{ flexGrow: 1}}>
                        <Grid container sx={{color:'white', py:10}}>
                            <Grid item xs={6} container justifyContent="start">
                                <Item>
                                    <h1>Invoices</h1>
                                    <h5>There are 3 total Invoices</h5>
                                </Item>
                            </Grid>
                            <Grid item xs={6} container justifyContent="end" alignItems='center'>
                                <Item>
                                    <Button variant="contained"><AddCircleOutlinedIcon sx={{marginRight:'4%'}}/>Contained</Button>
                                </Item>
                                <Item sx={{marginLeft:'8%'}}>
                                    <Button variant="contained"><AddCircleOutlinedIcon sx={{marginRight:'4%'}}/>Contained</Button>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboardbipage;
