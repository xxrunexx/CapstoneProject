import * as  React from 'react';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import FormEmail from '../../components/Detail/FormNewPass';
import Custom from './newPass.module.css';
import Box from '@mui/material/Box';

const NewPass = () => {
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack/> 
                <FormEmail/>
            </Box>
        </Box>
    );
}

export default NewPass;

