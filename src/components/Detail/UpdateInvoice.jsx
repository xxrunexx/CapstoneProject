import * as React from 'react';
import { styled } from '@mui/material/styles';
// import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
// import Statusprocessed from '../Status/StatusProcessed';
import CircleIcon from '@mui/icons-material/Circle';
// import TextField from '@mui/material/TextField';
import custom from './updateInvoice.module.css';
// import Link from '@mui/material/Link';

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
                    <Item sx={{pt:4, pb:3, px:4, borderRadius:5}}>
                        <Box sx={{ flexGrow: 1}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12} lg={5} >
                                    <Item>
                                        <Box sx={{ flexGrow: 1,}}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={4} sx={{ml:3}} >
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
                                            <Grid container spacing={2}>
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
            </Grid>
        </Box>
    );
}

export default Updateinvoice;
