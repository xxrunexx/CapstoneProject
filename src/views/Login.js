// Import modules
import React from 'react'
import { Grid, TextField } from '@mui/material'
import { InputAdornment } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Import assets
import "../assets/css/style.css"
import { fontStyle, fontWeight, grid } from '@mui/system';

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
        <div style={{backgroundColor: "#131522",}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFC700" fill-opacity="1" d="M0,32L0,64L68.6,64L68.6,96L137.1,96L137.1,64L205.7,64L205.7,128L274.3,128L274.3,224L342.9,224L342.9,224L411.4,224L411.4,224L480,224L480,288L548.6,288L548.6,256L617.1,256L617.1,224L685.7,224L685.7,224L754.3,224L754.3,64L822.9,64L822.9,288L891.4,288L891.4,288L960,288L960,128L1028.6,128L1028.6,32L1097.1,32L1097.1,256L1165.7,256L1165.7,192L1234.3,192L1234.3,32L1302.9,32L1302.9,0L1371.4,0L1371.4,32L1440,32L1440,0L1371.4,0L1371.4,0L1302.9,0L1302.9,0L1234.3,0L1234.3,0L1165.7,0L1165.7,0L1097.1,0L1097.1,0L1028.6,0L1028.6,0L960,0L960,0L891.4,0L891.4,0L822.9,0L822.9,0L754.3,0L754.3,0L685.7,0L685.7,0L617.1,0L617.1,0L548.6,0L548.6,0L480,0L480,0L411.4,0L411.4,0L342.9,0L342.9,0L274.3,0L274.3,0L205.7,0L205.7,0L137.1,0L137.1,0L68.6,0L68.6,0L0,0L0,0Z"></path></svg>
            <Grid container direction="column" justifyContent="center" alignItems="center">
            {/* <Grid container style={{margin: "0 auto ", textAlign: "center"}}> */}
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
                        sx={{ m: 1, width: '25ch' }} 
                        required
                        variant="outlined"
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
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
