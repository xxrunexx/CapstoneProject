import React from 'react';
import styles from './Register.module.css';
import { Grid, TextField, Button } from '@mui/material';
import { InputAdornment } from '@mui/material';
import wavebg from '../assets/img/wave.svg';
import logo from '../assets/img/logo.png';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Registerdetail = () => {
    const history = useHistory();
    const [values, setValues] = React.useState({
        companyName:'',
        companyAddress:'',
        companyPhone:'',
        companySite:'',
    });
    const [, setMsg] = React.useState('');
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const dataResp = localStorage.getItem('userID');
    // console.log(dataResp);
    // console.log(values.companyName);
    // console.log(values.companyAddress);
    // console.log(values.companyPhone);
    // console.log(values.companySite);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(
                'http://localhost:8000/billissuerdetail/add',
                {
                    bill_issuer_id: dataResp,
                    company_name: values.companyName,
                    company_address: values.companyAddress,
                    company_phone: values.companyPhone,
                    company_site: values.companySite
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
                localStorage.removeItem('userID');
                history.push({
                    pathname: "/login",
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
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
                            onChange={handleChange('companyName')}
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
                            // id="outlined-required"
                            onChange={handleChange('companyAddress')}
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
                            // id="outlined-required"
                            onChange={handleChange('companyPhone')}
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
                            // id="outlined-required"
                            onChange={handleChange('companySite')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <LanguageIcon />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder= "Company Site"
                        />
                        <p id= {styles.aTerms} >By signing up, I agree to the Privacy Policy and Terms of Service</p>
                        <Button variant="contained" type="submit" id= {styles.btnRegister}>CREATE ACCOUNT</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default Registerdetail;
