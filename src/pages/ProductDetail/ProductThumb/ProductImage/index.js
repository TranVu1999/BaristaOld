import React, { Component } from 'react';
import './style.scss'

export default class ProductImage extends Component {

    onChoseImage = () =>{
        this.props.onChoseImage(this.props.indexImg);
    }

    render() {
        const {prodImg} = this.props;

        return (
            <div 
                className="product-item--image"
                onClick = {this.onChoseImage}
            >
                <div className="product-thumb">
                    <img src={prodImg} alt="product" />
                </div>
            </div>
        )
    }
}
