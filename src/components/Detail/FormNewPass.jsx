import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import custom from './formNewPass.module.css';
import Link from '@mui/material/Link';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { InputAdornment } from '@mui/material';
import forgetPass from '../../assets/img/newPass.png';
import LockResetIcon from '@mui/icons-material/LockReset';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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

const FormNewPass = () => {
    const [msgWrongPass, setMsgWrongPass] = React.useState('');
    const API = "http://localhost:8000";
    const history = useHistory();
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        confirmPassword:'',
        comfirmedPassword: false,
        showPassword: false,
        showConfirmPassword: false,
    });
    const [, setMsg] = React.useState('');

    let datas = localStorage.getItem('data');
    let data = JSON.parse(datas);
    console.log(data.id);

    // console.log(dataID, dataName, dataEmail);
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
      setValues({
          ...values,
          showPassword: !values.showPassword,
      });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(values.password === values.confirmPassword){
          setValues({
              ...values,
              confirmedPassword: !values.confirmedPassword,
          });
      } else {
        setMsgWrongPass('Password tidak cocok!');
        // alert("Password tidak cocok!");
      }

      if(values.confirmedPassword){
          await axios.put(
              `${API}/billissuer`,
              {   
                  id: data.id,
                  name: data.name,
                  password: values.password,
                  email: data.email,
              },
              {
                  headers: {
                      'Content-Type': 'application/json',
                      // Authorization: 'Bearer token...',
                  },
              }
          )
          .then(function (response) {
              // handle success
              setMsg(response.data.message);
              console.log('axios', response);
              localStorage.clear();
              history.push({
                  pathname: "/passUpdated",
              });
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          });
      }
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
            <img src={forgetPass} alt="forgetPass"  position="center"/>
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
          }}>
            <p>NEW CREDENTIALS</p>
          </Item>
          <Item sx={{
                    textAlign: 'center',
                    color:'#E5E5E5', 
                    py:1, 
                    fontSize:'1.2rem'
          }}>
            <p>Your identity has been verified! Set your new password</p>
          </Item>
          <form method="POST">
            <Item>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                type={values.showPassword ? 'text' : 'password'}
                className={classes.root}
                placeholder="New Password"
                onChange={handleChange('password')}
                autoComplete="current-password"
                fullWidth
                InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                        <LockResetIcon />
                      </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Item>
            <Item>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                placeholder="Confirm Password"
                onChange={handleChange('confirmPassword')}
                type={values.showConfirmPassword ? 'text' : 'password'}
                autoComplete="current-password"
                fullWidth
                InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                        <LockOpenIcon />
                      </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            edge="end"
                        >
                        {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Item>
            {msgWrongPass ? <p style={{color:'red', marginBottom: 0}}>{`* ${msgWrongPass}`}</p> : null}
            <Item sx={{textAlign: 'center',}}>
                <Box 
                  sx={{
                      bgcolor: '#FFC700', 
                      borderRadius:2, 
                      color:'black', 
                      py:1, 
                      fontSize:'1.2rem'
                }}>
                  <Link component="button" underline="none" className={custom.addNewItem} onClick={handleSubmit}>
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

export default FormNewPass;
