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
    const [count, setCount] = React.useState(0);
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
                setCount(response.data.data.length);
                setDatas(response.data);
            });
        };
        getClient();
    },[]);
    // console.log(datas);
    return (  
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack link={link}/> 
                <TitleDashboard title={title} count={count}/>
                {datas?.data.map((value, key) => {
                    return (
                        <Detailpayment key={key} data={value} authToken={token.current}/> 
                    );
                })}
            </Box>
        </Box>
    );
}

export default Paymentmethod;
