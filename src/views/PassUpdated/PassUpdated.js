import * as  React from 'react';
import FormPassUpdated from '../../components/Detail/FormPassUpdated';
import Custom from './passUpdated.module.css';
import Box from '@mui/material/Box';

const PassUpdated = () => {
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <FormPassUpdated/>
            </Box>
        </Box>
    );
}

export default PassUpdated;

