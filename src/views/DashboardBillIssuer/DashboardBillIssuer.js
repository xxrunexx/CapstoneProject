import * as React from 'react';
import Box from '@mui/material/Box';
import Custom from './dashboardBillIssuer.module.css';
// import Sidenav from '../../components/SideNav/SideNav';
// import Sidenavicon from '../../components/SideNav/SideNavIcon';
import Dashboardbipage from '../../components/Detail/DashboardBiPage';
import StatusPaid from '../../components/Status/StatusPaid';

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
    return (
        <Box className={Custom.background}>
            <Dashboardbipage data={data} client={clientInfo} component={StatusPaid} status={'Paid'} />
        </Box>
    );
}

export default Dashboardbillissuer;
