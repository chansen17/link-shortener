import React from 'react';
import BgImage from '../assets/bg-boost-desktop.svg';

const Banner = () => {
    return (
        <div className="w-full py-16 grid place-items-center bg-slate-800 relative">
            <img src={BgImage} className="absolute top-0 left-0 h-full w-full" alt="" />
            <div className="z-10 text-center space-y-5">
                <h2 className="text-2xl md:text-3xl text-white font-bold">Boost your links today</h2>
                <button className="rounded-full py-2 px-5 bg-teal-500 hover:bg-teal-200/70 duration-300 font-medium text-white">Get Started</button>
            </div>
        </div>
    );
}

export default Banner;
