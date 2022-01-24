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

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: '#131522',
    color: 'white',
    boxShadow: 'none'
}));
const Detaildashboard = (props) => {
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
                                        {props.data[0].id}
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={3} >
                                    <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        {`${props.data[0].payment_due}`}
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={3} >
                                    <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        <Link component="button" underline="none" sx={{textTransform:'none', color: '#131522'}} onClick={props.modal}>{props.data[0].bill_to}</Link>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={2} >
                                    <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        {props.data[0].total}
                                    </Item>
                                </Grid>
                                {/* <props.component status={props.status}/> */}
                                {props.status === 'Paid' ? <StatusPaid status={props.status}/> : props.status === 'Unpaid' ? <Statusunpaid/> : props.status === 'Draft' ? <StatusDraft/> : props.status === 'Processed' ? <Statusprocessed/> : null }
                                <Grid item xs={12} md={1} >
                                    <Item sx={{textAlign: 'right', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        <Link href="#" underline="none">
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
    );
}

export default Detaildashboard;
