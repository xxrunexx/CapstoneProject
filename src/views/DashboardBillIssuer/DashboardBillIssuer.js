import * as React from 'react';
import Box from '@mui/material/Box';
import Custom from './dashboardBillIssuer.module.css';
import Dashboardbipage from '../../components/Detail/DashboardBiPage';
import jwt_decode from "jwt-decode";
import axios from 'axios';

const Dashboardbillissuer = () => {
    const [dataApi, setDataApi] = React.useState(null);

    React.useEffect(() => {
        const getInvoices = async () => {
            await axios.get(
                'http://localhost:8000/invoice',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((response)=>{
                setDataApi(response.data.data);
                // console.log("Isi response.data : ", dataApi);
            });
        };
        getInvoices();
    },[]);

    
    const token = localStorage.getItem("token");
    let authData = jwt_decode(token);
    return (
        <Box className={Custom.background}>
            {/* {console.log("Isinya adalah : " + JSON.stringify(dataApi))} */}
            {dataApi?.map((value,key) => {
                return (
                    <Dashboardbipage key={key} data={value} auth={authData}/>
                    );
            })}
            {/* <Dashboardbipage 
                data={data} 
                client={clientInfo} 
                auth={authData} 
            /> */}
        </Box>
    );
}

export default Dashboardbillissuer;
