import * as React from 'react';
import Custom from './editInvoice.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Updateinvoice from '../../components/Detail/UpdateInvoice';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Editinvoice = () => {
    const location = useLocation();
    // const dataStatus = React.useRef(false);
    const [dataApi, setDataApi] = React.useState(null);
    const [dataBiDetail, setDataBiDetail] = React.useState(null);
    // console.log(location.state.data.id)

    const [dataInvoice, setDataInvoice] = React.useState({ 
        id: '', 
        created_at: '', 
        client_name: '', 
        client_email: '',
        payment_due: '', 
        client_address: '',
        company_name: '',
        item: '',
        total: '',
        payment_status: '',
    });

    React.useEffect(() => {
        const getInvoices = async () => {
            await axios.get(
                `http://localhost:8000/invoice/${location.state.data.id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((response)=>{
                // setDataApi(response.data.data);
                // console.log("Isi response.data : ", dataApi);
                setDataInvoice({
                    id: response.data.data.id,
                    created_at: response.data.data.created_at,
                    client_name: response.data.data.client_name,
                    client_email: response.data.data.client_email,
                    payment_due: response.data.data.payment_due,
                    client_address: response.data.data.client_address,
                    item: response.data.data.item,
                    total: response.data.data.total,
                    payment_status: response.data.data.payment_status,
                })
            });
        };
        const getBillIssuerDetail = async () => {
            await axios.get(
                `http://localhost:8000/billissuerdetail/${location.state.data.id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((response)=>{
                setDataInvoice({
                    company_name: response.data.data.company_name,
                })
                // console.log("Isi response.data : ", dataApi);
            });
        };
        getInvoices();
        // getBillIssuerDetail();
    },[]);

    // React.useEffect(() => {
    //     const getBillIssuerDetail = async () => {
    //         await axios.get(
    //             `http://localhost:8000/invoice/${location.state.data.id}`,
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             }
    //         )
    //         .then((response)=>{
    //             setDataInvoice({
    //                 company_name: response.data.data.company_name,
    //             })
    //         });
    //     };
    //     getBillIssuerDetail();
    // },[])

    const data = { 
        id: '#5F892S3', 
        created_at: 'Dec 24, 2021', 
        client_name: 'Harun Rasyid', 
        client_email: 'rasyid.id@gmail.com',
        payment_due: 'Dec 31, 2021', 
        client_address: 'Tiban Lama RT 02 RW 15 Sekupang 45311 Batam',
        // from: 'Biznet Branch Batam Gedung Graha Pena, Jl. Ahmad Yani, Tlk. Tering, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444 (0778) 4093781',
        item: '2P Internet + TV',
        total: '250.000'
    };

    // const status = 'Processed';
    const link = '/dashboard';
    console.log("Isi data di editinvoice ", JSON.stringify(dataApi))
    // console.log("Isi data di editinvoice ", dataApi.id)
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack link={link}/> 
                {/* TODO: Ini baru tempat buat update beneran */}
                <Updateinvoice status={dataInvoice.payment_status} data={dataInvoice}/>
                {/* {dataApi?.map((value,key) => {
                return (
                    <Updateinvoice key={key} status={status} data={value}/>
                    );
            })} */}
            </Box>
        </Box>
    );
}

export default Editinvoice;
