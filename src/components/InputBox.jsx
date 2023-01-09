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
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [badReq, setBadReq] = useState(false);

    const notify = () => toast.success('Short link copied!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


    // const warning = () => toast.warn('⚠ Woh! Settle down tiger. Try not to spam me!');

    const onSubmit = async (e) => {
        e.preventDefault();
        
        if(input !== '') {
            setLoading(true);
            setError(false);
            axios.post(API + `shorten?url=${input}`)
            .then(data => {
                console.log('response:', data);
                // todo do an if statement or similiar to check and prevent duplucate link being added to state and local storage
                setLinks([...links, data?.data?.result]);
                setLoading(false);
            })
            .catch(err => {
                console.log('an error occured: ', err.response.data);
                // setBadReq(true);
                setErrorMessage(err.response.data.error);
            })
                
        } else {
            setError(true);
        }
        setInput('');
    }

    // todo prevent identical links from being added to local storage

    const onDelelete = (id) => {
        console.log(id);
        const newItems = links.filter(l => l.code !== id);
        setLinks(newItems);
    }

    const refresh = () => {
        window.location.reload();
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(links));
    }, [links]);

    if(errorMessage) {
        return (
            <div className="fixed top-0 left-0 h-screen w-full bg-gray-50/80 backdrop-blur-md grid place-items-center z-50">
                <div className="max-w-2xl mx-auto px-5 space-y-3">
                    <h3 className="text-center">😔</h3>
                    <p className="text-md md:text-lg font-semibold">{errorMessage}</p>
                    <button onClick={refresh} className="w-full mx-auto py-4 px-2 rounded-md bg-teal-500 hover:bg-teal-200 duration-200 font-semibold text-white hover:text-black">Try Again</button>
                </div>
            </div>
        )
    }
    
    return (
        <div className="w-full bg-blue-50">
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
                    <form onSubmit={onSubmit} className="flex flex-col md:flex-row items-center gap-8">
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Shorten a link here.." className={error ? "py-4 px-3 z-10 border-2 outline-none border-red-500 rounded-md w-full md:w-3/4" : "py-4 px-3 z-10 border outline-none rounded-md w-full md:w-3/4"} />
                        <button disabled={loading} className={input == '' ? 'p-4 bg-teal-600 rounded-lg z-10 w-full md:w-1/4 font-semibold text-white' : 'py-4 px-3 bg-teal-400 rounded-lg z-10 w-full md:w-1/4 font-semibold text-white flex items-center justify-center'}>
                            {loading ? <FaSpinner /> : "Shorten it!"}
                        </button>
                    </form>
                    {error && <p className="mt-2 text-sm md:text-md italic font-medium text-rose-500">Please add a link</p>}
                </div>
                {/* links */}
                <section>
                {links?.length >= 1 && (
                    <div className="w-full py-4 flex items-center justify-between px-3 mt-4 rounded-md border-b-2 border-b-purple-800">
                        <div className="text-purple-800">Here are your shortened links</div>
                        <div>
                            <span className="h-8 w-8 rounded-full grid place-items-center bg-purple-900 shadow-lg shadow-purple-700/50 text-white font-medium">{links?.length}</span>
                        </div>
                    </div>
                )}
                {links && links?.map(link => (
                    <motion.div key={link?.code} initial={{ opacity: 0, translateY: 10, translateX: 10 }} exit={{ opacity: 0 }} animate={{ opacity: 1, translateY: 0, translateX: 0}} className="mt-6 bg-white p-3 rounded-md flex justify-between items-center gap-2 md:gap-4">
                        <p className="text-md md:text-lg text-gray-900 truncate w-[150px] md:w-full font-medium">{link.original_link}</p>
                        <div className="flex items-center gap-4">
                            <p className="text-md md:text-lg text-teal-400">{link?.short_link}</p>
                            <CopyToClipboard text={link.short_link}
                                onCopy={() => setCopied(true)}>
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
