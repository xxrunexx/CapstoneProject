import * as React from 'react';
import Custom from './editInvoice.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Updateinvoice from '../../components/Detail/UpdateInvoice';
import Statusprocessed from '../../components/Status/StatusProcessed';
import Box from '@mui/material/Box';

const Editinvoice = () => {
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack/> 
                <Updateinvoice status={'Processed'} component={Statusprocessed}/>
            </Box>
        </Box>
    );
}

export default Editinvoice;
