import * as React from 'react';
import Box from '@mui/material/Box';
import Custom from './dashboardBillIssuer.module.css';
import Sidenav from '../../components/SideNav/SideNav';

const Dashboardbillissuer = () => {
    return (
        <Box className={Custom.background}>
            <Sidenav/>
        </Box>
    );
}

export default Dashboardbillissuer;
