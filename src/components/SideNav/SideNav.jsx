import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import custom from './sideNav.module.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PaidIcon from '@mui/icons-material/Paid';
// import Link from '@mui/material/Link';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: 'transparent',
    color: '#131522',
    boxShadow: 'none'
}));

const Sidenav = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid>
                <Grid item xs={2} container justifyContent="center" sx={{
                    color: '#131522', 
                    backgroundColor: '#FFC700',
                    position:'fixed',
                    py:2
                }}>
                    <Item className={custom.leftSidebar} sx={{width:'80%'}}>
                        <Box sx={{textAlign:'center', mb:2}}><AccountCircleOutlinedIcon sx={{fontSize:'7rem'}}/></Box>
                        <Box sx={{textAlign:'center', fontSize:'2rem', mb:5}}>Raviy Bayu</Box>
                        <Box sx={{textAlign:'left', fontSize:'1.5rem', mb:1}}><PersonIcon sx={{fontSize:'3rem', mr:1}}/>Client</Box>
                        <Box sx={{textAlign:'left', fontSize:'1.5rem', mb:1}}><PaidIcon sx={{fontSize:'3rem', mr:1}}/>Paid</Box>
                        <Box sx={{textAlign:'left', fontSize:'1.5rem', mb:1}}><AccountBalanceWalletIcon sx={{fontSize:'3rem', mr:1}}/>Unpaid</Box>
                        <Box sx={{textAlign:'left', fontSize:'1.5rem', mb:1}}><ReceiptIcon sx={{fontSize:'3rem', mr:1}}/>Processed</Box>
                        <Box sx={{textAlign:'left', fontSize:'1.5rem', mb:1}}><NoteAltIcon sx={{fontSize:'3rem', mr:1}}/>Draft</Box>
                        <Box sx={{ flexGrow: 1, mt:6}}>
                            <Grid container justifyContent="center">
                                <Grid item xs={10} sx={{
                                    backgroundColor: '#131522',
                                    borderRadius:4
                                }}>
                                    <Item sx={{textAlign:'center', py:1, fontSize:'1.5rem', color:'#FFC700',}}>CLOSE</Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Sidenav;
