import React, { Component } from 'react';
import './style.scss';
import UpdateCart from './../../../commons/components/UpdateCart';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {actUpdateItem, actRemoveItem} from './../../../commons/modules/Cart/actions'

class CartList extends Component {

    onHandleUpdateCart = (prodId, number)=>{
        const prodInfo = {
            prodId,
            number
        };

        this.props.updateItem(prodInfo);
    }

    onHandleRemoveCartItem = (prodId) =>{
        this.props.onRemoveItem(prodId);
    }
    
    renderCartItem = () =>{
        const {dataCart} = this.props;

        return dataCart.map((item, index) =>{
            return (
                <div key = {index} className="cart-item">
                    <div className="product-thumbnail">
                        <button
                            onClick = {() => this.onHandleRemoveCartItem(item.prodId)}
                        >
                            <span aria-hidden="true" className="icon_close" />
                        </button>
                    </div>

                    <div className="product-name">
                        <div className="product-image">
                            <NavLink to = {`/product-detail/${item.prodAlias}`}>
                                <img src={item.prodAvatar} alt="product" />
                            </NavLink>
                            
                        </div>
                        <div className="product-text">
                            <NavLink to = {`/product-detail/${item.prodAlias}`}>
                                {item.prodTitle}
                            </NavLink>
                            
                        </div>
                    </div>
                    <div className="product-price">${item.prodPrice}</div>

                    <div className="product-quanity">
                        <UpdateCart 
                            value = {item.amount} 
                            prodId = {item.prodId}
                            onHandleUpdateCart = {this.onHandleUpdateCart}
                        />
                    </div>

                    <div className="product-total">${item.prodPrice * item.amount + ".00"}</div>
                </div>
            )
        })
    }
    
    render() {
        return (
            <>{this.renderCartItem()}</>
        )
    }
}

const mapStateToProps = state =>{
    return {
        dataCart: state.cartReducer.data
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        updateItem: prodInfo =>{
            dispatch(actUpdateItem(prodInfo))
        },
        onRemoveItem: prodId =>{
            dispatch(actRemoveItem(prodId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
