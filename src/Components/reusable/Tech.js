import React from 'react'

function Tech(props) {
    return (
        <a target="_blank" rel="noreferrer" href={props.link} className={`mx-5 ${props.hover} transition duration-300 transform hover:scale-150 focus:outline-none `}>
            {props.icon}
        </a>
    )
}

export default Tech
