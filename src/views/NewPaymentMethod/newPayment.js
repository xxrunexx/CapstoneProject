import React from 'react';
import Custom from './newPayment.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Box from '@mui/material/Box';
import Formpaymentmethod from '../../components/Detail/FormPaymentMethod';

const Newpayment = () => {
    const link = '/dashboard';
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack link={link}/> 
                <Formpaymentmethod/>
            </Box>
        </Box>
    );
}

export default Newpayment;
