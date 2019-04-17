
import React from 'react'

const form = props => {
    return (
        <form onSubmit={props.handleSubmit} >
                <input required placeholder="Enter City..." name="city" type="text" value={props.city} onChange={props.changed} />
                <input required placeholder="Enter Country..." name="country" type="text" value={props.country} onChange={props.changed} />
            <button disabled={props.isSubmit}>Get Weather Forecast</button>
        </form>
    )
}

export default form;