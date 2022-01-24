import * as React from 'react';
import Custom from './newClient.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Formclient from '../../components/Detail/FormClient';
import Box from '@mui/material/Box';

const Newclient = ({history}) => {
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack/> 
                <Formclient history={history}/>
            </Box>
        </Box>
    );
}

export default Newclient;
