import * as  React from 'react';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import DetailPaymentGateway from '../../components/Detail/DetailPaymentGateway';
import Custom from './paymentGateway.module.css';
import Box from '@mui/material/Box';

const PaymentGateway = () => {
    const data = [
        { 
            company_name: 'Biznet Branch Batam', 
            company_email : 'home_care@biznetnetworks.com',
        },
    ];
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
            <NavbarArrowBack/>
            <DetailPaymentGateway  data={data} component={DetailPaymentGateway}/>
            </Box>
        </Box>
    );
}
export default PaymentGateway;

