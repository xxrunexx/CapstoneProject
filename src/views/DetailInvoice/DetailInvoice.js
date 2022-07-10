import * as React from 'react';
import Custom from './detailInvoice.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Detailinvoiceclient from '../../components/Detail/DetailInvoiceClient';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect } from 'react';

const link = '/';
const Detailinvoice = () => {
    const [dataApi, setDataApi] = React.useState('');
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
                }
                )}
            </Box>
        </Box>
    );
}

export default Detailinvoice;
