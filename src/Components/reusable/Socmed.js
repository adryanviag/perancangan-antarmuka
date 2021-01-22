import React from 'react'



function Testing2(props) {
    return (
        <div className={`mx-2 md:mx-4 flex-wrap flex flex-col items-center ${props.hover} transition duration-300 transform hover:scale-150 `}>
            <a target="_blank" rel="noreferrer" href={props.link} className="focus:outline-none ">
                {props.element}
            </a>
            <p className="hidden sm:block">{props.name}</p>
        </div>
    )
}

export default Testing2
