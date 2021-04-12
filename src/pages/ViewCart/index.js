import React, { Component } from 'react';
import './style.scss';
import MainPage from './../../commons/components/MainPage';
import Breadcrumb from './../../commons/components/Breadcrumb';
import CartList from './CartList';
import CartTotal from './CartTotal';
import CartCalculate from './CartCalculate';
import {connect} from 'react-redux';
import AccordingToggle from '../../commons/components/AccordingToggle';
import { NavLink } from 'react-router-dom';
import CartItemRemoved from './CartItemRemoved';

import {actUpdateUrl} from './../../commons/modules/Url/actions';

class ViewCartPage extends Component {
    getSubTotalCart = () =>{
        const {dataCart} = this.props;
        let cost = 0;
        for(let item of dataCart){
            cost += item.prodPrice * item.amount;
        }
        return cost;
    }

    render() {
        const {dataCart, dataRemoved} = this.props;

        return (
            <MainPage>
                <Breadcrumb mainTitle = "View Cart"/>

                <div className="cf-container cart-page">
                    {
                        dataRemoved.length > 0 ?
                        (
                            <div>
                                <h3>Removed</h3>
                                <CartItemRemoved/>
                            </div>
                        ): null
                    }
                                        
                {
                    dataCart.length > 0 ?
                    (
                        <>
                            <div className="cart__content">
                                <div className="cart--header">
                                    <div className="cart-item">
                                    <div className="product-thumbnail">
                                        <h3>Cart</h3>
                                    </div>
                                    <div className="product-name">Product</div>
                                    <div className="product-price">Price</div>
                                    <div className="product-quanity">Quanity</div>
                                    <div className="product-total">Total</div>
                                    </div>
                                </div>
                                <div className="cart--body">
                                    <CartList/>
                                </div>
                            </div>

                            <CartTotal subTotal = {this.getSubTotalCart()}/>
                            <CartCalculate/>
                        </>    
                        
                        
                    ) :
                    (
                        <div className = "cf-container">
                            <AccordingToggle>
                            <div className="accordition-toggle--box">
                                <div className = "accordition-span">Your cart is currently empty.</div>
                            </div>
                            </AccordingToggle>
                            <NavLink 
                                to = "/shop" 
                                class="return-to-shop"
                            >Return to shop</NavLink>
                        </div>
                    )
                }
                </div>
            </MainPage>
        )
    }

    componentDidMount(){
        this.props.onUpdateUrl({
            params: this.props.match.params,
            url: this.props.match.url,
            path: this.props.match.path
        })
    }
}

const mapStateToProps = state =>{
    return {
        dataCart: state.cartReducer.data,
        dataRemoved: state.cartReducer.removed
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCartPage);
