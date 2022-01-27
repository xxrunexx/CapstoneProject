import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import custom from './formInvoice.module.css';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';
import Select from '@mui/material/Select';
import axios from 'axios';

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

const Forminvoice = () => {
    const classes = useStyles();
    const token = React.useRef('');
    const id = React.useRef('');
    token.current = localStorage.getItem('token');
    const [datas, setDatas] = React.useState(null);
    const [dataDetail, setDataDetail] = React.useState(null);
    const [values, setValues] = React.useState({
        clientID:0,
        email:'',
        address:'',
        invoiceDate:'',
        terms:'7-Days',
        paymentDate:'',
        itemName:'',
        total:''
    });

    React.useEffect(() => {
      id.current = values.clientID
      const getDetail = () => {
        axios.get(
            `http://localhost:8000/client/${id.current}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.current}`,
                },
            }
        )
        .then((response)=>{
        // setResultUser(response.data);
          setDataDetail(response.data);
          setValues((oldState) => {
            return {
              ...oldState,
              id: id.current,
              name: response.data.data.name,
              address: response.data.data.address,
            }
          })
        });
      }
      getDetail();
    }, []);
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
      // axios.get(
      //     `http://localhost:8000/client/${values.clientID}`,
      //     {
      //         headers: {
      //             'Content-Type': 'application/json',
      //             'Authorization': `Bearer ${token.current}`,
      //         },
      //     }
      // )
      // .then((response)=>{
      // // setResultUser(response.data);
      //   setDataDetail(response.data);
      //   setValues({
      //     ...values, 
      //     email:response.data.data.email,
      //     address:response.data.data.address,
      //   });
      // });
      // await axios.get(
      //   `http://localhost:8000/client/${id}`, {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${token.current}`,
      //     },
      //   }).then((response) => {
      //     setValues({
      //       clientID:id,
      //       email:response.data.data.email,
      //       address:response.data.data.address,
      //       invoiceDate:'',
      //       terms:'7-Days',
      //       paymentDate:'',
      //       itemName:'',
      //       total:''
      //     });
      //   });
    };
    const days = [
        {
          value: '7-Days',
          label: '7 Day',
        },
        {
          value: '10-Days',
          label: '10 Day',
        },
        {
          value: '30-Days',
          label: '30 Day',
        },
    ];
    React.useEffect(() => {
        const getClient = async () => {
            await axios.get(
                'http://localhost:8000/client',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.current}`,
                    },
                }
            )
            .then((response)=>{
            // setResultUser(response.data);
                setDatas(response.data);
            });
        };
        getClient();
    },[]);
    // const handleClientDataChange = async (id) => {
    //   await axios.get(
    //     `http://localhost:8000/client/${id}`, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token.current}`,
    //       },
    //     }).then((response) => {
    //       setValues({
    //         clientID:id,
    //         email:response.data.data.email,
    //         address:response.data.data.address,
    //         invoiceDate:'',
    //         terms:'7-Days',
    //         paymentDate:'',
    //         itemName:'',
    //         total:''
    //       });
    //     });
    // };
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(values);
    }
    const history = useHistory();
    const linkDiscard = () => {
        history.push({
          pathname: '/dashboard'
        })
    }
    console.log(dataDetail);
    return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container justifyContent="center">
        <Grid item xs={8} >
          <Item><h1>New Invoice</h1></Item>
          <form onSubmit={handleSubmit} method="post">
            <Item>
              <span className={custom.titleInput}>Client's Name</span>
              <Select
                  sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                  className={classes.root}
                  select 
                  value={values.clientID} 
                  onChange={handleChange('clientID')}
                  fullWidth
                  InputProps={{
                      classes:{notchedOutline:classes.noBorder}
                  }}
              >   
                  <MenuItem disabled value={0}><em>Select Client</em></MenuItem>
                  {datas?.data.map((value, key) => {
                    return (
                      <MenuItem key={key} value={value.id} data={value}>{value.name}</MenuItem>
                    );
                  })}
              </Select>
            </Item>
            <Item>
              <span className={custom.titleInput}>Client's Email</span>
              <TextField
                sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                className={classes.root}
                placeholder="Input Client Email ..."
                onChange={handleChange('email')}
                fullWidth
                value={values.email}
                disabled
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
                onChange={handleChange('address')}
                fullWidth
                value={values.address}
                disabled
                InputProps={{
                  classes:{notchedOutline:classes.noBorder}
                }}
              />
            </Item>
            <Item>
              <Box sx={{ flexGrow: 1}}>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item xs={12} md={6} >
                      <Item className={custom.multipleInput}>
                          <span className={custom.titleInput}>Invoice Date</span>
                          <TextField
                              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                              className={classes.root}
                              placeholder="Input Date for Invoice ..."
                              type="date"
                              defaultValue="2022-11-24"
                              onChange={handleChange('invoiceDate')}
                              fullWidth
                              InputProps={{
                                  classes:{notchedOutline:classes.noBorder}
                              }}
                          />
                      </Item>
                  </Grid>
                  <Grid item xs={12} md={6} >
                      <Item className={custom.multipleInput}>
                          <span className={custom.titleInput}>Payment Terms</span>
                          <TextField
                              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                              className={classes.root}
                              select
                              value={values.terms}
                              onChange={handleChange('terms')}
                              fullWidth
                              InputProps={{
                                  classes:{notchedOutline:classes.noBorder}
                              }}
                          >
                              {days.map((option, key) => (
                                  <MenuItem key={key} value={option.value}>
                                      {option.label}
                                  </MenuItem>
                              ))}
                          </TextField>
                      </Item>
                  </Grid>
                </Grid>
              </Box>
            </Item>
            <Item>
              <Box sx={{ flexGrow: 1}}>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item xs={12} md={6} >
                      <Item className={custom.multipleInput}>
                          <span className={custom.titleInput}>Item Name</span>
                          <TextField
                              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                              className={classes.root}
                              placeholder="Input Item Name for Invoice ..."
                              onChange={handleChange('itemName')}
                              fullWidth
                              InputProps={{
                                  classes:{notchedOutline:classes.noBorder}
                              }}
                          />
                      </Item>
                  </Grid>
                  <Grid item xs={12} md={6} >
                      <Item className={custom.multipleInput}>
                          <span className={custom.titleInput}>Total</span>
                          <TextField
                              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                              className={classes.root}
                              placeholder="Input Total ..."
                              onChange={handleChange('total')}
                              fullWidth
                              InputProps={{
                                  classes:{notchedOutline:classes.noBorder}
                              }}
                          />
                      </Item>
                  </Grid>
                </Grid>
              </Box>
            </Item>
            {/* <Item sx={{textAlign: 'center',}}>
                <Box 
                  sx={{
                      bgcolor: '#FFC700', 
                      borderRadius:2, 
                      color:'black', 
                      py:1, 
                      fontSize:'1.2rem'
                }}>
                  <Link href="#" underline="none" className={custom.addNewItem}>
                      {'ADD NEW ITEM'}
                  </Link>
                </Box>
            </Item> */}
            <Item>
            <Box sx={{ flexGrow: 1, mt:5}}>
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
                              <Link component="button" underline="none" className={custom.addNewItem} onClick={linkDiscard}>
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
                                  {'CREATE INVOICE'}
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

export default Forminvoice;
