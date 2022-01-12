import React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidenav from '../SideNav/SideNav';
import useState from 'react-hook-use-state';
import Sidenavicon from '../SideNav/SideNavIcon';
import Button from '@mui/material/Button';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import custom from './dashboardBi.module.css';
import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from '@mui/material/Link';

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#131522",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#131522",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#131522",
      },
      "& .MuiOutlinedInput-input": {
        color: "#131522",
        padding: "10px",
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "#131522"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "#131522"
      },
      "& .MuiInputLabel-outlined": {
        color: "#131522"
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "#131522"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "#131522"
      }
    },
    noBorder: {
        border: "none",
    },
});

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: 'transparent',
    color: 'white',
    boxShadow: 'none'
}));

const Dashboardbipage = (props) => {
    const [show, setShow] = useState(true);
    const handle = () => {
        setShow(!show);
    }
    const classes = useStyles();

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
                    py:8.9
                }}>
                    <Box sx={{ flexGrow: 1}}>
                        <Grid container sx={{color:'white'}}>
                            <Grid item xs={6} container justifyContent="start">
                                <Item>
                                    <h1>Invoices</h1>
                                    <h5>There are 3 total Invoices</h5>
                                </Item>
                            </Grid>
                            <Grid item xs={6} container justifyContent="end" alignItems='center'>
                                <Item>
                                    <Button variant="contained" className={`${custom.btn} ${custom.btnWidth}`}><AddCircleOutlinedIcon sx={{marginRight:'4%'}}/>New Client</Button>
                                </Item>
                                <Item sx={{marginLeft:'8%'}}>
                                    <Button variant="contained" className={`${custom.btn} ${custom.btnWidth}`}><AddCircleOutlinedIcon sx={{marginRight:'4%'}}/>New Invoice</Button>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{color:'white', pt:2}}>
                            <Grid item xs={6} container justifyContent="start">
                                <TextField
                                    sx={{bgcolor: '#FFFFFF', borderRadius:2.5}}
                                    className={`${classes.root}`}
                                    placeholder="Search"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment>
                                                <Button variant="contained" className={custom.btn} sx={{py:1.2, bgcolor:'#FFC700', color: '#131522', borderRadius:2}}>Go</Button>
                                            </InputAdornment>
                                        ),
                                        classes:{notchedOutline:classes.noBorder},
                                        style:{
                                            paddingRight:'0',
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container sx={{color:'white', pt:8}}>
                            <Grid item xs={12} container justifyContent="center">
                                <Item sx={{
                                    bgcolor: '#E5E5E5', 
                                    color: '#131522', 
                                    p:3,
                                    mb:3,
                                    borderRadius:4,
                                    width:'100%'
                                }}>
                                    <Box sx={{ flexGrow: 1}}>
                                        <Grid container justifyContent="space-between" spacing={2}>
                                            <Grid item xs={12} md={1} >
                                                <Item sx={{textAlign: 'left', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {props.data[0].id}
                                                </Item>
                                            </Grid>
                                            <Grid item xs={12} md={3} >
                                                <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {`${props.data[0].payment_due}`}
                                                </Item>
                                            </Grid>
                                            <Grid item xs={12} md={3} >
                                                <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {props.data[0].bill_to}
                                                </Item>
                                            </Grid>
                                            <Grid item xs={12} md={2} >
                                                <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {props.data[0].total}
                                                </Item>
                                            </Grid>
                                            <props.component status={props.status}/>
                                            <Grid item xs={12} md={1} >
                                                <Item sx={{textAlign: 'right', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    <Link href="#" underline="none">
                                                        <ChevronRightIcon sx={{color:'#FFC700'}} className={custom.rightIcon}/>
                                                    </Link>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{color:'white'}}>
                            <Grid item xs={12} container justifyContent="center">
                                <Item sx={{
                                    bgcolor: '#E5E5E5', 
                                    color: '#131522', 
                                    p:3,
                                    mb:3,
                                    borderRadius:4,
                                    width:'100%'
                                }}>
                                    <Box sx={{ flexGrow: 1}}>
                                        <Grid container justifyContent="space-between" spacing={2}>
                                            <Grid item xs={12} md={1} >
                                                <Item sx={{textAlign: 'left', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {props.data[0].id}
                                                </Item>
                                            </Grid>
                                            <Grid item xs={12} md={3} >
                                                <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {`${props.data[0].payment_due}`}
                                                </Item>
                                            </Grid>
                                            <Grid item xs={12} md={3} >
                                                <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {props.data[0].bill_to}
                                                </Item>
                                            </Grid>
                                            <Grid item xs={12} md={2} >
                                                <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {props.data[0].total}
                                                </Item>
                                            </Grid>
                                            <props.component status={props.status}/>
                                            <Grid item xs={12} md={1} >
                                                <Item sx={{textAlign: 'right', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    <Link href="#" underline="none">
                                                        <ChevronRightIcon sx={{color:'#FFC700'}} className={custom.rightIcon}/>
                                                    </Link>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{color:'white'}}>
                            <Grid item xs={12} container justifyContent="center">
                                <Item sx={{
                                    bgcolor: '#E5E5E5', 
                                    color: '#131522', 
                                    p:3,
                                    mb:3,
                                    borderRadius:4,
                                    width:'100%'
                                }}>
                                    <Box sx={{ flexGrow: 1}}>
                                        <Grid container justifyContent="space-between" spacing={2}>
                                            <Grid item xs={12} md={1} >
                                                <Item sx={{textAlign: 'left', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {props.data[0].id}
                                                </Item>
                                            </Grid>
                                            <Grid item xs={12} md={3} >
                                                <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {`${props.data[0].payment_due}`}
                                                </Item>
                                            </Grid>
                                            <Grid item xs={12} md={3} >
                                                <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {props.data[0].bill_to}
                                                </Item>
                                            </Grid>
                                            <Grid item xs={12} md={2} >
                                                <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    {props.data[0].total}
                                                </Item>
                                            </Grid>
                                            <props.component status={props.status}/>
                                            <Grid item xs={12} md={1} >
                                                <Item sx={{textAlign: 'right', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                                    <Link href="#" underline="none">
                                                        <ChevronRightIcon sx={{color:'#FFC700'}} className={custom.rightIcon}/>
                                                    </Link>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{color:'white', pt:2}}>
                            <Grid item xs={12} container justifyContent="start">
                                <Button variant="contained" className={custom.btn} sx={{width:'100%', py:1, fontSize:'1.5rem', borderRadius:2.5}}>Upload CSV</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboardbipage;
