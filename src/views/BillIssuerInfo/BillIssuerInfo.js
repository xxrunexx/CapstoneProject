import * as  React from 'react';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import FormBillIssuerInfo from '../../components/Detail/FormBillIssuerInfo';
import Custom from './billIssuerInfo.module.css';
import Box from '@mui/material/Box';
import jwt_decode from "jwt-decode";

const BillIssuerInfo = () => {
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
    const authToken = localStorage.getItem('token');
    let authData = jwt_decode(authToken);
    console.log(authData.userId);
    
    // };
    // console.log(mappedUserInfo);
    // console.log(userDetail());
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack/>
                <FormBillIssuerInfo  data={data} component={FormBillIssuerInfo} authData={authData}/>
            </Box>
        </Box>
    );
}
export default BillIssuerInfo;

