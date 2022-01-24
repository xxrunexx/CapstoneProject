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

const Formclient = ({history}) => {
    const classes = useStyles();
    // const authToken = localStorage.getItem('token');

    const [values, setValues] = useState({
        nik:'',
        name:'',
        phone:'',
        address:'',
        email:'',
    });
    const [, setMsg] = useState('');
    
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    
    const passDashboard= () => {
      history.push({
          pathname: "/dashboard"
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values.nik);
      console.log(values.name);
      console.log(values.phone);
      console.log(values.address);
      console.log(values.email);
      axios
          .post(
            'http://localhost:8000/client/add',
            {
                // nik: 317401518428151,
                // name: 'Raviy',
                // phone: '08128080977',
                // address: 'Bogor',
                // email: 'dyah@gmail.com'
                nik: values.nik,
                name: values.name,
                phone: values.phone,
                address: values.address,
                email: values.email
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${authToken}`,
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
    }

    return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container justifyContent="center">
        <Grid item xs={8} >
            <Item><h1>New Client</h1></Item>
            <form onSubmit={handleSubmit} method="POST">
            <Item>
              <span className={custom.titleInput}>Client's NIK</span>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                placeholder="Input Client NIK ..."
                onChange={handleChange('nik')}
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
                onChange={handleChange('name')}
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
                placeholder="Input Client Phone Number ..."
                // value={valuePhone}
                onChange={handleChange('phone')}
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
                // value={valueAddress}
                onChange={handleChange('address')}
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
                placeholder="Input Client Email ..."
                // value={valueEmail}
                type="email"
                onChange={handleChange('email')}
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
                              <Link component="button" onClick={passDashboard} underline="none" className={custom.addNewItem}>
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
                              <Link component="button" underline="none" className={custom.addNewItem} type="submit">
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