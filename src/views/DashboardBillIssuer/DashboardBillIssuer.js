import * as React from 'react';
import Box from '@mui/material/Box';
import Custom from './dashboardBillIssuer.module.css';
// import Sidenav from '../../components/SideNav/SideNav';
import Sidenavicon from '../../components/SideNav/SideNavIcon';

const Dashboardbillissuer = () => {
    return (
        <Box className={Custom.background}>
            <Sidenavicon/>
        </Box>
    );
}

export default Dashboardbillissuer;
