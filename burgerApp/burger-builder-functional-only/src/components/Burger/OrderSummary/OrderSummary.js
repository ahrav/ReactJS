import React from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
        return (
            <li key={ingKey}><span  style={{textTransform: 'capitalize'}}>{ingKey}: {props.ingredients[ingKey]}</span></li>
        )
    })
    return (
        <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCanceled} > CANCEL </Button>
        <Button clicked={props.purchaseContinue} btnType="Success"> CONTINUEs </Button>
    </Aux>
    );
} 

export default orderSummary;