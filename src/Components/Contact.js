import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { GoLocation, GoMail } from 'react-icons/go';
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiOutlineWhatsApp, AiFillFacebook } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className="container relative">
            <div className="contactinfo absolute flex justify-between flex-col">
                <div>
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <GoLocation />
                            <span>Jl. Lubuk Bendahara Timur</span>
                        </li>
                        <li>
                            <GoMail />
                            <span>adryanviag@gmail.com</span>
                        </li>
                        <li>
                            <FaPhone />
                            <span>0853-5553-5396</span>
                        </li>
                    </ul>
                    <ul className="scii">
                        <li><a href="#"><AiFillGithub /></a></li>
                        <li><a href="#"><AiFillInstagram /></a></li>
                        <li><a href="#"><AiFillTwitterCircle /></a></li>
                        <li><a href="#"><AiOutlineWhatsApp /></a></li>
                        <li><a href="#"><AiFillFacebook /></a></li>
                    </ul>
                </div>
            </div>
            <div className="contactform">
                <h2></h2>
                <div className="formbox">
                    <div className="inputbox">
                        <input type="text" name="" required />
                        <span>First Name</span>
                    </div>
                    <div className="inputbox">
                        <input type="text" name="" required />
                        <span>Last Name</span>
                    </div>
                    <div className="inputbox">
                        <input type="text" name="" required />
                        <span>Email Address</span>
                    </div>
                    <div className="inputbox">
                        <input type="text" name="" required />
                        <span>Phone Number</span>
                    </div>
                    <div className="inputbox">
                        <textarea type="text" name="" required />
                        <span>Write your message here..</span>
                    </div>
                    <div className="inputbox">
                        <input type="submit" name="" required />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
