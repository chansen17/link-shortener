import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BgImage from '../assets/bg-boost-desktop.svg';
import { FaSpinner } from 'react-icons/fa';

const API = 'https://api.shrtco.de/v2/';

const getLocalItems =() => {
    let list = localStorage.getItem('items');

    if(list) {
        return JSON.parse(localStorage.getItem('items'));
    } else {
        return [];
    }
}

const InputBox = () => {

    const [input, setInput] = useState('');
    const [links, setLinks] = useState(getLocalItems());
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);

    const notify = () => toast.success('💯 Short link copied!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


    const warning = () => toast.warn('⚠ Woh! Settle down tiger. Try not to spam me!');

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post(API + `shorten?url=${input}`)
        .then(data => {

            // todo do an if statement or something to check to prevent duplucate link being added to state and local storage
            setLinks([...links, data?.data?.result]);
            setLoading(false);

            // if(links?.length > 9) {
            //     warning();
            // }
        });
        setInput('');
    }

    // todo prevent identical links from being added to local storage

    const onDelelete = (id) => {
        console.log(id);
        const newItems = links.filter(l => l.code !== id);
        setLinks(newItems);
    }


    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(links));
    }, [links])
    
    return (
        <div className="w-full">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            <div className="mxw">
                <div className="py-12 px-5 md:px-14 bg-slate-800 relative rounded-lg">
                <img src={BgImage} className="absolute top-0 left-0 h-full w-full rounded-lg" alt="" />
                    <form onSubmit={onSubmit} className="flex flex-col md:flex-row items-center gap-2">
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className='py-2 px-4 z-10 rounded-md w-full md:w-3/4' />
                        <button disabled={input == '' || loading} className={input == '' ? 'py-2 px-4 bg-teal-600 rounded-lg z-10 w-full md:w-1/4 font-semibold text-white' : 'py-2 px-4 bg-teal-400 rounded-lg z-10 w-full md:w-1/4 font-semibold text-white flex items-center justify-center'}>
                            {loading ? <FaSpinner /> : "Shorten it!"}
                        </button>
                    </form>
                </div>
                {/* links */}
                <section>
                {links?.length >= 1 && (
                    <div className="w-full py-4 flex items-center justify-between px-3 bg-gray-100/70 mt-4 rounded-md border-b-2 border-b-teal-500">
                        <div>Here are your shortened links</div>
                        <div>
                            <span className="h-8 w-8 rounded-full grid place-items-center bg-teal-600 text-white font-medium">{links?.length}</span>
                        </div>
                    </div>
                )}
                {!loading && links?.map(link => (
                    <motion.div key={link?.code} initial={{ opacity: 0, translateY: 10, translateX: 10 }} exit={{ opacity: 0 }} animate={{ opacity: 1, translateY: 0, translateX: 0}} className="my-4 py-2 px-3 rounded-md flex justify-between items-center gap-2 md:gap-4">
                        <p className="text-md md:text-lg text-gray-900 truncate w-[150px] md:w-full">{link.original_link}</p>
                        <div className="flex items-center gap-4">
                            <p className="text-md md:text-lg text-teal-400">{link?.short_link}</p>
                            <CopyToClipboard text={link.short_link}
                                onCopy={() => setCopied(true)}
                            >
                                <button onClick={notify} className="py-2 px-4 rounded-md bg-teal-400 text-white hover:bg-gray-900 hover:text-gray-200 duration-300">copy</button>
                                
                            </CopyToClipboard>
                            <button onClick={() => onDelelete(link.code)} className="py-2 px-4 rounded-md bg-teal-600 text-white hover:bg-rose-500 duration-300">-</button>
                        </div>
                    </motion.div>
                ))}
                </section>
            </div>
        </div>
    );
}

export default InputBox;
