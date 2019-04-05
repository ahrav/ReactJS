import React from 'react'

const validation = (props) => {
    const textValidation = props.textLength >= 5 ? <h3> Text long enough! </h3> : <h3>Text too short! </h3>
    return (
        <div>
            {textValidation}
        </div>
    )
}

export default validation