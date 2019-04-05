import React from 'react'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <h3>My username is: {props.username}</h3>
            <p>I’m blaming Ducky for this. She came up with an idea for a game thread, that involves writing scenes from the middle of book. A scene can be pages long, however. It seemed that something shorter might be just the thing.</p>
            <p>A paragraph needn’t be several sentences long, but might be only a sentence or two, or a single line of dialogue.</p>
        </div>
    )
}

export default userOutput