import * as React from 'react';
import Custom from './dashboard.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Detailpaid from '../../components/Detail/DetailPaid';
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
                <Detailpaid data={data}/>
            </Box>
        </Box>
    );
}

export default Dashboardpaid;
