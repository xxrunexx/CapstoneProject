import * as React from 'react';
import Custom from './editInvoice.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Updateinvoice from '../../components/Detail/UpdateInvoice';
import Box from '@mui/material/Box';

const Editinvoice = () => {
    const data = { 
        id: '#5F892S3', 
        invoice_date: 'Dec 24, 2021', 
        bill_to: 'Harun Rasyid', 
        send_to: 'rasyid.id@gmail.com',
        payment_date: 'Dec 31, 2021', 
        address: 'Tiban Lama RT 02 RW 15 Sekupang 45311 Batam',
        from: 'Biznet Branch Batam Gedung Graha Pena, Jl. Ahmad Yani, Tlk. Tering, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444 (0778) 4093781',
        item_name: '2P Internet + TV',
        total: '250.000'
    };
    const status = 'Processed';
    const link = '/dashboard';
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack link={link}/> 
                <Updateinvoice status={status} data={data}/>
            </Box>
        </Box>
    );
}

export default Editinvoice;
