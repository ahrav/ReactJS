import React, { useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/auth';
import { connect } from 'react-redux';

const logout = props => {
    useEffect(() => {
        props.onLogout()
    }, [])

    return (<Redirect to="/auth" />);
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null,mapDispatchToProps)(logout);