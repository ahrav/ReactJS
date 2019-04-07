import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{
    componentDidUpdate() {
        console.log("[OrderSummary] will update")
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(ingKey => {
            return (
                <li key={ingKey}><span  style={{textTransform: 'capitalize'}}>{ingKey}: {this.props.ingredients[ingKey]}</span></li>
            )
        })
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${this.props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled} > CANCEL </Button>
            <Button clicked={this.props.purchaseContinue} btnType="Success"> CONTINUEs </Button>
        </Aux>
        );
    }
} 

export default OrderSummary;