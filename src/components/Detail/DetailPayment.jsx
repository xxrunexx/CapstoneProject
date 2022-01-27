import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from '@mui/material/Link';
import custom from './detailDraft.module.css';
import Statusactive from '../Status/StatusActive';
import Statusnonactive from '../Status/StatusNonactive';
import { useHistory } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: '#131522',
    color: 'white',
    boxShadow: 'none'
}));

const Detailpayment = ({data}) => {
    const history = useHistory();
    const linkInvoice = () => {
        history.push({
            pathname: '/editInvoice'
        });
    }
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container justifyContent="center">
                <Grid item xs={7} >
                    <Item sx={{bgcolor: '#E5E5E5', color: '#131522', p:3,mb:3,borderRadius:4}}>
                        <Box sx={{ flexGrow: 1}}>
                            <Grid container justifyContent="space-between" spacing={2}>
                                <Grid item xs={12} md={3} >
                                    <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        {data.name}
                                    </Item>
                                </Grid>
                                {data.status ? <Statusactive status='Active'/> : <Statusnonactive status='Nonactive'/>}
                                <Grid item xs={12} md={3} >
                                    <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        <Link component="button" underline="none">
                                            {/* <ChevronRightIcon sx={{color:'#FFC700'}} className={custom.rightIcon}/> */}
                                            {`UPDATE STATUS`}
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

export default Detailpayment;
