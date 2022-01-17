import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import custom from './detailPaymentGateway.module.css';
// import styles from './detailPaymentGateway.module.css';
import Link from '@mui/material/Link';
import { InputAdornment } from '@mui/material';
import billIssuerInfo from '../../assets/img/billIssuerInfo.png';
import logo from '../../assets/img/logo.png';
import LockIcon from '@mui/icons-material/Lock';
import CircleIcon from '@mui/icons-material/Circle';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    textAlign: 'right',
    backgroundColor: '#131522',
    color: 'white',
    boxShadow: 'none'
}));

const DetailPaymentGateway = (props) => {
    return (
    <Box sx={{ flexGrow: 1}}>
      <Grid >
        <Item>
          <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} >
                <img src={logo} alt="logo" className = {custom.logo}/>
              </Grid>
              <Grid item xs={12} md={6} >
                <h1>{props.data[0].company_name}</h1> 
                <h3>{props.data[0].company_email}</h3> 
              </Grid>
            </Grid>
          </Box>
        </Item>
      </Grid>
      <Grid item xs={12} md={12} lg={12} >
        <Item>
          <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} >
                <h5>Total</h5> 
              </Grid>
              <Grid item xs={12} md={6} >
                <h5>{props.data[0].total}</h5>
              </Grid>
            </Grid>
          </Box>
        </Item> <hr item width='50%' textAlign='left' marginLeft='0' color='#FFC700'></hr>
      </Grid> 
      
    </Box>
    );
}

export default DetailPaymentGateway;
