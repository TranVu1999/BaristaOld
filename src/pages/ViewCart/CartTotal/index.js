import React, { Component } from 'react';
import './style.scss';

export default class CartTotal extends Component {
    render() {
        const {subTotal} = this.props;

        return (
            <div className="cart__total">
                <h3>Cart Total</h3>
                <div className="cart__total--content d-flex-between">
                    <div className="cart__total--box d-flex-between">
                        <h4>Subtotal: </h4>
                        <span>${subTotal}.00</span>
                    </div>

                    <div className="cart__total--box d-flex-between">
                        <h4>Shipping: </h4>
                        <span>Free Shipping</span>
                    </div>

                    <div className="cart__total--box d-flex-between">
                        <h4>Total: </h4>
                        <span>${subTotal}.00</span>
                    </div>
                </div>
            </div>
        )
    }
}


