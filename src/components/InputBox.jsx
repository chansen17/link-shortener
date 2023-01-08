import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BgImage from '../assets/bg-boost-desktop.svg';

const API = 'https://api.shrtco.de/v2/';

const InputBox = () => {

    const [input, setInput] = useState('');
    const [links, setLinks] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();
        
        axios.post(API + `shorten?url=${input}`)
            .then(data => {
                setLinks([...links, data?.data?.result])
            });
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(links));
    })

    useEffect(() => {
        const inStoreItems = localStorage.getItem('items');
        if(inStoreItems) {
            console.log('items are in storage: ', links)
            setLinks(JSON.parse(inStoreItems));
        } else {
            console.log('items not in storage')
        }
        
    }, [])

    
    return (
        <div className="w-full">
            <div className="mxw">
                <div className="py-12 px-5 md:px-14 bg-slate-800 relative rounded-lg">
                <img src={BgImage} className="absolute top-0 left-0 h-full w-full rounded-lg" alt="" />
                    <form onSubmit={onSubmit} className="flex flex-col md:flex-row items-center gap-2">
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className='py-2 px-4 z-10 rounded-md w-full md:w-3/4' />
                        <button disabled={input == ''} className={input == '' ? 'py-2 px-4 bg-cyan-600 rounded-lg z-10 w-full md:w-1/4 font-semibold text-white' : 'py-2 px-4 bg-cyan-400 rounded-lg z-10 w-full md:w-1/4 font-semibold text-white'}>Shorten It!</button>
                    </form>
                </div>
                {/* links */}
                {links?.map(link => (
                    <div key={link?.code} className="my-4 py-2 px-3 rounded-md flex justify-between items-center gap-2 md:gap-4">
                        <p className="text-md md:text-lg text-gray-900 truncate w-[150px] md:w-full">{link.original_link}</p>
                        <div className="flex items-center gap-4">
                            <p className="text-md md:text-lg text-cyan-500">{link?.short_link}</p>
                            <button className="py-2 px-4 rounded-sm bg-cyan-500 text-white hover:bg-gray-900 hover:text-gray-200 duration-300">copy</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InputBox;
