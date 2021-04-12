import React, { Component } from 'react';
import './style.scss';

export default class CartCalculate extends Component {
    render() {
        return (
            <div className="cart__calculate">
                <h3>Calculate Shipping</h3>
                <div className="d-flex-between">
                    <div className="calculate--box">
                    <form className="coupon">
                        <div className="form-group d-flex-start">
                        <input type="text" placeholder="Coupon Code" />
                        <button className="coffee-btn">Add To Cart</button>
                        </div>
                    </form>
                    </div>
                    <div className="calculate--box">
                    <a href="/#" className="coffee-btn procced-to-checkout">Procced To Checkout</a>
                    </div>
                </div>
            </div>
        )
    }
}
