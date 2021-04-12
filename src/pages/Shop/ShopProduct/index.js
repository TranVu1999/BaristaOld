import React, { Component } from 'react';
import ListProduct from './../../../commons/components/ListProduct';


export default class ShopProduct extends Component {
    
    render() {
        const {lstProduct} = this.props;

        return (
            <>
                <ListProduct rowShow = "3" lstProduct = {lstProduct}/>
            </>
        )
    }
}
