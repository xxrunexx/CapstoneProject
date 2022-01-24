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
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router-dom';
import Detaildashboard from './DetailDashboard';

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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: '#FFC700',
    border: '1px solid #131522',
    borderRadius:3,
    boxShadow: 24,
    py:2,
    px:1
  };

const Dashboardbipage = (props) => {
    const history = useHistory();
    const [show, setShow] = useState(true);
    const handle = () => {
        setShow(!show);
    }
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const newClient = () => {
        history.push({
            pathname: "/addClient",
        });
    }
    const newInvoice = () => {
        history.push({
            pathname: "/addInvoice",
        });
    }
    const [values, setValues] = useState({
        file:'',
    });
    // const [, setMsg] = useState('');
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid>
                <Grid 
                    item 
                    xs={show ? 2 : 1} 
                    container 
                    justifyContent="center" 
                    sx={{
                        color: '#131522', 
                        backgroundColor: '#FFC700',
                        position:'fixed',
                        py:2
                    }}
                >
                    {show ? <Sidenav show={handle} auth={props.auth}/> : <Sidenavicon show={handle}/>}
                </Grid>
                <Grid 
                    item 
                    xs={9} 
                    container 
                    justifyContent="center" 
                    sx={{
                        mx: show ? '21%' : '16%',
                        py:8.9
                    }}
                >
                    <Box sx={{ flexGrow: 1}}>
                        <Grid container sx={{color:'white'}}>
                            <Grid 
                                item 
                                xs={6} 
                                container 
                                justifyContent="start"
                            >
                                <Item>
                                    <h1>Invoices</h1>
                                    <h5>There are 3 total Invoices</h5>
                                </Item>
                            </Grid>
                            <Grid 
                                item 
                                xs={6} 
                                container 
                                justifyContent="end" 
                                alignItems='center'
                                sx={{marginLeft:'-0.5%'}}
                            >
                                <Item>
                                    <Button 
                                        variant="contained" 
                                        className={`${custom.btn} ${custom.btnWidth}`}
                                        onClick={newClient}
                                    >
                                        <AddCircleOutlinedIcon sx={{marginRight:'4%'}}/>New Client
                                    </Button>
                                </Item>
                                <Item sx={{marginLeft:'8%'}}>
                                    <Button 
                                        variant="contained" 
                                        className={`${custom.btn} ${custom.btnWidth}`}
                                        onClick={newInvoice}
                                    >
                                        <AddCircleOutlinedIcon sx={{marginRight:'4%'}}/>New Invoice
                                    </Button>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{color:'white', pt:2}}>
                            <Grid item xs={10} md={6} container justifyContent="start">
                                <TextField
                                    sx={{bgcolor: '#FFFFFF', borderRadius:2.5}}
                                    className={classes.root}
                                    placeholder="Search"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
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
                            <Grid item xs={12} container>
                                <Detaildashboard status={"Paid"} data={props.data} modal={handleOpen}/>
                            </Grid>
                        </Grid>
                        <Grid container sx={{color:'white'}}>
                            <Grid item xs={12} container>
                                <Detaildashboard status={"Paid"} data={props.data} modal={handleOpen}/>
                            </Grid>
                        </Grid>
                        <Grid container sx={{color:'white'}}>
                            <Grid item xs={12} container>
                                <Detaildashboard status={"Paid"} data={props.data} modal={handleOpen}/>
                            </Grid>
                        </Grid>
                        <Grid container sx={{color:'white', pt:2, justifyContent: 'center'}}>
                            <Grid item xs={10} container>
                                <input
                                    accept=".csv"
                                    className={classes.input}
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                    onChange={handleChange('file')}
                                />
                                <label htmlFor="raised-button-file" style={{ width: "100%" }}>
                                    <Button 
                                        variant="raised" component="span" className={custom.btn} 
                                        sx={{
                                            width:'100%',
                                            py:1, 
                                            fontSize:'1.5rem', 
                                            borderRadius:2.5
                                        }}>
                                        Upload CSV
                                    </Button>
                                </label>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={custom.modalBox}>
                    <Grid container sx={{color:'#131522'}}>
                        <Grid item container justifyContent="end">
                            <Button variant="text" sx={{color:'#131522', minWidth:'40px', padding:0}} onClick={handleClose}><CloseIcon/></Button>
                        </Grid>
                    </Grid>
                    <Grid container sx={{color:'#131522'}} justifyContent="center">
                        <Grid item xs={9}>
                            <Grid container justifyContent="center" alignItems="center">
                                <Grid item xs={12} md={3}>
                                    <AccountCircleOutlinedIcon sx={{fontSize:'5rem'}}/>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <h2 className={custom.topModal}>{props.client[0].name}</h2>
                                    <p className={custom.topModal}>{props.client[0].email}</p>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center" sx={{mt:4}}>
                                <TextField
                                    sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                                    className={classes.root}
                                    id="outlined-uncontrolled"
                                    label="NIK"
                                    fullWidth
                                    value={props.client[0].nik}
                                    variant="filled"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center" sx={{mt:2}}>
                                <TextField
                                    sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                                    className={classes.root}
                                    id="outlined-uncontrolled"
                                    label="Phone Number"
                                    fullWidth
                                    value={props.client[0].phone}
                                    variant="filled"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                        ),
                                        classes:{notchedOutline:classes.noBorder},
                                    }}
                                />
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center" sx={{mt:2}}>
                                <TextField
                                    sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                                    className={classes.root}
                                    id="outlined-uncontrolled"
                                    label="Address"
                                    fullWidth
                                    value={props.client[0].address}
                                    variant="filled"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                        ),
                                        classes:{notchedOutline:classes.noBorder},
                                    }}
                                />
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center" sx={{mt:4, mb:2}}>
                                <Button 
                                    variant="contained" 
                                    fullWidth 
                                    sx={{
                                        borderRadius:2, 
                                        color:'#FFC700', 
                                        bgcolor:'#131522'
                                    }} 
                                    className={custom.modalUpdate}>
                                        Update
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Box>
    );
}

export default Dashboardbipage;
