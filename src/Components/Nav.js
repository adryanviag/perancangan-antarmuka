import React from 'react';
import './bg.css';
import Tech from './reusable/Tech'
import { animateScroll as scroll } from 'react-scroll'

// icons
import { AiOutlineClose } from 'react-icons/ai';
import { DiVisualstudio } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { BiMenuAltRight } from 'react-icons/bi';



const techs = [
    {
        icon: <FaReact className="md:w-10 w-8 h-8 md:h-10 w-8 h-8" />,
        hover: 'hover:text-cyan-400',
        link: 'https://reactjs.org/'
    },
    {
        icon: <DiVisualstudio className="md:w-10 w-8 h-8 md:h-10 w-8 h-8" />,
        hover: 'hover:text-cyan-500',
        link: 'https://code.visualstudio.com/'
    },
    {
        icon: <IoLogoJavascript className="md:w-10 w-8 h-8 md:h-10 w-8 h-8" />,
        hover: 'hover:text-yellow-300',
        link: 'https://www.javascript.com/'
    },
    {
        icon: <AiFillGithub className="md:w-10 w-8 h-8 md:h-10 w-8 h-8" />,
        hover: 'hover:text-gray-900',
        link: 'https://github.com/'
    },
]

function Nav(props) {
    const [toggle, setToggle] = React.useState(false);

    const scrollerToSection = (e) => {
        e.preventDefault();
        setToggle(false)
        scroll.scrollTo(620)
    }

    const toGallery = (e) => {
        e.preventDefault();
        setToggle(false)
        scroll.scrollTo(1360)
    }

    const toTop = (e) => {
        e.preventDefault();
        scroll.scrollToTop();
        setToggle(false);
    }


    const toggleHandler = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <div onClick={toggleHandler} className="text-white" id="toggleIcon"><BiMenuAltRight className={`${toggle ? 'scale-0' : 'scale-1'} transform transition duration-500 absolute h-12 w-12`} /><AiOutlineClose className={`${toggle ? 'scale-1' : 'scale-0'} text-black transform transition duration-500 absolute h-12 w-12`} /></div>
            <div className={`${toggle ? 'translate-y-0' : '-translate-y-full'} transform duration-500 transition menu_top fixed inset-0 bg-gradient-to-br from-beigehh to-beige bg-opacity-50 flex justify-center items-center overflow-y-auto`}>
                <div className="absolute bottom-9 opacity-80">
                    <div>
                        <h1 className="text-center text-2xl left-24 bottom-10">Powered by</h1>
                    </div>
                    <div className="flex flex-row">
                        {techs.map((item, key) => {
                            return <Tech key={key} {...item} />
                        })}
                    </div>
                </div>
                <ul className="relative mb-16">
                    <li><a className="text-5xl md:text-7xl" href="/" onClick={toTop}>Home</a></li>
                    <li><a className="text-5xl md:text-7xl" href="/" onClick={scrollerToSection}>About me</a></li>
                    <li><a className="text-5xl md:text-7xl" href="/" onClick={toGallery}>Gallery</a></li>
                    <li><a className="text-5xl md:text-7xl" href="/">Contact</a></li>
                </ul>
            </div>
        </>
    )
}

export default Nav
