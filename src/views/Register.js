// Import modules
import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { InputAdornment } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import styles from './Register.module.css'
import wavebg from '../assets/img/wave.svg'
import logo from '../assets/img/logo.png'
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

function Register({history}) {
    const [values, setValues] = React.useState({
        name:'',
        email:'',
        password: '',
        confirmPassword:'',
        companyName:'',
        companyAddress:'',
        companyPhone:'',
        companySite:'',
        comfirmedPassword: false,
        showPassword: false,
        showConfirmPassword: false,
    });
    const [, setMsg] = React.useState('');
    
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

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(values.name, values.email, values.password, values.companyName, values.companyAddress, values.companyPhone, values.companySite);
        if(values.password === values.confirmPassword){
            setValues({
                ...values,
                confirmedPassword: !values.confirmedPassword,
            });
        }

        if(values.confirmedPassword){
            axios
                .post(
                    'http://localhost:8000/billissuer/register',
                    {
                        name: values.name,
                        password: values.password,
                        email: values.email,
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
                    localStorage.setItem("data", response.data.data.id);
                    history.push({
                        pathname: "/registerDetail",
                    });
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    };

    return (
        <div className={styles.bgRegister} >
            <img src={wavebg} alt="Wavebg"/>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid  item xs={6} className={styles.gridRegisterForm}>
                    <form onSubmit={handleSubmit} method="POST">
                        <p id={styles.title}> 
                        <img src={logo} alt="logo" className = {styles.logo}/> invoice.in 
                        </p>
                        <TextField
                            required
                            className= {styles.textfieldRegister}
                            // id="outlined-required"
                            onChange={handleChange('name')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <PersonIcon />
                                    </InputAdornment>
                                ),
                                }}
                            placeholder= "Name"
                        />
                        <TextField
                            required
                            className= {styles.textfieldRegister}
                            // id="outlined-required"
                            type = "email"
                            onChange={handleChange('email')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <EmailIcon />
                                    </InputAdornment>
                                ),
                                }}
                            placeholder= "Email"
                        />
                        <TextField
                            required
                            className= {styles.textfieldRegister}
                            // id="outlined-required"
                            type={values.showPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            onChange={handleChange('password')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <LockIcon />
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
                            placeholder= "Password"
                            
                        />
                        <TextField
                            required
                            className= {styles.textfieldRegister}
                            // id="outlined-password-input"
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            onChange={handleChange('confirmPassword')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <LockIcon />
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
                            placeholder= "Confirm Password"
                        />
                        <p id= {styles.aTerms} >By signing up, I agree to the Privacy Policy and Terms of Service</p>
                        <Button variant="contained" type="submit" id= {styles.btnRegister}>NEXT</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default Register
