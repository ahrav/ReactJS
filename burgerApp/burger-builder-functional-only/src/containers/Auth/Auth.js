import React, { useState, useEffect } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import { updateObject } from '../../shared/utility';
import { checkValidity } from '../../shared/utility';

const auth = props => {
    const [formControls, setFormControls] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Email Address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true,
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
            },
            valid: false,
            touched: false
        }
    })

    const [isSignUp, setIsSignUp] = useState(true)

    useEffect(() => {
        if (!props.buildingBurger && props.authRedirectPath !== '/'){
            props.onSetAuthRedirectPath();
        }
    })

    const inputChangedHandler = (event, controlName) => {
        const updatedControls =  updateObject(formControls, {
            [controlName] : updateObject(formControls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, formControls[controlName].validation),
                touched: true
            })
        });
        setFormControls(updatedControls);
    }

    const submitHandler = event => {
        event.preventDefault();
        props.onAuthenticate(formControls.email.value, formControls.password.value, isSignUp)
    }

    const switchAuthModeHandler = () => {
        setIsSignUp(!isSignUp)
    }

    const formElementsArray = [];
    for (let key in formControls) {
        formElementsArray.push({
            id: key,
            config: formControls[key],
        })
    }

    let form = formElementsArray.map(formElement => (
        <Input 
            key={formElement.id}
            elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => inputChangedHandler(event, formElement.id)}/>
    ))

    if (props.isLoading){
        form = <Spinner />
    }

    let errorMessage = null;

    if (props.error){
        errorMessage =(
            <p>{props.error.message}</p>
        )
    }

    let authRedirect = null;
    if (props.isAuthenticate) {
        authRedirect = <Redirect to={props.authRedirectPath} />
    }
    return (
        <div className={classes.Auth}>
            {authRedirect}
            {errorMessage}
            <form onSubmit={submitHandler}>
                {form}
                <Button btnType="Success">Submit</Button>
            </form>
            <Button clicked={switchAuthModeHandler} btnType="Danger">SWITCH TO {isSignUp ? 'SIGN IN' : 'SIGN UP'}</Button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.loading,
        error: state.auth.error,
        isAuthenticate: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthenticate: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(auth);