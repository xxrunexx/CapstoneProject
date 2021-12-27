import React from 'react';
import Search from '../components/Search/Search';
import Navbar from '../components/Navbar/Navbar';
import Detail from '../components/Detail/Detail';
import Custom from './homeDashboard.module.css';
// import SearchValue from '../../components/Search/SearchValue';



const Homedashboard = () => {
    return (
        <div className={Custom.background}>
            <div className={`container py-5`}>
                <Navbar/>
                <Search/>
                <Detail value="Testing"/>
                {/* <SearchValue/> */}
            </div>
        </div>
    );
}

export default Homedashboard;
