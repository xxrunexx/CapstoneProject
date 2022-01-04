import * as React from 'react';
import Custom from './dashboard.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Detailprocessed from '../../components/Detail/DetailProcessed';
import Box from '@mui/material/Box';

const Dashboardprocessed = () => {
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
                <Detailprocessed data={data}/>
            </Box>
        </Box>
    );
}

export default Dashboardprocessed;
