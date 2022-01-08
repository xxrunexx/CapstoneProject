import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CircleIcon from '@mui/icons-material/Circle';
import custom from './updateInvoice.module.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(2),
    textAlign: 'left',
    backgroundColor: '#E5E5E5',
    color: '#131522',
    boxShadow: 'none',
}));

const Updateinvoice = (props) => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container justifyContent="center">
                <Grid item xs={8} >
                    <Item sx={{pt:4, pb:3, px:5, borderRadius:5}}>
                        <Box sx={{ flexGrow: 1}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12} lg={5} >
                                    <Item>
                                        <Box sx={{ flexGrow: 1,}}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={4} >
                                                    <h3>Status</h3> 
                                                </Grid>
                                                <Grid item xs={12} md={5} sx={{mt:0.2}} >
                                                    <Item sx={{textAlign: 'center', bgcolor: 'rgba(216,67,67,0.45)', color: 'rgba(231,70,70,0.90)', py:0.8, borderRadius:6}}>
                                                        <CircleIcon sx={{mr:1, fontSize:'0.875rem'}}/>{props.status}
                                                    </Item>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={12} lg={7}>
                                    <Item>
                                        <Box sx={{ flexGrow: 1}}>
                                            <Grid container spacing={2} justifyContent="flex-end">
                                                <Grid item xs={12} md={2}>
                                                    <Item sx={{textAlign: 'center', bgcolor: '#6C6C73', py:1, borderRadius:2}}>
                                                        <Link href="#" underline="none" className={custom.link}>
                                                            {'Edit'}
                                                        </Link>
                                                    </Item>
                                                </Grid>
                                                <Grid item xs={12} md={2}>
                                                    <Item sx={{textAlign: 'center', bgcolor: 'rgba(231,70,70,0.90)', py:1, borderRadius:2}}>
                                                        <Link href="#" underline="none" className={custom.link}>
                                                            {'Delete'}
                                                        </Link>
                                                    </Item> 
                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <Item sx={{textAlign: 'center', bgcolor: '#FFC700', py:1, borderRadius:2}}>
                                                        <Link href="#" underline="none" className={custom.link}>
                                                            {'Mark as Paid'}
                                                        </Link>
                                                    </Item> 
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={8} sx={{mt:2}} >
                    <Item sx={{py:7, px:5, borderRadius:5}}>
                        <Box sx={{ flexGrow: 1}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12} lg={12} >
                                    <Item>
                                        <Box sx={{ flexGrow: 1,}}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={4} >
                                                    <h3>#5F892S3</h3> 
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
                                                    <h5>Invoice Date</h5> 
                                                    <span>Dec 24, 2021</span>
                                                </Grid>
                                                <Grid item xs={12} md={4} >
                                                    <h5>Bill To</h5> 
                                                    <span>Harun Rasyid</span> 
                                                </Grid>
                                                <Grid item xs={12} md={4} >
                                                    <h5>Send To</h5> 
                                                    <span>rasyid.id3@gmail.com</span> 
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
                                                    <h5>Payment Date</h5> 
                                                    <span>Dec 31, 2021</span>
                                                </Grid>
                                                <Grid item xs={12} md={4} >
                                                    <h5>Address</h5> 
                                                    <span>Tiban Lama RT 02 RW 15 Sekupang 45311 Batam</span> 
                                                </Grid>
                                                <Grid item xs={12} md={4} >
                                                    <h5>From</h5> 
                                                    <span>Biznet Branch Batam Gedung Graha Pena, Jl. Ahmad Yani, Tlk. Tering, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444 (0778) 4093781</span> 
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    <Item sx={{bgcolor:'#131522', color:'white', borderRadius:5, px:3, py:3}}>
                                        <Box sx={{ flexGrow: 1,}}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={6} className={custom.responsive}>
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
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Updateinvoice;
