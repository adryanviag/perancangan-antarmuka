import React from 'react'

const Photo = (props) => {
    return (
        <div className="card">
            <div className="box">
                <div className="imgBx">
                    <img className="border-4 border-beigehh rounded-md" src={props.img} alt={props.alt} />
                </div>
                <div className="contentBx rounded-md">
                    <div className="bg-gradient-to-br from-beige to-beigeh rounded">
                        <h2>{props.title}</h2>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photo
