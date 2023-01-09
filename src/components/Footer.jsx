import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full py-12 bg-zinc-800">
            <div className="mxw grid md:grid-cols-12">
                <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-100">Shortly</h3>
                </div>
                <div className="col-span-2">
                    <ul className="text-gray-300 font-light text-sm md:text-md space-y-1 capitalize hover:cursor-pointer">
                        <li className="text-md md:text-lg text-gray-100 font-semibold mb-4">Features</li>
                        <li>link shortening</li>
                        <li>branded links</li>
                        <li>analytics</li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <ul className="text-gray-300 font-light text-sm md:text-md space-y-1 capitalize hover:cursor-pointer">
                        <li className="text-md md:text-lg text-gray-100 font-semibold mb-4">Features</li>
                        <li>blog</li>
                        <li>developers</li>
                        <li>support</li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <ul className="text-gray-300 font-light text-sm md:text-md space-y-1 capitalize hover:cursor-pointer">
                        <li className="text-md md:text-lg text-gray-100 font-semibold mb-4">Features</li>
                        <li>about</li>
                        <li>our team</li>
                        <li>careers</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <ul className="text-gray-300 font-light text-md md:text-lg lg:text-xl xl:text-2xl flex items-center gap-2 md:gap-4  ">
                        <li><FaFacebook /></li>
                        <li><FaTwitter /></li>
                        <li><FaPinterest /></li>
                        <li><FaInstagram /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
