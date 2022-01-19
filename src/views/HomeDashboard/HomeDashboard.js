import React from 'react';
import Dashboardhome from '../../components/Detail/DashboardHome';
import Custom from './homeDashboard.module.css';
import Box from '@mui/material/Box';

const Homedashboard = ({ history }) => {
    return (
        <Box className={Custom.background}>
            <Dashboardhome history={history}/>
        </Box>
    );
}

export default Homedashboard;
