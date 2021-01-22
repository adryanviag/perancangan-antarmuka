import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillPhone, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa';

import './bg.css'

function Footer() {

    return (
        <>
            <footer className="relative w-full h-auto bg-gray-900 flex justify-between flex-wrap ">
                <div className="container flex-wrap justify-between flex flex-row">
                    <div className="sec aboutus">
                        <h2 className="relative font-semibold text-2xl text-beigeh">About</h2>
                        <p className="text-gray-200">20 years old kid from Rokan Hulu, Riau. Likes to write some codes. Currently studying Informatics Management in Riau University. Techs that I use are ReactJS as my JavaScript framework and TailwindCSS as my CSS framework.</p>
                        <ul className="sci flex text-gray-300">
                            <li><a href="/"><AiFillInstagram className="w-8 h-8" /></a></li>
                            <li><a href="/"><AiFillFacebook className="w-8 h-8" /></a></li>
                            <li><a href="/"><AiFillGithub className="w-8 h-8" /></a></li>
                            <li><a href="/"><AiFillTwitterCircle className="w-8 h-8" /></a></li>
                        </ul>
                    </div>
                    <div className="sec quickLinks w-3/12 relative">
                        <h2 className="font-semibold text-2xl text-beigeh relative">Quick Links</h2>
                        <ul className="text-gray-300">
                            <li><a href="/">About</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Help</a></li>
                            <li><a href="/">Terms & Condition</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="sec contact">
                        <h2 className="font-semibold text-2xl text-beigeh relative">Contact Info</h2>
                        <ul className="info text-gray-400 mt-6 relative">
                            <li>
                                <span><FaMapMarkerAlt className="h-6 w-6" /></span>
                                <span>Rokan Hulu, Indonesia.</span>
                            </li>
                            <li>
                                <span><AiFillPhone className="h-6 w-6" /></span>
                                <p><a className="hover:text-beigeh" href="tel:85355535396">+62-853-5553-5396</a></p>
                            </li>
                            <li>
                                <span><BsFillEnvelopeFill className="h-6 w-6" /></span>
                                <p><a className="hover:text-beigeh tracking-tight" href="mailto:adryanviag@gmail.com">adryanviag @gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyrightText bg-gray-800 text-gray-200 text-center">
                <p>Copyright &copy; 2021 AV. All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer
