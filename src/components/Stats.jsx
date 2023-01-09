import React from 'react';
import { FaChartBar, FaTachometerAlt, FaTools } from 'react-icons/fa';

const Stats = () => {
    return (
        <div className="w-full min-h-[50vh] py-12 bg-blue-50">
            <div className="mxw w-full text-center mt-16 py-6">
                <h2 className="text-2xl md:text-3xl font-black text-gray-700">Advanced Statistics</h2>
                <p className="text-md md:text-lg font-light text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, enim nam.</p>

                <section className="relative">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-4 md:gap-y-0 md:gap-x-6 py-24 overflow-hidden">
                        {/* bar */}
                        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[60%] w-2 md:w-full md:h-2 bg-cyan-400" />

                        <div className="h-44 rounded-sm pt-12 pb-6 px-5 bg-white relative text-left shadow-sm">
                            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-slate-800 absolute -top-6 md:-top-10 grid place-items-center">
                            <FaChartBar className="text-lg md:text-xl lg:text-2xl text-teal-500" />
                            </div>
                            <h3 className='text-md md:text-lg lg:text-xl pb-3 text-gray-700 font-bold'>Brand Recognition</h3>
                            <p className='text-sm md:text-md text-gray-500'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                        </div>  

                        <div className="h-44 rounded-sm pt-12 pb-6 px-5 bg-white relative text-left shadow-sm md:mt-6">
                            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-slate-800 absolute -top-6 md:-top-10 grid place-items-center">
                            <FaTachometerAlt className="text-lg md:text-xl lg:text-2xl text-teal-500" />
                            </div>
                            <h3 className='text-md md:text-lg lg:text-xl pb-3 text-gray-700 font-bold'>Detailed Records</h3>
                            <p className='text-sm md:text-md text-gray-500'>Gain insights into who is clicking your links. Knowing when and where people are engaging with you content helps inform better decisions.</p>
                        </div>  

                        <div className="h-44 rounded-sm pt-12 pb-6 px-5 bg-white relative text-left shadow-sm md:mt-12">
                            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-slate-800 absolute -top-6 md:-top-10 grid place-items-center">
                                <FaTools className="text-lg md:text-xl lg:text-2xl text-teal-500" />
                            </div>
                            <h3 className='text-md md:text-lg lg:text-xl pb-3 text-gray-700 font-bold'>Fully customizable</h3>
                            <p className='text-sm md:text-md text-gray-500'>Improve brand awarness and content discoverabilitiy through customizable links, supercharging audience engagement.</p>
                        </div>  
                    </div>

                </section>
            </div>
        </div>
    );
}

export default Stats;
