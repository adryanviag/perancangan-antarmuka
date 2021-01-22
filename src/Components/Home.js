import React from 'react';
import './bg.css';
import Typical from 'react-typical';
import { useSpring, animated } from 'react-spring'
import Socmed from './reusable/Socmed';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai'

const socmeds = [
    {
        element: <AiFillInstagram className="w-8 h-8" />,
        name: 'Instagram',
        hover: 'hover:text-rose-500',
        link: 'https://www.instagram.com/adryanviag08'
    },
    {
        element: <AiFillTwitterCircle className="w-8 h-8" />,
        name: 'Twitter',
        hover: 'hover:text-cyan-400',
        link: 'https://www.twitter.com/adryanviag08'
    },
    {
        element: <AiFillFacebook className="w-8 h-8" />,
        name: 'Facebook',
        hover: 'hover:text-blue-500',
        link: 'https://www.facebook.com/adryanviag08'
    },
    {
        element: <AiOutlineWhatsApp className="w-8 h-8" />,
        name: 'WhatsApp',
        hover: 'hover:text-green-500',
        link: 'https://wa.me/6285355535396'
    },
    {
        element: <AiFillGithub className="w-8 h-8" />,
        name: 'GitHub',
        hover: 'hover:text-gray-600',
        link: 'https://www.github.com/adryanviag'
    },
    {
        element: <AiFillLinkedin className="w-8 h-8" />,
        name: 'LinkedIn',
        hover: 'hover:text-cyan-700',
        link: 'https://www.linkedin.com/in/adryan-viag-ba46a9182/'
    },
]

function Home() {
    const springs = useSpring({
        opacity: 1,
        transform: 'scale(1)',
        from: {
            opacity: 0,
            transform: 'scale(0)'
        },
        config: {
            duration: 400
        }
    })
    return (
        <animated.div style={springs} className="md:bg-fixed custom-img bg-cover bg-bottom py-14">

            <div className="flex justify-center items-center">
                <div className="flex flex-col w-screen items-center">
                    <div className="flex flex-col items-center justify-center w-full my-24">
                        <div className="border-4 w-40 h-40 border-beige m-5 rounded-full">
                            <img src="./img/photo.png" className="h-full w-full object-cover rounded-full" alt="avatar" />
                        </div>
                        <div className="text-white font-bold text-4xl sm:text-5xl md:text-6xl ">
                            It's me <span className="text-beige">Adryan.</span>
                        </div>
                        <div className="text-white font-bold text-2xl mt-2 md:text-3xl ">
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'Hello World',
                                    2000,
                                    'Informatics Student',
                                    1500,
                                    'From Indonesia',
                                    1500,
                                    'ReactJS Newbie',
                                    2000
                                ]}
                            />
                        </div>
                    </div>
                    <div className="flex focus:outline-none text-sm md:text-md justify-evenly items-center md:mt-5 text-beige">
                        {socmeds.map((items, key) => {
                            return <Socmed key={key} {...items} />
                        })}

                    </div>
                </div >
            </div>
        </animated.div >
    )
}

export default Home
