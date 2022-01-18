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
import bni from '../../assets/img/bni.png';
import bri from '../../assets/img/bri.png';
import dana from '../../assets/img/dana.png';

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
              <Grid item xs={12} md={6}>
                <Grid item xs={6} container justifyContent="start" sx={{mb:3}}>
                  <img src={logo} alt="logo" className = {custom.logo}/>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} >
                <h1>{props.data[0].company_name}</h1> 
                <h3>{props.data[0].company_email}</h3> 
              </Grid>
              <Box sx={{ flexGrow: 1}}>
                  <Grid container spacing={2} sx={{px:4}}>
                    <Grid item xs={6} container justifyContent="start">
                      <h3>Total</h3> 
                    </Grid>
                    <Grid item xs={6} container justifyContent="start">
                      <h3>{props.data[0].total}</h3> 
                    </Grid>
                  </Grid> <hr item width='50%' textAlign='left' marginLeft='0' color='#FFC700'></hr>
                </Box>
            </Grid>
          </Box>
        </Item>
      </Grid>
      <Grid container justifyContent="center" color='#C4C4C4'>
                <Grid item xs={8} sx={{mt:2}} >
                    <Item sx={{py:7, px:5, borderRadius:5}}>
                        <Box sx={{ flexGrow: 1}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12} lg={12} >
                                    <Item>
                                        <Box sx={{ flexGrow: 1,}}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={4} >
                                                    <h3>Payment Methods</h3> 
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    <Item sx={{bgcolor:'#C4C4C4', color:'#131522', px:3, py:3}}>
                                        <Box sx={{ flexGrow: 1,}}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={4} >
                                                    <h5>Transfer Bank</h5> 
                                                </Grid>
                                                <Grid item xs={12} md={4} >
                                                    <img src={bni} alt="bni"  position="center"/>
                                                </Grid>
                                                <Grid item xs={12} md={4} >
                                                    <img src={bri} alt="bri"  position="center"/>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    <Item>
                                        <Box sx={{ flexGrow: 1,}}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={4} >
                                                    <h5>Dana</h5> 
                                                </Grid>
                                                <Grid item xs={12} md={4} >
                                                </Grid>
                                                <Grid item xs={12} md={4} >
                                                    <img src={dana} alt="dana"  position="center"/>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    <Item sx={{bgcolor:'#C4C4C4', color:'#131522', borderRadius:5, px:3, py:3}}>
                                        <Box sx={{ flexGrow: 1,}}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={6} className={custom.responsive} >
                                                    <div className={`mb-3 ${custom.headInfo}`}>
                                                        <span>Item Name</span>
                                                    </div>
                                                    <div className={custom.detailInfo}>
                                                        <span>2P Internet + TV</span>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={3} sx={{textAlign:'right'}} className={custom.responsive}>
                                                    <div className={`mb-3 ${custom.headInfo}`}>
                                                        <span>Price</span>
                                                    </div>
                                                    <div className={custom.detailInfo}>
                                                        <span>Rp. 240.000</span>
                                                    </div> 
                                                </Grid>
                                                <Grid item xs={12} md={3} sx={{textAlign:'right'}} className={custom.responsive}>
                                                    <div className={`mb-3 ${custom.headInfo}`}>
                                                        <span>Total</span>
                                                    </div>
                                                    <div className={custom.detailInfo}>
                                                        <span>Rp. 240.000</span>
                                                    </div> 
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    <Box sx={{
                                        display: 'flex', 
                                        flexDirection: 'row-reverse', 
                                        mt: 3,
                                    }}>
                                        <Link sx={{
                                            bgcolor: '#FFC700',
                                            color: '#131522',
                                            px:3,
                                            py:0.5,
                                            fontSize: '1.5rem',
                                            borderRadius: 3
                                        }} href="#" underline="none" className={`${custom.payNow}`}>
                                            {'PAY NOW'}
                                        </Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
    </Box>
    );
}

export default DetailPaymentGateway;

