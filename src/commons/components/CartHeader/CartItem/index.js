import React, { Component } from "react";
import { connect } from "react-redux";
import { actRemoveItem } from "./../../../modules/Cart/actions";

class CartItem extends Component {
  onHandleRemoveItem = () => {
    const { prodContent } = this.props;
    this.props.onRemoveItem(prodContent.prodId);
  };

  render() {
    const { prodContent } = this.props;
    console.log("prodContent", prodContent);
    return (
      <div className="cart__item">
        <div className="item--thumbnail">
          <a href="/#">
            <img src={prodContent.prodAvatar} alt="product" />
          </a>
        </div>
        <div className="item--text">
          <a href="/#">{prodContent.prodTitle}</a>
          <span>Quanity: {prodContent.amount}</span>
          <p>${prodContent.prodPrice}</p>
        </div>
        <button className="item--control" onClick={this.onHandleRemoveItem}>
          <span aria-hidden="true" className="icon_close" />
        </button>
      </div>
    );
    // return <div className="item--text">{amount}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (prodId) => {
      dispatch(actRemoveItem(prodId));
    },
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
