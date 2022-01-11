import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import custom from './formBillIssuerInfo.module.css';
import Link from '@mui/material/Link';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { InputAdornment } from '@mui/material';
import billIssuerInfo from '../../assets/img/billIssuerInfo.png';
import LockResetIcon from '@mui/icons-material/LockReset';

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

const FormBillIssuerInfo = (props) => {
    const [valueName, setValueName] = React.useState('');
    const [valueEmail, setValueEmail] = React.useState('');
    const [valuePassword, setValuePassword] = React.useState('');
    const [valueCompanyName, setValueCompanyName] = React.useState('');
    const [valueCompanyAddress, setValueCompanyAddress] = React.useState('');
    const [valueCompanyPhone, setValueCompanyPhone] = React.useState('');
    const [valueCompanySite, setValueCompanySite] = React.useState('');
    const handleChangeName = (event) => {
      setValueName(event.target.value);
    };
    const handleChangeEmail = (event) => {
      setValueEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
      setValuePassword(event.target.value);
    };
    const handleChangeCompanyName = (event) => {
      setValueCompanyName(event.target.value);
    };
    const handleChangeCompanyAddress = (event) => {
      setValueCompanyAddress(event.target.value);
    };
    const handleChangeCompanyPhone = (event) => {
      setValueCompanyPhone(event.target.value);
    };
    const handleChangeCompanySite = (event) => {
      setValueCompanySite(event.target.value);
    };

    const classes = useStyles();
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
          }}>
            <p>{props.data[0].name}</p>
          </Item>
          <Item sx={{
                    textAlign: 'center',
                    color:'#E5E5E5', 
                    py:1, 
                    fontSize: '36px',
          }}>
            <p>{props.data[0].company_name}</p>
          </Item>
          <Item>
            <TextField
              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
              className={classes.root}
              placeholder = {props.data[0].email}
              value={valueEmail}
              onChange={handleChangeEmail}
              fullWidth
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <LockResetIcon />
                    </InputAdornment>
                ),
                }}
            />
          </Item>

          <Item>
            <TextField
              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
              className={classes.root}
              placeholder={props.data[0].company_address}
              value={valuePassword}
              onChange={handleChangePassword}
              fullWidth
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <LockOpenIcon />
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
              value={valueCompanyName}
              onChange={handleChangeCompanyName}
              fullWidth
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <LockOpenIcon />
                    </InputAdornment>
                ),
                }}
            />
            {props.data[0].company_phone}
          </Item>
          <Item>
            <TextField
              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
              className={classes.root}
              placeholder="Confirm Password"
              value={valueCompanyAddress}
              onChange={handleChangeCompanyAddress}
              fullWidth
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <LockOpenIcon />
                    </InputAdornment>
                ),
                }}
            />
            {props.data[0].company_site}
          </Item>
          <Item>
            <TextField
              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
              className={classes.root}
              placeholder="Confirm Password"
              value={valueCompanyPhone}
              onChange={handleChangeCompanyPhone}
              fullWidth
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <LockOpenIcon />
                    </InputAdornment>
                ),
                }}
            />
            {props.data[0].company_site}
          </Item>
          <Item>
            <TextField
              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
              className={classes.root}
              placeholder="Confirm Password"
              value={valueCompanySite}
              onChange={handleChangeCompanySite}
              fullWidth
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <LockOpenIcon />
                    </InputAdornment>
                ),
                }}
            />
            {props.data[0].company_site}
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
                <Link href="#" underline="none" className={custom.addNewItem}>
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
