import * as  React from 'react';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import FormBillIssuerInfo from '../../components/Detail/FormBillIssuerInfo';
import Custom from './billIssuerInfo.module.css';
import Box from '@mui/material/Box';

const BillIssuerInfo = () => {
    const link = '/dashboard';
    const data = [
        { 
            name : 'Raviy Bayu',
            email: 'raviybayu@gmail.com', 
            password: '********', 
            company_name: 'Biznet Branch Batam', 
            company_address : 'Gedung Graha Pena, Jl. Ahmad Yani 29444',
            company_phone : '(0778) 4093781',
            company_site : 'biznethome.net',
        },
    ];

    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack link={link}/>
                <FormBillIssuerInfo  data={data} component={FormBillIssuerInfo}/>
            </Box>
        </Box>
    );
}
export default BillIssuerInfo;