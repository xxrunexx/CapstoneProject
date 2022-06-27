import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from '@mui/material/Link';
import custom from './detailDraft.module.css';
import StatusPaid from '../../components/Status/StatusPaid';
import StatusDraft from '../../components/Status/StatusDraft';
import Statusprocessed from '../../components/Status/StatusProcessed';
import Statusunpaid from '../../components/Status/StatusUnpaid';
import { useHistory } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: '#131522',
    color: 'white',
    boxShadow: 'none'
}));
const Detaildashboard = ({data}) => {
    const history = useHistory();
    const linkInvoice = () => {
        history.push({
            pathname: '/editInvoice',
            state: {data: data},
        });
    }
    console.log("Isi Data : ", data);
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container justifyContent="center">
                <Grid item xs={10} >
                    <Item sx={{
                        bgcolor: '#E5E5E5', 
                        color: '#131522', 
                        p:3,
                        mb:3,
                        borderRadius:4
                    }}>
                        <Box sx={{ flexGrow: 1}}>
                            <Grid container justifyContent="space-between" spacing={2}>
                                <Grid item xs={12} md={1} >
                                    <Item sx={{textAlign: 'left', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        {data.id}
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={3} >
                                    <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        {data.payment_due}
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={3} >
                                    <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        <Link component="button" underline="none" sx={{textTransform:'none', color: '#131522'}}>{data.client_name}</Link>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={2} >
                                    <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        {data.total}
                                    </Item>
                                </Grid>
                                {/* <props.component status={data.payment_status}/> */}
                                {/* {console.log("Isi payment status : ", data.payment_status)} */}
                                {
                                    data.payment_status === 'paid' ? <StatusPaid status={data.payment_status}/> : 
                                    data.payment_status === 'unpaid' ? <Statusunpaid status={data.payment_status}/> : 
                                    data.payment_status === 'draft' ? <StatusDraft status={data.payment_status}/> : 
                                    data.payment_status === 'processed' ? <Statusprocessed status={data.payment_status}/> : 
                                    null 
                                }
                                <Grid item xs={12} md={1} >
                                    <Item sx={{textAlign: 'right', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        <Link component="button" underline="none" onClick={linkInvoice}>
                                            <ChevronRightIcon sx={{color:'#FFC700'}} className={custom.rightIcon}/>
                                        </Link>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
        // <h2>{data.client_name}</h2>
    );
}

export default Detaildashboard;
