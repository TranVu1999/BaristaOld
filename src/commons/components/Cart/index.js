import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import {
  actCloseCart,
  actRemoveItem,
  actUpdateItem,
} from "./../../modules/Cart/actions";

class Cart extends Component {
  onHandleCloseCart = () => {
    this.props.onCloseCart(false);
  };

  onUpdateCartItem = (prodId, number) => {
    const prodInfo = {
      prodId,
      number,
    };

    this.props.onUpdateCartItem(prodInfo);
  };

  onRenderCart = () => {
    const { cartInfo } = this.props;

    if (cartInfo.length > 0) {
      return cartInfo.map((item, index) => {
        return (
          <div className="cart--item" key={index}>
            <div className="product-thumb">
              <img src={item.prodAvatar} alt="product" />
            </div>
            <div className="product-text">
              <button
                className="btn-close"
                onClick={() => this.onRemoveItemCart(item.prodId)}
              >
                <span aria-hidden="true" className="icon_close"></span>
              </button>
              <h4>{item.prodTitle}</h4>
              <p className="product-price">
                {item.prodPromo ? (
                  <del>
                    <span class="price-symboy">$</span>
                    {item.prodPromo}
                  </del>
                ) : (
                  ""
                )}
                ${item.prodPrice}
              </p>
              <div className="update-cart">
                <button
                  className="btn-increase"
                  onClick={() => this.onUpdateCartItem(item.prodId, -1)}
                >
                  <span aria-hidden="true" className="icon_minus-06" />
                </button>
                <input type="text" value={item.amount} />
                <button
                  className="btn-decrease"
                  onClick={() => this.onUpdateCartItem(item.prodId, 1)}
                >
                  <span aria-hidden="true" className="icon_plus" />
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
    return null;
  };

  renderTotalCart = () =>{
    const { cartInfo } = this.props;
    if(cartInfo.length > 0){
      let total = 0;
      for(let itemCart of cartInfo){
        total += itemCart.prodPrice * itemCart.amount
      }

      return total;
    }
    return 0;
  }

  onRemoveItemCart = (prodId) => {
    this.props.onRemoveItemCart(prodId);
  };

  render() {
    const { isOpen } = this.props;

    return (
      <div className={isOpen ? "cart open" : "cart"}>
        <div className="cart-container">
          <div className="cart--title">
            <h2>You are purchasing</h2>
            <button onClick={this.onHandleCloseCart}>
              <span aria-hidden="true" className="icon_close"></span>
            </button>
          </div>
          <div className="cart--body">{this.onRenderCart()}</div>

          <div className="cart--footer">
            <div className="d-flex-between sub-total">
              <span>Subtotal</span>
              <b>${this.renderTotalCart()}.00</b>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <a href="/#" className="barista-btn btn-viewcart">
              View Cart
            </a>
            <a href="/#" className="barista-btn btn-checkout">
              Check out
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.cartReducer.isOpen,
    cartInfo: state.cartReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseCart: (isOpen) => {
      dispatch(actCloseCart(isOpen));
    },
    onRemoveItemCart: (prodId) => {
      dispatch(actRemoveItem(prodId));
    },
    onUpdateCartItem: (prodInfo) => {
      dispatch(actUpdateItem(prodInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
