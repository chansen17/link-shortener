import React from 'react';
import Logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <div className="w-full mxw py-6 flex items-center justify-between gap-2">
            <div className='flex items-center gap-6 md:gap-10'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className='hidden text-sm md:text-md font-semibold text-gray-500 md:flex items-center gap-6 capitalize'>
                    <a className="hover:text-black duration-300" href="#">features</a>
                    <a className="hover:text-black duration-300" href="#">pricing</a>
                    <a className="hover:text-black duration-300" href="#">resources</a>
                </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
                <button className='py-2 px-4 rounded-lg bg-none text-gray-400 font-medium text-sm md:text-md hover:text-black'>Login</button>
                <button className='py-2 px-4 rounded-full bg-teal-500 hover:bg-teal-500/50 duration-300 text-white font-medium'>Sign up</button>
            </div>
        </div>
    );
}

export default Navbar;
