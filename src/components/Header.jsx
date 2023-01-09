import React from 'react';
import HeaderAsset from '../assets/illustration-working.svg'

const Header = () => {
    return (
        <>
        <div className="w-full py-12 min-h-[50vh] relative overflow-x-hidden">
            <div className="mxw">
                <div className="w-full flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-10 md:gap-y-0 gap-4 md:gap-6">
                    <div>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-800'>More than just shorter links.</h2>
                        <p className='max-w-md py-2 text-md md:text-lg lg:text-xl text-gray-500 font-light'>Build your brands recognition and get detailed insights on your links are performing.</p>
                        <button className='mt-4 py-2 px-4 rounded-full bg-teal-500 hover:bg-teal-500/50 duration-300 text-white font-medium'>Get Started</button>
                    </div>
                    <div>
                        <img src={HeaderAsset} className="ml-24 md:ml-32 lg:ml-52 xl:ml-72" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;
