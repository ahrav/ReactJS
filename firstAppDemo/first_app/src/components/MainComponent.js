import React from 'react'

function MainComponent(props){
    return (
        <div className="meme">
            <img src={props.state.randImg} alt="" />
            <h2 className="top">{props.state.topText}</h2>
            <h2 className="bottom">{props.state.bottomText}</h2>
        </div>
    )
}

export default MainComponent