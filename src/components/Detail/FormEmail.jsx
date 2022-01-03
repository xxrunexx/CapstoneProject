import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import custom from './formEmail.module.css';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import { InputAdornment } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import forgetPass from '../../assets/img/forgetPass.png'

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

const FormEmail = () => {
    const [valueEmail, setValueEmail] = React.useState('');

    const handleChangeEmail = (event) => {
        setValueEmail(event.target.value);
    };

    const classes = useStyles();
    return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container justifyContent="center">
        <Grid item xs={8} >
        <Item sx={{
                    textAlign: 'center',
                    color:'#E5E5E5', 
                    py:1, 
                    fontSize:'1.2rem',
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
                    color:'#E5E5E5', 
                    py:1, 
                    fontSize:'1.2rem',
                    fontFamily: 'Michroma',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '64px',
                    lineHeight: '91px',
                    color: '#E5E5E5',                    
          }}>
            <p>FORGET PASSWORD</p>
          </Item>
          <Item sx={{
                    textAlign: 'center',
                    color:'#E5E5E5', 
                    py:1, 
                    fontSize:'1.2rem'
          }}>
            <p>Provide your account’s email for which you want to reset your password</p>
          </Item>
          <Item>
            <TextField
              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
              className={classes.root}
              placeholder="Email"
              value={valueEmail}
              onChange={handleChangeEmail}
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
                    {'NEXT'}
                </Link>
              </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
    );
}

export default FormEmail;
