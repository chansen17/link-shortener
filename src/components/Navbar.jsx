import React from 'react';
import Logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <div className="w-full mxw py-6 flex items-center justify-between gap-2">
            <div className='flex items-center gap-2 md:gap-4'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className='hidden md:flex items-center gap-2'>
                    <a href="#">features</a>
                    <a href="#">pricing</a>
                    <a href="#">resources</a>
                </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
                <button className='py-2 px-4 rounded-lg bg-none text-gray-400 font-medium text-sm md:text-md'>Sign in</button>
                <button className='py-2 px-4 rounded-full bg-cyan-500 text-white font-medium'>Sign up</button>
            </div>
        </div>
    );
}

export default Navbar;
