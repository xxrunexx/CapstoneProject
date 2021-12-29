// Import modules
import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { InputAdornment } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';

// Import assets
import "../assets/css/style.css"
import wavebg from '../assets/img/wave.svg'

function Login() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div style={{backgroundColor: "#131522", height: "100vh"}}>
            <img src={wavebg} alt="Wavebg"/>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item xs={6}>
                    <p id="title">
                        <i class="far fa-paper-plane">
                            </i>invoice.in
                    </p>
                    <TextField
                        id="input-with-icon-textfield"
                        label= "Email"
                        required
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <EmailIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        style={{
                            backgroundColor: "#E5E5E5",
                            width: "100%"
                        }}
                    />
                    <FormControl 
                        // sx={{ m: 1, width: '25ch' }} 
                        required
                        variant="standard"
                        style={{
                            backgroundColor: "#E5E5E5",
                            width: "100%",
                        }}
                    >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <a id="a-forgetpass">Forget Password ?</a>
                    <Button variant="contained" id="btn-login">Login</Button>
                    <a id="a-register" href="#">Don't have an account ? <span style={{color: "#FFC700"}}>Click here</span></a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
