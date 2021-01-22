import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

const Subscribe = () => {
    const [modal, setModal] = useState(false);

    const handleEvent = () => {
        setModal(!modal);
    }

    return (
        <>
            <div onClick={handleEvent} className={`${modal ? 'opacity-70 activebg' : 'opacity-0 nonebg'} zbg transition duration-1000 fixed bg-gradient-to-br from-beigeh to-beige h-screen w-screen`}></div>
            <div className="btn-modal bg-gray-200 p-10 flex container1  justify-center items-center">

                <a onClick={handleEvent} className="btn btn-msg bg-gradient-to-br from-beige to-beigeh inline-block text-white font-bold uppercase">Contact Me</a>
                <div className={`${modal ? 'activee' : 'none'} contactinfo rounded-lg fixed bg-gradient-to-br from-beige to-beigehh`} id="popup">
                    <div className="content relative flex justify-center items-center flex-col">
                        <SiGmail className="text-red-700 h-20 w-20 md:h-32 md:w-32" />
                        <h2 className="tracking-wide text-xl md:text-3xl text-gray-50 font-semibold">Send Me Your Feedback!</h2>
                        <div className="inputbox">
                            <input className="rounded" type="email" placeholder="Enter Email" />
                        </div>
                        <div className="inputbox">
                            <textarea className="rounded" placeholder="Enter your message" name="text" id="text"></textarea>
                        </div>
                        <div className="inputbox ">
                            <a className="btn btn-sub outline-none bg-red-700 inline-block text-gray-100 rounded font-bold tracking-widest uppercase">Send Message</a>
                        </div>
                    </div>
                    <a className="close absolute" onClick={handleEvent}><AiOutlineClose className="hover:text-red-700 transition duration-300 h-12 text-gray-50 w-12" /></a>
                </div>
            </div >
        </>
    )
}

export default Subscribe

