import React from 'react'

function About() {

    return (
        <>
            <div className="bg-beigehh">
                <div className="bg-beigeh mb-3 shadow-md">
                    <div className="text-center py-4 sm:py-10">
                        <h1 className="about font-bold md:text-7xl sm:text-5xl tracking-tight text-3xl">About Me</h1>
                        <p className="md:text-xl text-lg mx-12 tracking-tighter">A simple about me page. Contact me if you want to know more</p>
                    </div>
                </div>
                <div className="flex justify-center md:bg-beigehh lg:my-10">
                    <div className="lg:rounded-l-full mb-2 lg:max-w-6xl md:max-w-2xl sm:max-w-xl max-w-md w-full lg:flex">
                        <div className="h-56 lg:h-auto lg:w-96 lg:rounded-full rounded flex-none bg-cover bg-center text-center overflow-hidden" style={{ backgroundImage: 'url("./img/photo.png")' }} title="Image">
                        </div>
                        <div className="bg-white bg-beigehh p-4 md:p-0 md:px-6 flex flex-col justify-between leading-normal">
                            <div className="">
                                <div className="text-black font-bold text-xl md:text-3xl">Adryan Viag</div>
                                <div className="text-sm">
                                    <p className="text-black leading-none md:text-lg mb-4 text-gray-100">Fullstack Web Developer</p>
                                </div>
                                <p className="text-grey-darker text-base">20 years old kid from Rokan Hulu, Riau. Likes to write some codes. Currently studying Informatics Management in Riau University. Techs that I use are ReactJS as my JavaScript framework and TailwindCSS as my CSS framework.</p>
                                <div className="mt-1 py-4">
                                    <p>HTML</p>
                                    <div className="w-full bg-beigehh">
                                        <div className="text-right text-black w-11/12 bg-gray-100"><span className="mr-2">90%</span></div>
                                    </div>

                                    <p>CSS (TailwindCSS, Bootstrap 4, MaterialUI)</p>
                                    <div className="w-full bg-beigehh">
                                        <div className="text-right text-black w-9/12 bg-gray-100"><span className="mr-2">75%</span></div>
                                    </div>

                                    <p>JavaScript (ReactJS, NodeJS)</p>
                                    <div className="w-full bg-beigehh">
                                        <div className="text-right text-black w-8/12 bg-gray-100"><span className="mr-2">65%</span></div>
                                    </div>

                                    <p>PHP (Codeigniter, Laravel)</p>
                                    <div className="w-full bg-beigehh">
                                        <div className="text-right text-black myphp bg-gray-100"><span className="mr-2">69%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About