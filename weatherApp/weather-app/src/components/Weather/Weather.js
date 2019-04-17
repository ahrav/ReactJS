import React from 'react';
import Spinner from '../Spinner/Spinner';

const weather = props => {
    let display = null;

    if (props.isSubmitting) {
        display = <Spinner />
    } else {
        display = (
            <div className="weather-info">
            {props.country && props.city && !props.loading && <p className="weather__key">Location: <span className="weather__value"> {props.city}, {props.country}</span></p>}
            {props.temp && !props.loading && <p className="weather__key">Temperature: <span className="weather__value">{props.temp}</span></p>}
            {props.humidity && !props.loading &&<p className="weather__key">Humidity: <span className="weather__value">{props.humidity}</span></p>}
            {props.description && !props.loading &&<p className="weather__key">Weather Conditions: <span className="weather__value"> {props.description}</span></p>}
        </div>
        )
    }
    return display
}

export default weather;