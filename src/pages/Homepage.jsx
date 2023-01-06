import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
import Stats from '../components/Stats';

const Homepage = () => {
    return (
        <div>
            <Header />
            <InputBox />
            <Stats />
            <Banner />
        </div>
    );
}

export default Homepage;
