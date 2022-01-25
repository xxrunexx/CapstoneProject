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
    const authToken = localStorage.getItem('token');
    let authData = jwt_decode(authToken);
    console.log(authData.userId);
    
    const [resultUser, setResultUser] = React.useState(null);
    const [resultUserDetail, setResultUserDetail] = React.useState(null);

    const getUserByID = async () => {
      await axios.get(`http://localhost:8000/billissuer/${authData.userId}`)
      .then((response)=>{
        setResultUser(response.data)
      });
    };

    const getUserDetailByID = async () => {
      await axios.get(`http://localhost:8000/billissuerdetail/${authData.userId}`)
      .then((response)=>{
        setResultUserDetail(response.data)
      });
    };

    React.useEffect(() => {
      getUserByID();
      getUserDetailByID();
    },[]);

    console.log(resultUser?.data.password);
    // console.log(resultUserDetail);
    const [values, setValues] = React.useState({
      name:  '',
      email: '',
      companyName: '',
      companyAddress: '',
      companyPhone: '',
      companySite: '',
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
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
            <p>{resultUser?.data.name}</p>
          </Item>
          <Item sx={{
                    textAlign: 'center',
                    color:'#E5E5E5', 
                    py:1, 
                    fontSize: '36px',
                    paddingTop: '0px',
                    paddingBottom: '10px' , 
          }}>
            <p>{resultUserDetail?.data.company_name}</p>
          </Item>
          <Item>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                id="outlined-uncontrolled"
                label="Name"
                fullWidth
                placeholder={resultUser?.data.name}
                onChange={handleChange('name')}
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
              placeholder={resultUser?.data.email}
              onChange={handleChange('email')}
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
              placeholder={resultUserDetail?.data.company_name}
              onChange={handleChange('companyName')}
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
              placeholder={resultUserDetail?.data.company_address}
              onChange={handleChange('companyAddress')}
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
              placeholder={resultUserDetail?.data.company_phone}
              onChange={handleChange('companyPhone')}
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
              placeholder={resultUserDetail?.data.company_site}
              onChange={handleChange('companySite')}
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
                <Link component="button" underline="none" className={custom.addNewItem}>
                    {'UPDATE'}
                </Link>
              </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
    );
}

export default FormBillIssuerInfo;
