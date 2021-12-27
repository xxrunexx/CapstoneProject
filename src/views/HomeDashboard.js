import React from 'react';
import Search from '../components/Search/Search';
import Navbar from '../components/Navbar/Navbar';
import Custom from './homeDashboard.module.css'
// import SearchValue from '../../components/Search/SearchValue';



const Homedashboard = () => {
    return (
        <div className={Custom.background}>
            <Navbar/>
            <Search/>
            {/* <SearchValue/> */}
        </div>
    );
}

export default Homedashboard;
