import React from 'react';
import Custom from './payment.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Box from '@mui/material/Box';
import Detailpayment from '../../components/Detail/DetailPayment';
import TitleDashboard from '../../components/Detail/TitleDashboard';

const Paymentmethod = () => {
    const data = [
        { 
            id: '#5F892S3', 
            payment_due: 'Due Jan 1, 2022', 
            bill_to: 'Harun Rasyid', 
            total: '250.000',
        },
    ];
    const link = '/dashboard';
    const active = 'Active';
    const nonactive = 'Nonactive';
    const title = 'Payment Methods';
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack link={link}/> 
                <TitleDashboard title={title} count={`3`}/>
                <Detailpayment status={active} data={data}/> 
                <Detailpayment status={nonactive} data={data}/> 
            </Box>
        </Box>
    );
}

export default Paymentmethod;
