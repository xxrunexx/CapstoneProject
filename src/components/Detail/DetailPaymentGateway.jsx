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


const DetailPaymentGateway = (props) => {
    const [valueEmail, setValueEmail] = React.useState('');
    const handleChangeEmail = (event) => {
      setValueEmail(event.target.value);
    };
  

    const classes = useStyles();
    return (
    <Box sx={{ flexGrow: 1}}>
      <Grid item xs={12} md={12} lg={12} >
          <Item sx={{
                    textAlign: 'right',
                    color:'#E5E5E5', 
                    py:1, 
                    fontSize: '36px',
                    paddingTop: '0px',
                    paddingBottom: '10px' , 
                    }}>
            <Box sx={{ flexGrow: 1}}>
              <Grid container spacing={2} >
                <Grid item xs={12} md={12} lg={12} >
                  <Item>
                    <Box sx={{ flexGrow: 1,}}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4} >
                          <img src={logo} alt="logo" className = {custom.logo}/>
                        </Grid>
                        <Grid item xs={12} md={4} >
                          <p>{props.data[0].company_name}</p> 
                          <span>{props.data[0].company_email}</span> 
                        </Grid>
                      </Grid>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Item>
      </Grid>
      <Grid>
        <Grid item xs={8} >
          <Item>
             <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                id="outlined-uncontrolled"
                label="Email"
                fullWidth
                value={props.data[0].email}
                onChange={handleChangeEmail}
                variant="filled"
                InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                      <EmailIcon />
                      </InputAdornment>
                  ),
                  }}
           />
          </Item>
        </Grid>
      </Grid>
    </Box>
    );
}

export default DetailPaymentGateway;