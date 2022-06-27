import * as React from 'react';
import Custom from './detailInvoice.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Detailinvoiceclient from '../../components/Detail/DetailInvoiceClient';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect } from 'react';

// const data = {
//     id: '#5F892S3',
//     invoice_date: 'Dec 24, 2021',
//     bill_to: 'Harun Rasyid',
//     send_to: 'rasyid.id@gmail.com',
//     payment_date: 'Dec 31, 2021',
//     address: 'Tiban Lama RT 02 RW 15 Sekupang 45311 Batam',
//     from: 'Biznet Branch Batam Gedung Graha Pena, Jl. Ahmad Yani, Tlk. Tering, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444 (0778) 4093781',
//     item_name: '2P Internet + TV',
//     total: '250.000'
// };
// const status = 'Processed';
const link = '/';
const Detailinvoice = () => {
    const [dataApi, setDataApi] = React.useState('');
    // const [data, setData] = React.useState({
    //     id: '',
    //     invoice_date: '',
    //     bill_to: '',
    //     send_to: '',
    //     payment_date: '',
    //     address: '',
    //     from: '',
    //     item_name: '',
    //     total: ''
    // });
    useEffect(() => {
        function getApiData() {
            const paramApi = localStorage.getItem("name");
            axios.get(`http://localhost:8000/invoice/name/${paramApi}`)
                .then(res => {
                    setDataApi(res.data);
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getApiData();
    }, []);

    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack link={link} />
                {console.log("Isinya adalah : " + dataApi)}
                {dataApi.data?.map((data) => {
                    console.log(data);
                    return (
                        <Detailinvoiceclient status={data.payment_status} data={data} />
                    )
                    // console.log("Isi API : " + dataApi);
                }
                )}
                {/* Detailinvoiceclient status={status} data={dataApi} /> */}
            </Box>
        </Box>
    );
}

export default Detailinvoice;
