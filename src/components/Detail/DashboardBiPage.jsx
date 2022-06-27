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
import axios from 'axios';

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

const Dashboardbipage = ({data, auth}) => {
    const clientID = React.useRef(false);
    // clientID.current = data.client_id;
    const history = useHistory();
    const [show, setShow] = useState(true);
    const handle = () => {
        setShow(!show);
    }
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const [dataClient, setDataClient] = React.useState(null);
    
const [valueUpdate, setValueUpdate] = React.useState({
  client_nik: '',
  client_phone: '',
  client_address: '',
})

    React.useEffect(() => {
        const getSpecificClient = async () => {
            await axios.get(
                `http://localhost:8000/client/${data.client_id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((response)=>{
              setValueUpdate({
                client_nik: response.data.data.nik,
                client_phone: response.data.data.phone,
                client_address: response.data.data.address
              })
                // setDataClient(response.data);
                // console.log("Isi dataclient : ", dataClient);
            });
        };
      //   const getClientInfo = async () => {
      //     await axios.get(
      //         'http://localhost:8000/client',
      //         {
      //             headers: {
      //                 'Content-Type': 'application/json',
      //             },
      //         }
      //     )
      //     .then((response)=>{
      //         setDataApiClient(response.data.data);
      //         // console.log("Isi response.data : ", dataApi);
      //     });
      // }
        getSpecificClient();
    },[]);

    const handleChange = (prop) => (event) => {
      setValueUpdate({ ...valueUpdate, [prop]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .put(
            `http://localhost:8000/client/update/${data.client_id}`,
            {
                id: data.client_id,
                nik: handleChange('client_nik'),
                name: data.client_name,
                phone: handleChange('client_phone'),
                address: handleChange('client_address'),
                email: data.client_email,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
          )
          .then(function (response) {
            // Reload the page after the update
            // Note : Method only works if the page exist in the history list.
            history.go(0);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

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
    const newPayment = () => {
        history.push({
            pathname: "/addPaymentMethod",
        });
    }
    // const [, setMsg] = useState('');
    
    const file = React.useRef(null);
    const handleUpload = () => {
        //file.current.files
        console.log("test Button");
        console.log(file.current.files);
    }
    const logout = () => {
        localStorage.setItem("loggedIn", "guest");
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
    // TODO: Kemarin berhasil dapat data dari DashboardBillissuer.js 
    // TODO: ke dashboardbiPage.jsx. Saat ini tolong dicoba untuk
    // TODO: Masuk ke dalam codingan 1 persatu. Dicek
    // TODO: dengan memanggil data.<value>
    // TODO: Semoga bisa. Bismillah ya Allah
    // console.log("ISINYA APA INI : ", data.id)
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
                    {show ? <Sidenav show={handle} auth={auth} logout={logout}/> : <Sidenavicon show={handle} logout={logout}/>}
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
                                        onClick={newPayment}
                                    >
                                        <AddCircleOutlinedIcon sx={{marginRight:'4%'}}/>New Payment Method
                                    </Button>
                                </Item>
                                <Item sx={{marginLeft:'8%'}}>
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
                        <Grid container sx={{color:'white', pt:2, pb:8}}>
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
                        {/* FIXME: BUKA LAGI NANTI YA */}
                        <Grid container sx={{color:'white'}}>
                            <Grid item xs={12} container>
                                <Detaildashboard status={data.payment_status} data={data} modal={handleOpen}/>
                            </Grid>
                        </Grid>
                        <Grid container sx={{color:'white', pt:2, justifyContent: 'center'}}>
                            <Grid item xs={10} container>
                                <form onSubmit={handleSubmit} method="POST" style={{ width: '100%' }}>
                                    <input
                                        accept=".csv"
                                        className={classes.input}
                                        style={{ display: 'none' }}
                                        id="raised-button-file"
                                        multiple
                                        type="file"
                                        ref={file}
                                    />
                                    <label htmlFor="raised-button-file">
                                        <Button 
                                            variant="raised" component="span" className={custom.btn} 
                                            sx={{
                                                width:'100%',
                                                py:1, 
                                                fontSize:'1.5rem', 
                                                borderRadius:2.5,
                                                mb:5
                                            }}>
                                            Choose File
                                        </Button>
                                    </label>
                                    <Button 
                                        variant="raised" component="span" className={custom.btn} 
                                        sx={{
                                            width:'100%',
                                            py:1, 
                                            fontSize:'1.5rem', 
                                            borderRadius:2.5
                                        }}
                                        type="submit"
                                        onClick={handleUpload}
                                        >
                                        Upload CSV
                                    </Button>
                                </form>
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
                                    <h2 className={custom.topModal}>{data.client_name}</h2>
                                    <p className={custom.topModal}>{data.client_email}</p>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center" sx={{mt:4}}>
                                <TextField
                                    sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                                    className={classes.root}
                                    id="outlined-uncontrolled"
                                    label="NIK"
                                    fullWidth
                                    onChange={handleChange('client_nik')}
                                    value={valueUpdate.client_nik}
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
                                    onChange={handleChange('client_phone')}
                                    value={valueUpdate.phone}
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
                                    onChange={handleChange('client_address')}
                                    value={valueUpdate.client_address}
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
        // <h2>COBA APA</h2>
    );
}

export default Dashboardbipage;
