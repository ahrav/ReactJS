import React from 'react'

const userInput = (props) => {
    return (
        <div>
            <input className="UserInput" type="text" placeholder="Enter username" onChange={props.changeUsername}
            value={props.username}/>
        </div>
    )
}

export default userInput