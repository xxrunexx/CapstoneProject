import * as  React from 'react';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import FormEmail from '../../components/Detail/FormEmail';
import Custom from './forgetPass.module.css';
import Box from '@mui/material/Box';

const ForgetPass = () => {
    const link = '/login';
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack link={link}/> 
                <FormEmail/>
            </Box>
        </Box>
    );
}

export default ForgetPass;

