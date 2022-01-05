import * as  React from 'react';
// import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import FormProfileUpdated from '../../components/Detail/FormProfileUpdated';
import Custom from './profileUpdated.module.css';
import Box from '@mui/material/Box';

const ProfileUpdated = () => {
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                {/* <NavbarArrowBack/>  */}
                <FormProfileUpdated/>
            </Box>
        </Box>
    );
}

export default ProfileUpdated;

