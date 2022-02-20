import * as React from 'react';
import Box from '@mui/material/Box';
import Custom from './dashboardBillIssuer.module.css';
import Dashboardbipage from '../../components/Detail/DashboardBiPage';
import jwt_decode from "jwt-decode";

const Dashboardbillissuer = () => {
    const data = [
        { 
            id: '#5F892S3', 
            payment_due: 'Due Jan 1, 2022', 
            bill_to: 'Harun Rasyid', 
            total: '250.000',
        },
    ];

    const clientInfo = [
        { 
            name: 'Harun Rasyid', 
            email: 'rasyid.id3@gmail.com', 
            nik: '35151545421454',
            phone: '08979484545',
            address: 'Batam Indonesia'
        },
    ];
    const token = localStorage.getItem("token");
    let authData = jwt_decode(token);
    // console.log(decoded);
    return (
        <Box className={Custom.background}>
            <Dashboardbipage 
                data={data} 
                client={clientInfo} 
                auth={authData} 
            />
        </Box>
    );
}

export default Dashboardbillissuer;
