import React, { useReducer } from 'react';
import axios from 'axios';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';


const app = props => {

  const initialState = {
    country: '',
    city: '',
    weatherDescription: '',
    temp: '',
    humidity: '',
    isSubmitting: false,
    valid: false,
    loading: true,
    error: ''
  }

  const weatherReducer = (state, action) => {
    switch (action.type){
      case 'UPDATE':
        return action.payload
      case 'UPDATE_CITY':
        return {
          ...state,
          city: action.payload,
          loading: true,
          isSubmitting: false
        }
      case 'UPDATE_COUNTRY':
        return {
          ...state,
          country: action.payload,
          loading: true,
          isSubmitting: false
        }
      case 'VALIDATE':
        return {
          ...state,
          valid: action.payload
        }
      case 'ERROR':
        return {
          ...state,
          error: action.payload
        }
      case 'SET_SUBMIT':
        return {
          ...state,
          isSubmitting: action.payload
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(weatherReducer, initialState)

  const inputChangeHandler = event => {
    if (event.target.name === 'country'){
        dispatch({type: 'UPDATE_COUNTRY', payload: event.target.value})
    }
    if (event.target.name === 'city'){
        dispatch({type: 'UPDATE_CITY', payload: event.target.value})
    }
    if (event.target.value.trim() === '') {
        const payload = {
          valid: false,
          error: 'Please enter values into fields'
        }
        dispatch({type: 'VALIDATE', payload: payload})
    } else {
      dispatch({type: 'VALIDATE', payload: true})
    }
}


  const onSubmitWeather = event => {
    event.preventDefault()
    dispatch({type: 'SET_SUBMIT', payload: true})
    const cityName = state.city
    const countryName = state.country
    const key = '35ec4b332e0cbd03e44633952ccd3397'
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&&APPID=${key}`)
      .then(response => {
        const weatherObject ={
          country: countryName,
          city: cityName,
          weatherDescription: response.data.weather[0].description,
          temp: ((response.data.main.temp - 273 ) * (9/5) +32).toFixed(0),
          humidity: response.data.main.humidity,
          isSubmitting: false,
          loading: false
        }
        dispatch({type: 'UPDATE', payload: weatherObject})
      })
      .catch(error => {
        console.log(error)
        dispatch({type: 'ERROR', payload: 'Sorry Could Not Find Location'})
      })

  }

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
            <div className="col-xs-5 title-container">
              <Title />
            </div>
            <div className="col-xs-7 form-container">
              <Form
              country={state.country}
              city={state.city}
              changed={(event) => inputChangeHandler(event)} 
              handleSubmit={(event) => onSubmitWeather(event)}
              error={state.error}
              isSubmit={state.isSubmitting}/>
              {state.error ? <h1 className="error">{state.error}</h1> : 
              <Weather
              description={state.weatherDescription}
              temp={state.temp}
              humidity={state.humidity}
              city={state.city}
              country={state.country} 
              loading={state.loading}/>
              }
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default app;