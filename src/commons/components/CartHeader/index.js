import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

class CartHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  renderCartData = () => {
    // const { dataCart } = this.props;
    const { data } = this.state;

    if (data.length > 0) {
      return (
        <>
          {data.map((item, index) => {
            console.log("item", item);
            // return <CartItem key={`cart-${index}`} prodContent={item} />;

            return (
              <>
                <CartItem key={`cart-${index}`} prodContent={{...item}} />
                
              </>
            );
          })}

          <div className="d-flex-between cart__control">
            <NavLink to="/view-cart" className="barista-btn">
              View Cart
            </NavLink>
            <NavLink to="checkout" className="barista-btn">
              Check Out
            </NavLink>
          </div>
        </>
      );
    }

    return <div className="cart-notify">No products in the cart</div>;
  };

  render() {
    return (
      <div className="toggle-box cart--header">{this.renderCartData()}</div>
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return {
        data: [...nextProps.data],
      };
    }
    return {
      data: [],
    };
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.cartReducer.data,
  };
};

export default connect(mapStateToProps)(CartHeader);
