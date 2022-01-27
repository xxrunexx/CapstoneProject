import React from 'react';
import Custom from './payment.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Box from '@mui/material/Box';
import Detailpayment from '../../components/Detail/DetailPayment';
import TitleDashboard from '../../components/Detail/TitleDashboard';
import axios from 'axios';

const Paymentmethod = () => {
    const link = '/dashboard';
    const title = 'Payment Methods';
    const token = React.useRef('');
    token.current = localStorage.getItem('token');
    const [datas, setDatas] = React.useState(null);
    React.useEffect(() => {
        const getClient = async () => {
            await axios.get(
                'http://localhost:8000/paymentmethod',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.current}`,
                    },
                }
            )
            .then((response)=>{
            // setResultUser(response.data);
                setDatas(response.data);
            });
        };
        getClient();
    },[]);
    console.log(datas);
    return (  
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack link={link}/> 
                <TitleDashboard title={title} count={`3`}/>
                {datas?.data.forEach(function(value, i){
                    <Detailpayment key={i} /> 
                })}
            </Box>
        </Box>
    );
}

export default Paymentmethod;
