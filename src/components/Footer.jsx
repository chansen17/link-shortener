import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full py-12 bg-zinc-800">
            <div className="mxw grid grid-cols-1 md:grid-cols-12 place-items-center md:place-items-baseline text-center md:text-justify">
                <div className="md:col-span-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8">Shortly</h3>
                </div>
                <div className="md:col-span-2">
                    <ul className="text-gray-300 font-light text-md space-y-2 capitalize hover:cursor-pointer">
                        <li className="text-xl text-gray-100 font-bold my-6 md:my-4">Features</li>
                        <li className="hover:text-teal-500 duration-200">link shortening</li>
                        <li className="hover:text-teal-500 duration-200">branded links</li>
                        <li className="hover:text-teal-500 duration-200">analytics</li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <ul className="text-gray-300 font-light text-md space-y-2 capitalize hover:cursor-pointer">
                        <li className="text-xl text-gray-100 font-bold my-6 md:my-4">Features</li>
                        <li className="hover:text-teal-500 duration-200">blog</li>
                        <li className="hover:text-teal-500 duration-200">developers</li>
                        <li className="hover:text-teal-500 duration-200">support</li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <ul className="text-gray-300 font-light text-md space-y-2 capitalize hover:cursor-pointer">
                        <li className="text-xl text-gray-100 font-bold my-6 md:my-4">Features</li>
                        <li className="hover:text-teal-500 duration-200">about</li>
                        <li className="hover:text-teal-500 duration-200">our team</li>
                        <li className="hover:text-teal-500 duration-200">careers</li>
                        <li className="hover:text-teal-500 duration-200">contact</li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <ul className="text-gray-300 font-light text-3xl sm:text-2xl lg:text-2xl xl:text-3xl flex items-center gap-6 md:gap-4 mt-8 md:mt-0">
                        <li className="hover:text-teal-500 duration-200 cursor-pointer"><FaFacebook /></li>
                        <li className="hover:text-teal-500 duration-200 cursor-pointer"><FaTwitter /></li>
                        <li className="hover:text-teal-500 duration-200 cursor-pointer"><FaPinterest /></li>
                        <li className="hover:text-teal-500 duration-200 cursor-pointer"><FaInstagram /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
