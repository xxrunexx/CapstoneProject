import * as React from 'react';
import Custom from './dashboardClient.module.css';
import TitleDashboard from '../../components/Detail/TitleDashboard';
import ButtonBillIssuer from '../../components/Navbar/ButtonBillIssuer';
// import Statusprocessed from '../../components/Status/StatusProcessed';
// import StatusPaid from '../../components/Status/StatusPaid';
// import StatusDraft from '../../components/Status/StatusDraft';
import Detaildashboard from '../../components/Detail/DetailDashboard';
import Box from '@mui/material/Box';

const DashboardClient = () => {
    const data = [
        { 
            id: '#5F892S3', 
            payment_due: 'Due Jan 1, 2022', 
            bill_to: 'Harun Rasyid', 
            total: '250.000',
        },
    ];
    const status = 'Paid';
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <ButtonBillIssuer/> 
                <TitleDashboard/>
                <Detaildashboard status={status} data={data}/> 
                <Detaildashboard status={status} data={data}/>
                <Detaildashboard status={status} data={data}/>
            </Box>
        </Box>
    );
}

export default DashboardClient;
