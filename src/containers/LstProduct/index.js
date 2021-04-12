import React, { Component } from 'react';
import ProductItem from './ProductItem';

class LstProductContainer extends Component {
    render() {
        return (
            <ul className = "lst-product">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </ul>
        );
    }
}

export default LstProductContainer;