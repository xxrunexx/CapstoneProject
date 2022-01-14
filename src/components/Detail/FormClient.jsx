import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import custom from './formInvoice.module.css';
import Link from '@mui/material/Link';
import { useState } from 'react';
import axios from 'axios';
// import { Button } from 'bootstrap';


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

const Formclient = () => {
    const [valueNIK, setValueNIK] = React.useState('');
    const [valueName, setValueName] = React.useState('');
    const [valueEmail, setValueEmail] = React.useState('');
    const [valueAddress, setValueAddress] = React.useState('');
    const [valuePhone, setValuePhone] = React.useState('');
    const [, setMsg] = useState('');

    const handleChangeNIK = (event) => {
        setValueNIK(event.target.value);
    };
    const handleChangeName = (event) => {
        setValueName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setValueEmail(event.target.value);
    };
    const handleChangeAddress = (event) => {
        setValueAddress(event.target.value);
    };
    const handleChangePhone = (event) => {
        setValuePhone(event.target.value);
    };
    const classes = useStyles();

    // Axios
    // useEffect(() => {
      axios
          .post(
            'http://localhost:8000/client/add',
            {
                // nik: 317401518428151,
                // name: 'Raviy',
                // phone: '08128080977',
                // address: 'Bogor',
                // email: 'dyah@gmail.com'
                nik: valueNIK,
                name: valueName,
                phone: valuePhone,
                address: valueAddress,
                email: valueEmail
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
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
    // }, []);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(valueNIK);
      setValueNIK("");
      setValueName("");
      setValuePhone("");
      setValueAddress("");
      setValueEmail("");
    }

    return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container justifyContent="center">
        <Grid item xs={8} >
          <form onSubmit={handleSubmit}>
            <Item><h1>New Client</h1></Item>
            <Item>
              <span className={custom.titleInput}>Client's NIK</span>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                placeholder="Input Client NIK ..."
                value={valueNIK}
                onChange={handleChangeNIK}
                fullWidth
                InputProps={{
                  classes:{notchedOutline:classes.noBorder}
                }}
              />
            </Item>
            <Item>
              <span className={custom.titleInput}>Client's Name</span>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                placeholder="Input Client Name ..."
                value={valueName}
                onChange={handleChangeName}
                fullWidth
                InputProps={{
                  classes:{notchedOutline:classes.noBorder}
                }}
              />
            </Item>
            <Item>
              <span className={custom.titleInput}>Client's Phone Number</span>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                placeholder="Input Client Email ..."
                value={valuePhone}
                onChange={handleChangePhone}
                fullWidth
                InputProps={{
                  classes:{notchedOutline:classes.noBorder}
                }}
              />
            </Item>
            <Item>
              <span className={custom.titleInput}>Client's Address</span>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                placeholder="Input Client Address ..."
                value={valueAddress}
                onChange={handleChangeAddress}
                fullWidth
                InputProps={{
                  classes:{notchedOutline:classes.noBorder}
                }}
              />
            </Item>
            <Item>
              <span className={custom.titleInput}>Client's Email</span>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                placeholder="Input Client Address ..."
                value={valueEmail}
                onChange={handleChangeEmail}
                fullWidth
                InputProps={{
                  classes:{notchedOutline:classes.noBorder}
                }}
              />
            </Item>
            <Item sx={{mt:10}}>
              <Box sx={{ flexGrow: 1}}>
                <Grid container justifyContent="space-between" spacing={2}>
                  <Grid item xs={12} md={3} >
                      <Item sx={{textAlign: 'center',}} className={`${custom.multipleInput}`}>
                          <Box 
                              sx={{
                                  bgcolor: '#D84343', 
                                  borderRadius:2, 
                                  color:'black', 
                                  py:1, 
                                  fontSize:'1.2rem'
                          }}>
                              <Link href="#" underline="none" className={custom.addNewItem}>
                                  {'DISCARD'}
                              </Link>
                          </Box>
                      </Item>
                  </Grid>
                  <Grid item xs={12} md={3} >
                      <Item sx={{textAlign: 'center',}} className={`${custom.multipleInput}`}>
                          <Box 
                              sx={{
                                  bgcolor: '#FFC700', 
                                  borderRadius:2, 
                                  color:'black', 
                                  py:1, 
                                  fontSize:'1.2rem'
                          }}>
                              <Link href="#" underline="none" className={custom.addNewItem} type="submit">
                                  {'CREATE CLIENT'}
                              </Link>
                          </Box>
                      </Item>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </form>
        </Grid>
      </Grid>
    </Box>
    );
}

export default Formclient;