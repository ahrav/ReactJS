import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

const checkout = props => {

    const checkoutCancel = () => {
        props.history.goBack();
    }

    const checkoutContinue = () => {
        props.history.replace('/checkout/contact-data');
    }
    
    let summary = <Redirect to="/" />
    if (props.ingredients){
        const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null
        summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary 
                ingredients={props.ingredients}
                checkoutContinue={checkoutContinue}
                checkoutCancel={checkoutCancel}/>
                <Route 
                path={props.match.path + '/contact-data'}
                component={ContactData}/>
            </div>
        )
    }
    return summary
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps)(checkout);