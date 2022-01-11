import * as  React from 'react';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import FormBillIssuerInfo from '../../components/Detail/FormBillIssuerInfo';
import Custom from './billIssuerInfo.module.css';
import Box from '@mui/material/Box';
import Statusprocessed from '../../components/Status/StatusProcessed';

// const BillIssuerInfo = () => {
//     return (
//         <Box className={Custom.background}>
//             <Box className={`container py-5 text-white`}>
//                 <NavbarArrowBack/> 
//                 <FormEmail/>
//             </Box>
//         </Box>
//     );
// }

const BillIssuerInfo = () => {
    const data = [
        { 
            name : 'Raviy Bayu',
            email: 'raviybayu@gmail.com', 
            password: '********', 
            company_name: 'Biznet Branch Batam', 
            company_address : 'Gedung Graha Pena, Jl. Ahmad Yani 29444',
            company_phone : '(0778) 4093781',
            company_site : 'biznethome.net',
        },
    ];
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
            <NavbarArrowBack/>
            <FormBillIssuerInfo status={'Processed'} data={data} component={Statusprocessed}/>
                {/* <ButtonBillIssuer/>  */}
                {/* <TitleDashboard/>
                <Detaildashboard status={'Processed'} data={data} component={Statusprocessed}/> 
                <Detaildashboard status={'Paid'} data={data} component={StatusPaid}/>
                <Detaildashboard status={'Draft'} data={data} component={StatusDraft}/> */}
            </Box>
        </Box>
    );
}
export default BillIssuerInfo;

