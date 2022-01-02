import * as React from 'react';
import Custom from './detailInvoice.module.css';
import Navbardetailinvoice from '../../components/Navbar/NavbarDetailInvoice';
import Status from '../../components/Status/Status';
import Detailinvoiceclient from '../../components/Detail/DetailInvoiceClient';
import Box from '@mui/material/Box';

const data = [
    { 
        id: '#5F892S3', 
        invoice_date: 'Dec 24, 2021', 
        payment_date: 'Dec 31, 2021', 
        bill_to: 'Harun Rasyid', 
        send_to: 'rasyid.id@gmail.com',
        address: 'Tiban Lama RT 02 RW 15 Sekupang 45311 Batam',
        item_name: '2P Internet + TV',
        price: '240.000',
        total: '250.000',
        from: 'Biznet Branch Batam Gedung Graha Pena, Jl. Ahmad Yani, Tlk. Tering, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444 (0778) 4093781'
    },
];

const Detailinvoice = () => {
    return (
        <Box sx={{height:'100%'}} className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <Navbardetailinvoice/> 
                <Status status="Processed"/>
                <Detailinvoiceclient data={data}/>
            </Box>
        </Box>
    );
}

export default Detailinvoice;
