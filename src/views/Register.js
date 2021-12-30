// Import modules
import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { InputAdornment } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import styles from './Register.module.css'
import wavebg from '../assets/img/wave.svg'
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import SendIcon from '@mui/icons-material/Send';

function Register() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

    return (
        <div className={styles.bgRegister} >
            <img src={wavebg} alt="Wavebg"/>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid  item xs={6} className={styles.gridRegisterForm}>
                    
                        <p id={styles.title}> 
                        <SendIcon color = '#FFC700' fontSize = "extralarge"/> invoice.in 
                        </p>
                        <TextField
                            required
                            className= {styles.textfieldRegister}
                            id="outlined-required"
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
                            id="outlined-required"
                            type = "email"
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
                            id="outlined-required"
                            type="password"
                            autoComplete="current-password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <LockIcon />
                                    </InputAdornment>
                                ),
                                }}
                            placeholder= "Password"
                            
                        />
                        <TextField
                            required
                            className= {styles.textfieldRegister}
                            id="outlined-password-input"
                            type="password"
                            autoComplete="current-password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <LockIcon />
                                    </InputAdornment>
                                ),
                                }}
                            placeholder= "Confirm Password"
                        />
                        <TextField
                            required
                            className= {styles.textfieldRegister}
                            id="outlined-required"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <BusinessCenterIcon />
                                    </InputAdornment>
                                ),
                                }}
                            placeholder= "Company Name"
                        />
                        <TextField
                            required
                            className= {styles.textfieldRegister}
                            id="outlined-required"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <MapIcon />
                                    </InputAdornment>
                                ),
                                }}
                            placeholder= "Company Address"
                        />
                        <TextField
                            required
                            className= {styles.textfieldRegister}
                            id="outlined-required"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <PhoneIcon />
                                    </InputAdornment>
                                ),
                                }}
                            placeholder= "Company Phone"
                        />
                        <TextField
                            required
                            className= {styles.textfieldRegister}
                            id="outlined-required"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <LanguageIcon />
                                    </InputAdornment>
                                ),
                                }}
                            placeholder= "Company Site"
                        />

                    <a id= {styles.aTerms} href="#">By signing up, I agree to the Privacy Policy and Terms of Service</a>
                    <Button variant="contained" id= {styles.btnRegister}>CREATE ACCOUNT</Button>
                   
                </Grid>
            </Grid>
        </div>
    )
}

export default Register
