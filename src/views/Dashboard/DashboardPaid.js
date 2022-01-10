import * as React from 'react';
import Custom from './dashboard.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Statuspaid from '../../components/Status/StatusPaid';
import Detaildashboard from '../../components/Detail/DetailDashboard';
import TitleDashboard from '../../components/Detail/TitleDashboard';
import Box from '@mui/material/Box';

const Dashboardpaid = () => {
    const data = [
        { 
            id: '#5F892S3', 
            payment_due: 'Due Jan 1, 2022', 
            bill_to: 'Harun Rasyid', 
            total: '250.000',
        },
    ];
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack/> 
                <TitleDashboard/>
                <Detaildashboard status={'Paid'} data={data} component={Statuspaid}/> 
            </Box>
        </Box>
    );
}

export default Dashboardpaid;
