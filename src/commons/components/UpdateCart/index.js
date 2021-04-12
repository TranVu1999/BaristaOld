import React, { Component } from 'react'

export default class UpdateCart extends Component {

    onHandleSubmit = (event) =>{
        event.preventDefault();
    }

    onHandleUpdateCart = (number, prodId) =>{
        this.props.onHandleUpdateCart(prodId, number);
    }

    render() {
        const {value, prodId} = this.props;

        return (
            <form 
                className="d-flex-between product-add-cart"
                onSubmit = {this.onHandleSubmit}
            >
                <div className="form-group--amount">
                    <button 
                        className="btn-increase"
                        onClick = {() => this.onHandleUpdateCart(-1, prodId)}
                    ><span aria-hidden="true" className="icon_minus-06" /></button>
                        <input type="text" value={value} />
                    <button 
                        className="btn-decrease"
                        onClick = {() => this.onHandleUpdateCart(1, prodId)}
                    ><span aria-hidden="true" className="icon_plus" /></button>
                </div>
            </form>
        )
    }
}
