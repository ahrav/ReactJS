import React, {  Component } from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css';
import AuthContext from '../../../context/auth-context'


class Person extends Component{
    constructor(){
        super();
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;
    componentDidMount = () => {
    //   this.inputElement.focus()
        this.inputElementRef.current.focus()
    }
    
    render() {
        return (
            <div className={classes.Person}>
            {this.context.authenticate ? (
                <p>Authenticate! </p>
            ): (
                <p>Please log in</p>
            )}
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input
            ref={this.inputElementRef} 
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name} />
        </div>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;