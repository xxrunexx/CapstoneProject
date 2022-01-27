import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import custom from './formBillIssuerInfo.module.css';
import Link from '@mui/material/Link';
import { InputAdornment } from '@mui/material';
import billIssuerInfo from '../../assets/img/billIssuerInfo.png';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import jwt_decode from "jwt-decode";
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    textAlign: 'left',
    backgroundColor: '#131522',
    color: 'white',
    boxShadow: 'none'
}));

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      "& .MuiOutlinedInput-input": {
        color: "black",
        padding: "10px 14px",
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "black"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "black"
      },
      "& .MuiInputLabel-outlined": {
        color: "black"
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "black"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "black"
      }
    },
    noBorder: {
      border: "none",
    },
});


const FormBillIssuerInfo = () => {
    const classes = useStyles();
    const token = React.useRef('');
    token.current = localStorage.getItem('token');

    const [valuesUser, setValuesUser] = React.useState({
      name:  '',
      password: '',
      email: '',
    });

    const [valuesUserDetail, setValuesUserDetail] = React.useState({
      companyName: '',
      companyAddress: '',
      companyPhone: '',
      companySite: '',
    });
    
    React.useEffect(() => {
      const credential = jwt_decode(token.current);

      const getUserByID = async () => {
        await axios.get(`http://localhost:8000/billissuer/${credential.userId}`)
        .then((response)=>{
          // setResultUser(response.data);
          setValuesUser({
            name: response.data.data.name,
            password: response.data.data.password,
            email: response.data.data.email,
          });
        });
      };
  
      const getUserDetailByID = async () => {
        await axios.get(`http://localhost:8000/billissuerdetail/${credential.userId}`)
        .then((response)=>{
          // setResultUserDetail(response.data);
          setValuesUserDetail({
            companyName: response.data.data.company_name,
            companyAddress: response.data.data.company_address,
            companyPhone: response.data.data.company_phone,
            companySite: response.data.data.company_site,
          });
        });
      };
      getUserByID();
      getUserDetailByID();
    },[]);

    // console.log(valuesUser);
    // console.log(valuesUserDetail);
    
    const handleChangeUser = (prop) => (event) => {
      setValuesUser({ ...valuesUser, [prop]: event.target.value });
    };

    const handleChangeUserDetail = (prop) => (event) => {
      setValuesUserDetail({ ...valuesUserDetail, [prop]: event.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log('test');
    }
    return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container justifyContent="center">
        <Grid item xs={8} >
          <Item sx={{
                    textAlign: 'center', 
                    py:1, 
                    fontFamily: 'Michroma',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '64px',
                    lineHeight: '91px',
                    color: '#E5E5E5',               
          }}>
            <img src={billIssuerInfo} alt="billIssuerInfo"  position="center"/>
          </Item> 
          <Item sx={{
                    textAlign: 'center',
                    py:1, 
                    fontFamily: 'Michroma',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '64px',
                    lineHeight: '91px',
                    color: '#E5E5E5',
                    paddingTop: '0px',
                    paddingBottom: '0px' , 
          }}>
            <p>{valuesUser.name}</p>
          </Item>
          <Item sx={{
                    textAlign: 'center',
                    color:'#E5E5E5', 
                    py:1, 
                    fontSize: '36px',
                    paddingTop: '0px',
                    paddingBottom: '10px' , 
          }}>
            <p>{valuesUserDetail.companyName}</p>
          </Item>
          <form onSubmit={handleSubmit} method="post">
            <Item>
                <TextField
                  sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                  className={classes.root}
                  id="outlined-uncontrolled"
                  label="Name"
                  fullWidth
                  value={valuesUser.name}
                  onChange={handleChangeUser('name')}
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <PersonIcon />
                        </InputAdornment>
                    ),
                    }}
                />
            </Item>
            <Item>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                id="outlined-uncontrolled"
                type='email'
                label="Email"
                value={valuesUser.email}
                onChange={handleChangeUser('email')}
                variant="filled"
                fullWidth
                InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                      <EmailIcon />
                      </InputAdornment>
                  ),
                  }}
              />
              
            </Item>
            <Item>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                id="outlined-uncontrolled"
                label="Company Name"
                value={valuesUserDetail.companyName}
                onChange={handleChangeUserDetail('companyName')}
                variant="filled"
                fullWidth
                InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                      <ApartmentIcon />
                      </InputAdornment>
                  ),
                  }}
              />
            </Item>
            <Item>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}              
                id="outlined-uncontrolled"
                label="Company Address"
                value={valuesUserDetail.companyAddress}
                onChange={handleChangeUserDetail('companyAddress')}
                variant="filled"
                fullWidth
                InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                      <LocationOnIcon />
                      </InputAdornment>
                  ),
                  }}
              />
            </Item>
            <Item>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                id="outlined-uncontrolled"
                label="Company Phone"
                value={valuesUserDetail.companyPhone}
                onChange={handleChangeUserDetail('companyPhone')}
                variant="filled"
                fullWidth
                InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                      <PhoneIcon />
                      </InputAdornment>
                  ),
                  }}
              />
            </Item>
            <Item>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                id="outlined-uncontrolled"
                label="Company Site"
                value={valuesUserDetail.companySite}
                onChange={handleChangeUserDetail('companySite')}
                variant="filled"
                fullWidth
                InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                      <LanguageIcon />
                      </InputAdornment>
                  ),
                  }}
              />
            </Item>
            <Item sx={{textAlign: 'center',}}>
                <Box 
                  sx={{
                      bgcolor: '#FFC700', 
                      borderRadius:2, 
                      color:'black', 
                      py:1, 
                      fontSize:'1.2rem'
                }}>
                  <Link component="button" underline="none" type='submit' className={custom.addNewItem}>
                      {'UPDATE'}
                  </Link>
                </Box>
            </Item>
          </form>
        </Grid>
      </Grid>
    </Box>
    );
}

export default FormBillIssuerInfo;
