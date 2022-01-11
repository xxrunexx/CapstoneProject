import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import custom from './sideNavIcon.module.css';
import CircleIcon from '@mui/icons-material/Circle';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PaidIcon from '@mui/icons-material/Paid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: 'transparent',
    color: '#131522',
    boxShadow: 'none'
}));

const Sidenavicon = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid>
                <Grid item xs={1} container justifyContent="center" sx={{
                    color: '#131522', 
                    backgroundColor: '#FFC700',
                    position:'fixed',
                    py:2
                }}>
                    <Item className={custom.leftSidebar} sx={{width:'80%'}}>
                        <Box sx={{textAlign:'center', mt:3, mb:7}}>
                            <Button 
                                variant="contained" 
                                className={custom.toggleTop} 
                                sx={{bgcolor:'transparent',color: '#131522',}}
                            >
                                <CircleIcon/><CircleIcon/><CircleIcon/>
                            </Button>
                        </Box>
                        <Box sx={{textAlign:'center', fontSize:'1.5rem', mb:1}}>
                            <Link href="#" underline="hover" className={custom.linkSideNav}>
                                <PersonIcon sx={{fontSize:'3rem', mr:1}}/>
                            </Link>
                        </Box>
                        <Box sx={{textAlign:'center', fontSize:'1.5rem', mb:1}}>
                            <Link href="#" underline="hover" className={custom.linkSideNav}>
                                <PaidIcon sx={{fontSize:'3rem', mr:1}}/>
                            </Link>
                        </Box>
                        <Box sx={{textAlign:'center', fontSize:'1.5rem', mb:1}}>
                            <Link href="#" underline="hover" className={custom.linkSideNav}>
                                <AccountBalanceWalletIcon sx={{fontSize:'3rem', mr:1}}/>
                            </Link>
                        </Box>
                        <Box sx={{textAlign:'center', fontSize:'1.5rem', mb:1}}>
                            <Link href="#" underline="hover" className={custom.linkSideNav}>
                                <ReceiptIcon sx={{fontSize:'3rem', mr:1}}/>
                            </Link>
                        </Box>
                        <Box sx={{textAlign:'center', fontSize:'1.5rem', mb:1}}>
                            <Link href="#" underline="hover" className={custom.linkSideNav}>
                                <NoteAltIcon sx={{fontSize:'3rem', mr:1}}/>
                            </Link>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Sidenavicon;
