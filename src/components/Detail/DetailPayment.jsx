import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Statusactive from '../Status/StatusActive';
import Statusnonactive from '../Status/StatusNonactive';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: '#131522',
    color: 'white',
    boxShadow: 'none'
}));

const Detailpayment = ({data, authToken}) => {
    const history = useHistory();
    const dataStatus = React.useRef(false);
    dataStatus.current = data.is_active;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .put(
            'http://localhost:8000/paymentmethod/update',
            {
                id: data.id,
                name: data.name,
                is_active: !dataStatus.current,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`,
                },
            }
          )
          .then(function (response) {
            history.go(0);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container justifyContent="center">
                <Grid item xs={8} >
                    <Item sx={{bgcolor: '#E5E5E5', color: '#131522', p:3,mb:3,borderRadius:4}}>
                        <Box sx={{ flexGrow: 1}}>
                            <Grid container justifyContent="space-between" spacing={2}>
                                <Grid item xs={12} md={3} >
                                    <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5', color: '#131522', py:0.8,}}>
                                        {data.name}
                                    </Item>
                                </Grid>
                                {data.is_active ? <Statusactive status='Active'/> : <Statusnonactive status='Nonactive'/>}
                                <Grid item xs={12} md={3} >
                                    <Item sx={{textAlign: 'center', bgcolor: '#E5E5E5',}}>
                                        <form onSubmit={handleSubmit} method="post">
                                            <Link 
                                                component="button" 
                                                underline="none" 
                                                type="submit"
                                                sx={{
                                                    color:'#FFC700', 
                                                    bgcolor: '#131522', 
                                                    px:3, 
                                                    py:1, 
                                                    borderRadius:5
                                                }}>
                                                {`CHANGE STATUS`}
                                            </Link>
                                        </form>
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
