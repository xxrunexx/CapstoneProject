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
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: 'transparent',
    color: '#131522',
    boxShadow: 'none'
}));

const Sidenav = (props) => {
    const history = useHistory();
    const linkClient = () => {
        history.push({
            pathname: "/client",
        });
    }
    const linkDraft = () => {
        history.push({
            pathname: "/dashboard/draft",
        });
    }
    const linkProcessed = () => {
        history.push({
            pathname: "/dashboard/processed",
        });
    }
    const linkPaid = () => {
        history.push({
            pathname: "/dashboard/paid",
        });
    }
    const linkUnpaid = () => {
        history.push({
            pathname: "/dashboard/unpaid",
        });
    }

    const navMenuList = [
        {
            name: "Client",
            icon: PersonIcon,
            path: linkClient
        },
        {
            name: "Paid",
            icon: PaidIcon,
            path: linkPaid
        },
        {
            name: "Unpaid",
            icon: AccountBalanceWalletIcon,
            path: linkUnpaid
        },
        {
            name: "Processed",
            icon: ReceiptIcon,
            path: linkProcessed
        },
        {
            name: "Draft",
            icon: NoteAltIcon,
            path: linkDraft
        },
    ]
    const location = useLocation();
    return (
        <Item className={custom.leftSidebar} sx={{width:'80%'}}>
            <Box sx={{textAlign:'center', mb:2}}><AccountCircleOutlinedIcon sx={{fontSize:'7rem'}} className={custom.iconUser}/></Box>
            <Box sx={{textAlign:'center', fontSize:'2rem', mb:5}} className={custom.userName}>{props.auth.name}</Box>
            {navMenuList.map((menu) => {
                return (
                    <Box sx={{textAlign:'left', fontSize:'1.5rem', mb:1}} className={custom.linkBox}>
                        <Link 
                            component="button" 
                            underline="hover" 
                            className={`${location.pathname.endsWith(menu.path) ? custom.active : ""} ${custom.linkSideNav}`} 
                            onClick={menu.path}
                        >
                            <menu.icon sx={{fontSize:'3rem', mr:1}} className={custom.sideNavIcon}/>
                            <span className={custom.sideNavTitle}>{menu.name}</span>
                        </Link>
                    </Box>
                );
            })}
            <Box sx={{ flexGrow: 1, mt:5}}>
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                        <Item sx={{textAlign:'center', py:1, fontSize:'1.5rem', color:'#FFC700',}}>
                            <Button 
                                variant="contained" 
                                className={custom.btnClose} 
                                sx={{px:3, bgcolor:'#131522'}}
                                onClick={props.show}
                            >
                                CLOSE
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Item>
    );
}

export default Sidenav;
